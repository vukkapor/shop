<template>
<div>
  <ul>
    <li v-for="(customer, index) in customers" :key="index">
      <SingleCustomerList :customer="customer" @delete-customer="deleteCustomer(customer)"/>
    </li>
  </ul>
  <CustomerForm/>
</div>
</template>

<script>

import { customerService } from '@/services/customers'
import SingleCustomerList from '@/components/SingleCustomerList'
import CustomerForm from '@/components/CustomerForm'
import SingleCustomer from '@/components/SingleCustomer'

export default {
  data() {
    return {
      customers: customerService.list()
    };
  },
  
  components: {
    SingleCustomerList,
    CustomerForm,
    SingleCustomer
  },

  methods: {
    deleteCustomer(customer) {
      customerService.remove(customer)
    }
  },
  

};
</script>