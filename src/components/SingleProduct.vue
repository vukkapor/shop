<template>
  <div>
    Naziv proizvoda:
    {{product.name}}
    <br>
    Quantity: 
    {{product.quantity}}
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>
