<template>
    <div class="about">
        <Header></Header>
        <div class="about__page">
            <h4 style="font-size:30px;color:#002be8;">Станица O нас
            </h4>
        </div>
    </div>
</template>
<script>
import Header from '../components/header/Header.vue';
export default {
    name: "About",
    components: { Header }
}
</script>
<style lang="scss" scoped>
.about {
    background: #d7d7d9;
    min-height: 100vh;
    &__page {
        padding-top: 100px;
        text-align: center;
    }
}
</style>