<template>
  <v-hover v-slot="{ hover }">
    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
      <v-img :aspect-ratio="16 / 9" :src="product.image">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out deep-purple accent-4 v-card--reveal display-3 white--text"
            style="height: 100%"
          >
            ${{ product.price }}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <v-btn
          @click="addToCart()"
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">Category Name</div>
        <router-link :to="{ name: 'Product', params: { id: product.id } }">
          <h3 class="display-1 font-weight-light orange--text mb-2">
            {{ product.title }}
          </h3>
        </router-link>

        <div class="font-weight-light title mb-2">
          {{ product.description }}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["addProduct"]),
    addToCart() {
      this.addProduct({
        product: this.product,
        quantity: 1,
      });
    },
    // addToCart() {
    //   this.$store.dispatch("addProduct", {
    //     product: this.product,
    //     quantity: 1,
    //   });
    // },
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
a {
  text-decoration: none;
}
</style>