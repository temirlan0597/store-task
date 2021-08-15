<template>
    <div class="contacts">
        <Header></Header>
        <div class="contacts__page">
            <h4 style="font-size:30px;color:#002be8;">Станица контакты</h4>
        </div>
    </div>
</template>
<script>
import Header from '../components/header/Header.vue';
export default {
    name: "Contacts",
    components: { Header }
}
</script>
<style lang="scss" scoped>
.contacts {
    background: #d7d7d9;
    min-height: 100vh;
    &__page {
        padding-top: 100px;
        text-align: center;
    }
}
</style>