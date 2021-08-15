<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style>
.v-toast {
  z-index: 9999 !important;
  
  margin-right: 0px !important;
}
</style>
