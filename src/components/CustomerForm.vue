<template>
  <form @submit.prevent="addNewCustomer">
    <div>
      <label for="fullName">Full Name</label>
      <input type="text" id="fullName" v-model="newCustomer.fullName">
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="newCustomer.email">
    </div>
    <button type="submit">Add a new contact</button>
  </form>
</template>

<script>

import { customerService } from '@/services/customers'

export default {
data () {
  return {
    newCustomer: {
      fullName: "",
      email: "",
      products: []
    }
  }
},

methods: {
  addNewCustomer(newCustomer) {
    customerService.add(this.newCustomer)
    this.newCustomer = {
      fullName: "",
      email: "",
      products: []
    }
  }
}

};
</script>
