<template>
  <v-container class="my-5">
    <v-row v-if="product">
      <v-col md="3"><img :src="product.image" /></v-col>
      <v-col md="6" offset-md="2"
        ><h2 class="display-1">{{ product.title }}</h2>
        <h3 class="title font-weight-regular">${{ product.price }}</h3>
        <v-row>
          <v-col md="3">
            <v-text-field
              v-model="foo"
              type="number"
              label="Quantity"
              @click:append-outer="increment"
              @click:prepend="decrement"
            ></v-text-field>
          </v-col>
          <v-col md="9">
            <v-btn
              class="mt-3"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              @click="addToCart()"
            >
              Add To Cart
            </v-btn>
          </v-col>
        </v-row>
        <h3 class="subtitle-1 mb-2">Description</h3>
        <p>
          {{ product.description }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      foo: 0,
    };
  },
  computed: {
    ...mapState(["product"]),
    // product() {
    //   return this.$store.state.product;
    // },
  },
  mounted() {
    this.getProduct(this.id);
    // this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    increment() {
      this.foo = parseInt(this.foo, 10) + 1;
    },
    decrement() {
      this.foo = parseInt(this.foo, 10) - 1;
    },
    ...mapActions(["getProduct", "addProduct"]),
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

<style>
</style>