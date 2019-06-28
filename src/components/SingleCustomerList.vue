<template>
  <div>
    Ime i prezime:
    <router-link :to="routeToCustomer">{{customer.fullName}}</router-link>
    <br>
    Email: {{customer.email}}
    <button type="submit" @click="handleDelete">Delete</button>
  </div>
</template>

<script>
export default {
  props: ["customer"],

  methods: {
    handleDelete() {
      this.$emit("delete-customer");
    }
  },

  computed: {
    routeToCustomer() {
      return `/customers/${this.customer.id}`;
    }
  }
};
</script>
