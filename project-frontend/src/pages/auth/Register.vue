<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="8">
          <input type="text" v-model="form.name" placeholder="Name">
          <input type="text" v-model="form.email" placeholder="Email">
          <input type="text" v-model="form.password" placeholder="Password">
          <b-button @click="sendToBack" class="btn btn-success">Register</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    sendToBack() {
      return new Promise((resolve, reject) => {
        console.log('asdasdsa')
        axios.post('/register', this.form)
          .then((result) => {
            console.log(result)
          })
          .catch(error => {
            console.log(error)
          })
      })
    }
  }
}
</script>

<style scoped>

</style>
