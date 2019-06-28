<template>
<div>
  <ul>
    <li v-for="(customer, index) in customers" :key="index">
      <SingleCustomer :customer="customer" @delete-customer="deleteCustomer(customer)"/>
    </li>
  </ul>
</div>
</template>

<script>

import { customerService } from '@/services/customers'
import SingleCustomer from '@/components/SingleCustomer'

export default {
  data() {
    return {
      customers: customerService.list()
    };
  },
  
  components: {
    SingleCustomer
  },

  methods: {
    deleteCustomer(customer) {
      customerService.remove(customer)
    }
  },
  

};
</script>