<template>
  <div>
    Ime i prezime: {{customer.fullName}}
    <br>
    Email: {{customer.email}}
    <button type="submit" @click="handleDelete">Delete</button>
  </div>
</template>

<script>
export default {
    props: ['customer'],



    methods: {
        handleDelete() {
            this.$emit("delete-customer")
        }
    }
};
</script>
