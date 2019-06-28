<template>
  <div>
    Ime i prezime: {{customer.fullName}}
    <br>
    Email: {{customer.email}}
    <br>Kupljeni proizvodi:
    <table style="width:100%">
      <tr>
        <th>Proizvod</th>
      </tr>
      <tr v-for="(proizvod, index) in customer.products" :key="index">
        <td>{{proizvod}}</td>
      </tr>
    </table>
  </div>
</template>


<script>
import { customerService } from "@/services/customers";

export default {
  computed: {
    customer() {
      return customerService.find(this.$route.params.id);
    }
  }
};
</script>