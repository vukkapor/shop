<template>
  <div>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <SingleProduct :product="product" @delete-product="deleteProduct(product)"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { productService } from "@/services/products";
import SingleProduct from "@/components/SingleProduct"
export default {
  data() {
    return {
      products: productService.list()
    };
  },

  components: {
    SingleProduct
  }
};
</script>