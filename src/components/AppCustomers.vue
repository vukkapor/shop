<template>
<div>
  <ul>
    <li v-for="(customer, index) in customers" :key="index">
      <SingleCustomer :customer="customer" @delete-customer="deleteCustomer(customer)"/>
    </li>
  </ul>
  <CustomerForm/>
</div>
</template>

<script>

import { customerService } from '@/services/customers'
import SingleCustomer from '@/components/SingleCustomer'
import CustomerForm from '@/components/CustomerForm'

export default {
  data() {
    return {
      customers: customerService.list()
    };
  },
  
  components: {
    SingleCustomer,
    CustomerForm
  },

  methods: {
    deleteCustomer(customer) {
      customerService.remove(customer)
    }
  },
  

};
</script>