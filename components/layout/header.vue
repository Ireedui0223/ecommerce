<template>
  <v-row>
    <v-col cols="8" class="d-flex flex-row align-center">
      <nuxt-link to="/" class="text-decoration-none">
        <p class="text-h3 white--text mb-0">404</p>
      </nuxt-link>
      <!-- <div class="user pl-3">
        <v-img
          class="rounded-circle avatar text-center align-center"
          width="50px"
          height="50px"
          ><span>I</span>
        </v-img>
      </div> -->
      <v-spacer></v-spacer>
    </v-col>
    <v-col class="d-flex flex-row justify-end dark align-center">
      <nuxt-link to="/" class="pr-2">
        <div class="account d-flex flex-row align-center">
          <v-icon class="pr-2" color="white">mdi-account-circle</v-icon>
          <p class="text-uppercase ma-0 white--text">account</p>
        </div>
      </nuxt-link>
      <nuxt-link class="px-4" to="/">
        <v-btn icon color="white">
          <v-icon dark>mdi-cart-variant</v-icon></v-btn
        ></nuxt-link
      >
      <v-btn icon color="white"><v-icon dark>mdi-menu</v-icon></v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
.avatar {
  background: violet !important;
}
a {
  text-decoration: none;
}
</style>
