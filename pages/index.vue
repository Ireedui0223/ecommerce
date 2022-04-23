<template>
  <div>
    <v-img
      height="400px"
      gradient="to bottom right, 	rgb(13, 13, 12, 0.6),	rgb(13, 13, 12,0.6)"
      :src="require('~/assets/ecom.jpg')"
    >
      <v-container>
        <Header />
        <v-card
          class="pt-8 mt-8 text-center justify-center"
          elevation="0"
          color="transparent"
        >
          <v-card-title
            class="text-center d-flex align-center justify-center white--text text-h4 mb-5"
          >
            Онлайн худалдааны цогц флотформ
          </v-card-title>
          <v-card-subtitle class="text-center white--text text-body-1"
            >Та хүссэн бараагаа хүссэн дэлгүүрээс аваарай</v-card-subtitle
          >
          <div class="d-flex justify-center">
            <v-card-actions class="inputaction d-flex justify-center"
              ><v-text-field
                v-model="searchText"
                placeholder="Хайж буй бүтээгдэхүүний нэр..."
                outlined
                filled
                color="rgb(153, 153, 102)"
                append-icon="mdi-magnify"
                @click:append="search"
                class="input"
                hide-details=""
                aria-hidden=""
              ></v-text-field
            ></v-card-actions>
          </div>
        </v-card> </v-container
    ></v-img>
    <List />
  </div>
</template>

<style>
.input {
  background: rgba(196, 196, 196, 0.4);
}
.inputaction {
  width: 60% !important;
}
</style>
<script>
import Header from "~/components/layout/Header";
import List from "~/components/main/list";
export default {
  components: {
    Header,
    List,
  },
  data() {
    return {
      searchText: "",
    };
  },
  name: "IndexPage",
  methods: {
    search() {
      console.log(this.searchText);
    },
  },
};
</script>
