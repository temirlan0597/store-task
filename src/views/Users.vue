<template>
    <div class="users">
        <PreLoader v-if="isLoading"/>
        <Header></Header>
        <div class="users__content">
            <Table></Table>
        </div>
    </div>
</template>
<script>
import Table from  '../components/table/Table.vue'
import Header from '../components/header/Header.vue'
//import { userService } from '@/_services/user.service'
import PreLoader from  '../components/preloader/PreLoader.vue';
export default {
    name: "Users",
    components: { Table , Header, PreLoader},
    data() {
        return {
            users: [],
            isLoading: false,
        };
    },
    computed: {
        stateUsers() {
        return this.$store.state.storage.users;
        }
    },
    created() {},
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.users {
    background: #d7d7d9;
    min-height: 100vh;
}
</style>