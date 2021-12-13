<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="8">
          <input type="text" v-model="form.email">
          <input type="text" v-model="form.password">
          <b-button @click="sendToBack" class="btn btn-success">Log In</b-button>
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
        email: 'test@gmail.com',
        password: '123456'
      }
    }
  },
  methods: {
    sendToBack() {
      // return new Promise((resolve, reject) => {
      //     axios.post('/auth/login', this.form)
      //           .then((result) => {
      //             console.log(result)
      //           })
      //           .catch(error => {
      //             console.log(error)
      //           })
      // })
      return new Promise((resolve, reject) => {
        axios.get('/test/data')
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
