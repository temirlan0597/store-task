<template>
  <div class="medicine">
    <PreLoader v-if="isLoading"></PreLoader>  
    <div  v-else>
        
      <!--show-select-->
      <v-data-table
        :search="search"
        :headers="headers"
        :items="users"
        item-key="phone"
        class="medicine__datatable"
        :footer-props="{
          showFirstLastPage: true,
          'items-per-page-text': 'Количество лекарств в странице'
        }"
        :header-props="{ sortByText: 'Сортировка по' }"
      >
        <template v-slot:top>
          <v-row>
            <v-col md="6" sm="6" cols="12">
              <v-text-field
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                label="Поиск..."
                solo
                flat
                hide-details
                background-color="#F3F6F9"
                class="medicine__search"
              ></v-text-field>
            </v-col>
            <v-col md="6" sm="6" align="end" cols="12" class="medicine__row">
              
                <v-btn
                class="medicine__exportbtn"
                color="#1BC5BD"
                dark
                @click="openCreateModal"
                >
                <v-icon class="mr-2">mdi-plus</v-icon> Добавить</v-btn
                >
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.index="{ item, index }">
          <h4 class="medicine__compname">{{ index + 1 }}</h4>
        </template>
        <template v-slot:item.fullName="{ item }">
            <v-chip
            style="border-radius: 5px;"
            color="rgba(27, 197, 189, 0.25)"
            dark
            @click="goToDateails(item)"
          >
            <h4 class="medicine__compname">{{ item.fullName }}</h4>
          </v-chip>
        </template>
        <template v-slot:item.avatarUrl="{ item }">
          <v-img :src="item.avatarUrl" width="50" height="50" style="border-radius: 12px; margin: 5px 0px"></v-img>
        </template>
        <template v-slot:item.action="{ item }">
          <v-icon
            color="#3699FF"
            style="margin-right:5px;border: 2px solid #F3F6F9; box-sizing: border-box; border-radius: 4px;background:#F3F6F9;"
            @click.prevent="editMedicine(item)"
            >mdi-pencil-box-outline</v-icon
          >
          <v-icon
            color="red"
            style="margin-left:5px;border: 2px solid #F3F6F9; box-sizing: border-box; border-radius: 4px;background:#F3F6F9;"
            @click="deleteM(item)"
            >mdi-delete</v-icon
          >
        </template>
        <template v-slot:no-data>
          <div>Пользователей нет</div>
        </template>
      </v-data-table>
      <v-dialog v-model="deleteDialog" max-width="300">
        <v-card>
          <v-card-title class="headline">
            Вы действительно хотите удалить?
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="deleteDialog = false">
              Отменить
            </v-btn>

            <v-btn color="green darken-1" text @click="deleteUser">
              Удалить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="createDialog" persistent max-width="600px">
        <v-card>
            <v-card-title color="#1BC5BD">
            <span class="headline">Информация о лекарстве</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6" lg="6" style="padding: 12px 12px 0px 12px;">
                        <v-text-field
                        v-model="user.fullName"
                        label="ФИО"
                        required
                        solo
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" style="padding: 12px 12px 0px 12px;">
                        <v-text-field
                        v-model="user.email"
                        label="Электронная почта"
                        solo
                        persistent-hint
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" style="padding: 0px 12px;">
                        <v-text-field
                        v-model="user.birthday"
                        label="Дата рождения"
                        required
                        solo
                        type="date"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" style="padding: 0px 12px;">
                        <v-text-field
                        v-model="user.phone"
                        label="Телефон номер"
                        solo
                        persistent-hint
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6" style="padding: 0px 12px;">
                        <v-select
                            v-model="user.gender"
                            :items="['male', 'female']"
                            label="Пол"
                            persistent-hint
                            solo
                            required
                        ></v-select>
                    </v-col>
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="createDialog = false"
            >
                Отменить
            </v-btn>
            <v-btn color="blue darken-1" text @click="actionBtn">
                Сохранить
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
  </div>
