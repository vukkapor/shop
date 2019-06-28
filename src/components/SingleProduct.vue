<template>
  <div>
    Naziv proizvoda:
    {{product.name}}
    <br>
    Quantity:
    {{product.quantity}}
    <button type="submit" @click="addProduct">+</button>
    <button type="submit" @click="removeProduct">-</button>
  </div>
</template>

<script>
import { productService } from "@/services/products";
export default {
  props: ["product"],

  methods: {
    addProduct() {
        productService.increment(this.product)
    },
    removeProduct() {
        productService.decrement(this.product)
    }
  }
};
</script>
