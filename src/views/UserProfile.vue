<template>
    <div class="profile">
        <Header></Header>
        <div class="profile__user">
            <v-row>
                <v-col md="2" sm="2" cols="10" align="center">
                    <div class="medicine__avatar">
                        <v-img
                        class="medicine__avatar__img elevation-4"
                        alt="дф"
                        :src="this.user.avatarUrl"
                        ></v-img>
                    </div>
                </v-col>
                <v-col md="2" sm="2" cols="12" justify="start">
                    <v-list-item class="grow" three-line>
                        <v-list-item-content>
                            <h2  style="font-family:Roboto;font-weight:400; padding: 10px;margin: 10px 0px;">
                                ФИО:
                            </h2>
                                <h2  style="font-family:Roboto;font-weight:400; padding: 10px;margin: 10px 0px;">
                                Почта:
                            </h2>
                                <h2  style="font-family:Roboto;font-weight:400; padding: 10px;margin: 10px 0px;">
                                Дата рождения:
                            </h2>
                            <h2  style="font-family:Roboto;font-weight:400; padding: 10px;margin: 10px 0px;">
                                Пол:
                            </h2>

                            <h2  style="font-family:Roboto;font-weight:400; padding: 10px;margin: 10px 0px;">
                                Дом. номер:
                            </h2>
                            <h2  style="font-family:Roboto;font-weight:400; padding: 10px;margin: 10px 0px;">
                                Нация
                            </h2>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col md="3" sm="3" cols="12" justify="start">
                    <v-list-item class="grow" three-line>
                        <v-list-item-content>
                            <h2  style="font-family:Roboto;font-weight:400; padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.fullName }}
                            </h2>
                                <h2  style="font-family:Roboto;font-weight:400; padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.email }}
                            </h2>
                                <h2  style="font-family:Roboto;font-weight:400; padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.birthday }}
                            </h2>
                            <h2  style="font-family:Roboto;font-weight:400; padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.gender }}
                            </h2>

                            <h2  style="font-family:Roboto;font-weight:400; padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.phone }}
                            </h2>
                            <h2  style="font-family:Roboto;font-weight:400; padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.nat }}
                            </h2>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col md="2" sm="2" cols="12" justify="start">
                    <v-list-item class="grow" three-line>
                        <v-list-item-content>
                            <h2  style="font-family:Roboto;font-weight:400;padding: 10px;margin: 10px 0px;">
                                Тел. номер:
                            </h2>
                            <h2  style="font-family:Roboto;font-weight:400;padding: 10px;margin: 10px 0px;">
                                Страна:
                            </h2>
                                <h2  style="font-family:Roboto;font-weight:400;padding: 10px;margin: 10px 0px;">
                                Город:
                            </h2>
                                <h2  style="font-family:Roboto;font-weight:400;padding: 10px;margin: 10px 0px;">
                                ZIP код:
                            </h2>
                            <h2  style="font-family:Roboto;font-weight:400;padding: 10px;margin: 10px 0px;">
                                Имя пользователя:
                            </h2>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col md="3" sm="3" cols="12" justify="start">
                    <v-list-item class="grow" three-line>
                        <v-list-item-content>
                            <h2  style="font-family:Roboto;font-weight:400;padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.cell }}
                            </h2>
                            <h2  style="font-family:Roboto;font-weight:400;padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.location.country }}
                            </h2>
                                <h2  style="font-family:Roboto;font-weight:400;padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.location.city }}
                            </h2>
                                <h2  style="font-family:Roboto;font-weight:400;padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.location.postcode }}
                            </h2>
                            <h2  style="font-family:Roboto;font-weight:400;padding: 10px; border: 1px solid #00ffea;border-radius: 10px; background: #00ffea;color: #002be8;margin: 10px 0px;">
                                {{ this.user.login.username }}
                            </h2>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
        </div>   
    </div>
</template>
<script>
import Header from '../components/header/Header.vue'
export default {
    name: "UserProfile",
    components: { Header },
    data() {
        return {
            user: {},
        }
    },
    created() {
        this.user = this.$route.params.user;
    }
}
</script>
<style lang="scss" scoped>
.profile {
    background: #d7d7d9;
    min-height: 100vh;
    &__user {
        padding: 100px 20px 20px 20px;
    }
}
</style>