<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="(product, index) in products" :key="index">
        <!-- {{ product }} -->
        <!-- <v-card elevation="2" rounded="xl">
         
          {{ product.prodcutname }}
          <v-card-title><v-img :src="product.image"></v-img></v-card-title>
        </v-card> -->

        <!-- dialog model -->

        <v-dialog v-model="dialog" width="60vw">
          <template v-slot:activator="{ on, attrs }">
            <v-card elevation="2" rounded="xl" v-on="on" v-bind="attrs">
              <v-img :src="product.image" class="align-end">
                <div class="disc">
                  <v-card-title class="d-flex flex-row justify-space-between"
                    ><p class="mb-0">apple watch</p>
                    <p class="mb-0">une</p></v-card-title
                  >
                  <v-card-subtitle>company</v-card-subtitle>
                </div>
              </v-img>
            </v-card>
          </template>

          <Dialog />
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "Vuex";
import Dialog from "~/components/product/dialog";
export default {
  computed: {
    ...mapState({
      products: (state) => state.product.products.data,
    }),
  },
  components: {
    Dialog,
  },
  data() {
    return {
      dialog: false,
      currentPost: null,
    };
  },
};
</script>

<style>
.disc {
  background: rgba(196, 196, 196, 0.2);
}
</style>
