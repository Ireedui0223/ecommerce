<template>
  <v-container class="pa-0">
    <v-card color="black" width="100%">
      <v-card-title class="footerSub">
        <v-row class="d-flex flex-row justify-center">
          <v-col class="text-center">
            <v-card height="100%" color="transparent">
              <v-card-title class="text-h5 pb-10">Бүртгүүлэх</v-card-title>
              <v-card-subtitle class="text-left pb-2"
                >Lorem epson Lorem epsonLorem epsonLorem epsonLorem epsonLorem
                epson Lorem epsonLorem epson Lorem epson Lorem
                epson</v-card-subtitle
              >
              <v-card-actions>
                <v-text-field
                  aria-hidden=""
                  placeholder="email address"
                  outlined
                  v-model="mail"
                  :rules="nameRules"
                  append-icon="mdi-arrow-right"
                  @click:append="register"
                ></v-text-field>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="text-center">
            <v-card height="100%" color="transparent"
              ><v-card-title class="pb-8 text-h5">Бидний тухай</v-card-title>
              <v-card-subtitle>
                <nuxt-link to="/" class="white--text">
                  <p class="text-left py-2 text-body-1">
                    Гэрээт дэлгүүрүүд
                  </p></nuxt-link
                >
                <nuxt-link to="/" class="white--text">
                  <p class="text-left py-2 text-body-1">
                    Хөгжүүлэгчид
                  </p></nuxt-link
                >
              </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col class="text-center">
            <v-card height="100%" color="transparent">
              <v-card-title class="text-h5"> Холбоо барих</v-card-title>
              <v-card-subtitle>
                <!-- <v-list>
                  <v-list-item-group>
                    <v-list-item
                      ><v-list-item-icon
                        ><v-icon>mdi-phone</v-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            >+976 91853040
                          </v-list-item-title></v-list-item-content
                        ></v-list-item-icon
                      ></v-list-item
                    >
                  </v-list-item-group></v-list
                > -->
                <v-list color="transparent">
                  <v-list-item-group>
                    <!-- number -->
                    <v-list-item class="pa-0" disabled>
                      <v-list-item-icon>
                        <v-icon>mdi-phone</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title class="text-left">
                          +976 91853040
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <!-- mail -->
                    <v-list-item class="pa-0" disabled>
                      <v-list-item-icon>
                        <v-icon>mdi-email</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title class="text-left">
                          example@gmail.com
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <!-- location -->
                    <v-list-item class="pa-0" disabled>
                      <v-list-item-icon>
                        <v-icon>mdi-map-marker</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title class="text-left">
                          Mongolia Ulaanbaatar
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-subtitle></v-card
            >
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-actions class="d-flex justify-space-between">
        <v-row class="mb-0"
          ><v-col cols="4">
            <span>&copy; {{ new Date().getFullYear() }}</span>
          </v-col>
          <v-col class="icons d-flex justify-center" cols="4">
            <a href="https://www.facebook.com " target="_"
              ><v-icon class="px-2">mdi-facebook</v-icon></a
            >
            <a href="https://www.instagram.com " target="_"
              ><v-icon class="px-2">mdi-instagram</v-icon></a
            >
            <a href="https://www.twitter.com " target="_"
              ><v-icon class="px-2">mdi-twitter</v-icon></a
            >
            <a href="https://www.youtube.com " target="_"
              ><v-icon class="px-2">mdi-youtube</v-icon></a
            >
          </v-col>
          <v-col class="d-flex flex-row justify-end" cols="4">
            <p class="mb-0 pr-8">Terms of Service</p>
            <p class="mb-0">Privacy Policy</p>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mail: "",
      nameRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },
  methods: {
    register() {
      console.log(this.mail);
    },
  },
};
</script>

<style>
.footerSub {
  height: 50%;
}
</style>
