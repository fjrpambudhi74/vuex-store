<template>
  <v-container>
    <v-row>
      <v-col md="4" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductCard from "./ProductCard";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["products"]),
    // products() {
    //   return this.$store.state.products;
    // },
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
};
</script>

<style>
</style>