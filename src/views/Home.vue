<template>
    <div class="main">
        <Header></Header>
        <div class="main__cards">
        
            <v-row>
                <v-col md="3" sm="6" xs="6" lg="3" cols="6">
                    <v-card class="main__cards__card">
                        <v-row>
                            <v-col md="4" sm="4" lg="4" cols="6" align="center">
                                <div class="main__cards__card__icon" style="border: 1px solid #9694ff;border-radius: 10px;background: #9694ff;">
                                    <v-icon color="#fff">mdi-account-multiple mdi-48px</v-icon>
                                </div>
                            </v-col>
                            <v-col md="8" sm="8" lg="8" cols="8" align="start">
                                <h5 class="main__cards__card__title">Пользователи</h5>
                                <h2 class="main__cards__card__count">{{ stateUsers.length}}</h2>
                            </v-col>
                        </v-row>
                        
                    </v-card>
                </v-col>
                <v-col md="3" sm="6" xs="6" lg="3" cols="6">
                    <v-card class="main__cards__card">
                        <v-row>
                            <v-col md="4" sm="4" lg="4" cols="6" align="center">
                                <div class="main__cards__card__icon" style="background:#57caeb;border-radius: 10px;border: 1px solid #57caeb;">
                                    <v-icon color="#fff">mdi-chart-line mdi-48px</v-icon>
                                </div>
                            </v-col>
                            <v-col md="8" sm="8" lg="8" cols="8" align="start">
                                <h5 class="main__cards__card__title">Со-ние (муж/жен)</h5>
                                <h2 class="main__cards__card__count">{{male.length}} / {{female.length}} </h2>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col md="3" sm="6" xs="6" lg="3" cols="6">
                    <v-card class="main__cards__card">
                        <v-row>
                            <v-col md="4" sm="4" lg="4" cols="6" align="center">
                                <div class="main__cards__card__icon" style="background:#5ddab4;border-radius: 10px;border: 1px solid #5ddab4;">
                                    <v-icon color="#fff">mdi-file-document mdi-48px</v-icon>
                                </div>
                            </v-col>
                            <v-col md="8" sm="8" lg="8" cols="8" align="start">
                                <h5 class="main__cards__card__title">Мужчины</h5>
                                <h2 class="main__cards__card__count">{{male.length}}</h2>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col md="3" sm="6" xs="6" lg="3" cols="6">
                    <v-card class="main__cards__card">
                        <v-row>
                            <v-col md="4" sm="4" lg="4" cols="6" align="center">
                                <div class="main__cards__card__icon" style="background:#ff7976;border-radius: 10px;border: 1px solid #ff7976;">
                                    <v-icon color="#fff">mdi-information-variant mdi-48px</v-icon>
                                </div>
                            </v-col>
                            <v-col md="8" sm="8" lg="8" cols="8" align="start">
                                <h5 class="main__cards__card__title">Женщины</h5>
                                <h2 class="main__cards__card__count">{{female.length}}</h2>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
import Header from '../components/header/Header.vue';
export default {
    name: "Home",
    components: { Header },
    computed: {
        stateUsers() {
            return this.$store.state.storage.users;
        }
    },
    data() {
        return {
            count: null,
            users: [],
            female: null,
            male: null
        };
    },
    created() {
        this.getFemales();
    },
    methods: {
        
            async getFemales() {
                this.female = this.stateUsers.filter(i => i.gender == 'female')
                this.getMales();
            },
            async getMales() {
                this.male = this.stateUsers.filter(i => i.gender == 'male')
            }
    }
}
</script>
<style lang="scss" scoped>
.main {
    background: #d7d7d9;
    min-height: 100vh;
    &__cards {
        padding: 110px 30px 30px 30px;
        &__card {
            max-width: 300px;
            min-height: 120px;
            border-radius: 17px !important;
            &__icon {
                margin: 20px;
                border: 1px solid #9694ff;
                width: 60px;
                height: 60px;
                padding: 5px;
                border-radius: 10px;
                background: #9694ff;
            }
            &__title {
                padding: 20px 5px 5px 5px;
                font-size: 16px;
                color: #9e9aa0;
            }
            &__count {
                padding: 0px 10px;
            }
        }
    }
}
</style>