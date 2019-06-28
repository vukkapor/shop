<template>
  <div>
    Pretraga proizvoda:
    <input type="text" v-model="search">
    <ul>
      <li v-for="(product, index) in filteredProducts" :key="index">
        <SingleProduct :product="product" @delete-product="deleteProduct(product)"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { productService } from "@/services/products";
import SingleProduct from "@/components/SingleProduct";
export default {
  data() {
    return {
      products: productService.list(),
      search: ""
    };
  },

  components: {
    SingleProduct
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter(prod => prod.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  }
};
</script>