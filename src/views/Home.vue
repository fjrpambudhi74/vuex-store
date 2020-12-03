<template>
  <div class="home">
    <Banner />
    <v-spacer></v-spacer>
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner";
import ProductList from "../components/ProductList.vue";

export default {
  name: "Home",
  components: {
    Banner,
    ProductList,
  },
};
</script>
