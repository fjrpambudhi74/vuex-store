<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        {{ cartItemCount }} Cart
      </v-btn>
    </template>
    <v-list>
      <v-list-item two-line v-for="item in cart" :key="item.product.id">
        <v-list-item-content class="minicart">
          <v-list-item-title>{{ item.product.title }}</v-list-item-title>
          <v-list-item-subtitle
            >{{ item.quantity }} X Rp{{
              item.product.price
            }}</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-icon
          class="pl-2"
          @click.prevent="$event.stopPropagation(removeCart(item.product))"
        >
          mdi-delete
        </v-icon>
      </v-list-item>
    </v-list>
    <div class="px-3">
      <v-divider></v-divider>
      <p class="pt-4 spacer">Total : ${{ cartTotalPrice }}</p>
      <v-btn
        outlined
        class="mt-2 btn-clear"
        @click.prevent="$event.stopPropagation(clearCart())"
        >Clear</v-btn
      >
    </div>
  </v-menu>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartItemCount", "cartTotalPrice"]),
    // {
    //   cart() {
    //     return this.$store.state.cart;
    //   },
    //   cartItemCount() {
    //     return this.$store.getters.cartItemCount;
    //   },
    //   cartTotalPrice() {
    //     return this.$store.getters.cartTotalPrice;
    //   },
    // },
  },

  mounted() {
    this.getCartItems();
  },
  methods: {
    ...mapActions(["removeCart", "clearCart", "getCartItems"]),
    // removeCart(product) {
    //   this.$store.dispatch("removeCart", product);
    // },
    // clearCart() {
    //   this.$store.dispatch("clearCart");
    // },
  },
};
</script>

<style>
.minicart {
  /* margin: 0 100px; */
  width: 200px;
}
</style>