</template>
<script>
import { userService } from '../../_services/user.service';
import PreLoader  from '../../components/preloader/PreLoader.vue'
import moment from 'moment';
export default {
  components: {
    PreLoader,
  },
  /*props: {
    users: Array
  },*/
  data() {
    return {
      search: "",
      createDialog: false,
      editDialog: false,
      deleteDialog: false,
      importDialog: false,
      isLoading: false,
      headers: [
        {
          text: "#",
          align: "start",
          sortable: false,
          value: "index"
        },
        {
          text: "Фото",
          align: "start",
          value: "avatarUrl"
        },
        { text: "ФИО", value: "fullName" },
        { text: "Дата рождения", value: "birthday" },
        { text: "Пол", value: "gender" },
        { text: "Почта", value: "email" },
        { text: "Телефон", value: "phone" },
        { text: "Дата регистрации", value: "regDate" },
        { text: "", value: "action", sortable: false }
      ],
      user: {},
      showData: [],
      users: [],
      count: null,
    };
  },
  computed: {
    stateUsers() {
      return this.$store.state.storage.users;
    }
  },
  created() {
    this.users = this.stateUsers;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 800)
      
  },
    methods: {
        goToDateails(item) {
          this.$router.push({name: 'UserProfile', params: { userTitle: item.fullName ,user: item}})
        },
        openCreateModal() {
            this.createDialog = true;
            this.created = true;
        },
        editMedicine(item) {
            this.user = item;
            this.createDialog = true;
        },
        actionBtn() {
            if(this.created) {
                this.saveUser();
            } else {
                this.updateUser();
            }
        },
        saveUser() {
            this.isLoading = true;
            console.log(this.user);
            this.user.birthday = moment(this.user.birthday).format('DD.MM.YYYY');
            this.user.regDate = moment(new Date()).format('DD.MM.YYYY');
            this.user.date = new Date();
            this.users.push(this.user);
            localStorage.setItem('users', JSON.stringify(this.users));
            console.log(localStorage.getItem('users'));
            this.createDialog = false;
            this.$toast.success("Успешно сохранен!");
            this.isLoading = false;
            this.created = false;
            this.user = {};
        },
        updateUser() {
        this.isLoading = true;
        console.log(this.medicine);
        this.medicine.userId = this.medicine.supplierId;
        userService.update(this.medicine)
            .then(res => {
            console.log(res);
            this.createDialog = false;
            this.isLoading = false;
            this.user = {};
            this.$toast.succes("Успешно обновлен!");
            })
            .catch(err => {
            this.isLoading = false;
            console.log(err);
            });
        },
        deleteUser() {
            this.isLoading = true;
            this.deleteDialog = false;
            console.log(this.users)
            this.users = this.users.filter(i => i.fullName != this.user.fullName)
            console.log(this.users)
            localStorage.setItem('users', JSON.stringify(this.users));
            this.isLoading = false;
            this.$toast.success("Успешно удален!");
            this.user = {};
        },
        deleteM(item) {
            this.user = item;
            this.deleteDialog = true;
        },
  }
};
</script>
<style lang="scss" scoped>
.medicine {
  height: 100%;
  top: 10;
  border-radius: 10px;
  margin: 20px 10px 0px 10px;
  padding-top: 70px;
  &__search {
    margin: 0px 0px 0px 20px !important;
    padding-left: 20px;
    background-color: #f3f6f9;
    width: 300px;
  }
  &__title {
    margin: 10px;
  }
  &__addbtn {
    margin: 10px;
    color: #ffffff;
  }
  &__exportbtn {
    margin: 10px;
    color: #ffffff;
  }
  &__compname {
    color: #1890ff;
    font-weight: 400;
  }
}
.theme--light.v-btn {
  color: #fff;
}
.elevetion-1 .v-data-table-header {
  background-color: #f3f6f9;
}
.theme--light.v-data-table-header {
  background-color: #f3f6f9;
}
::-webkit-scrollbar-track {
  background: yellow;
}
/*.v-dialog > .v-card > .v-toolbar {
  position: sticky;
  top: 0;
  z-index: 999;
}*/
@media screen and (min-width: 200px) and (max-width: 500px) {
  .medicine {
    height: 100%;
    top: 10;
    border-radius: 10px;
    margin: 20px 10px 0px 10px;
    &__row {
      display: flex;
      justify-content: center;
    }
    &__search {
      background-color: #f3f6f9;
      width: 90%;
    }
    &__title {
      margin: 10px;
    }
    &__addbtn {
      margin: 10px;
      color: #ffffff;
    }
    &__exportbtn {
      margin: 5px;
      font-size: 11px;
      color: #ffffff;
      & i {
        font-size: 16px;
      }
    }
    &__compname {
      color: #1890ff;
      font-weight: 400;
    }
  }
  .v-btn {
    padding: 0px 10px !important;
  }
}
</style>
