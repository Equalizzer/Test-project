<template>
  <div class="form-wrapper restore">
    <b-container>
      <b-row>
        <b-col cols="9">
          <h3 class="restore-header fs-30 font-weight-bold">Restore Password</h3>
          <ValidationObserver ref="restore_observer">
            <b-form @submit.stop.prevent="restore">
              <!--   Email   -->
              <ValidationProvider
                name="email"
                rules="required|email"
              >
                <b-form-group
                  label-class="form-label"
                  label-for="email"
                  slot-scope="{ errors }"
                  :invalid-feedback="errors[0]"
                >
                  <b-form-input
                    id="email"
                    placeholder="Электронная почта"
                    v-model="restore_email"
                    :state="errors[0] ? false : null"
                    trim
                  />
                </b-form-group>
              </ValidationProvider>

              <!--  Restore button  -->
              <div class="d-grid gap-2 mt-33 mb-35">
                <div>
                  <b-button
                    variant="primary"
                    block
                    type="submit"
                  >
                    Send
                  </b-button>
                </div>
              </div>
              <!--  Forgot password ?  -->
              <div class="mt-2 mb-22">
          <span class="mr-1 fs-14 ">Don't have an account ?
            <button class="link-button" > Register</button>
          </span>
              </div>
            </b-form>
          </ValidationObserver>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {ValidationProvider, ValidationObserver} from "vee-validate"

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      restore_email: '',
    }
  },
  methods: {
    async restore() {
      let valid = await this.$refs.restore_observer.validate();
      if (!valid) return false;
    },
  }
}
</script>

<style scoped>
.restore{
  height: 61rem;

}
.restore-header {
  margin: 2.5rem 2.8rem 4rem;
}

.link-button{
  background: none !important;
  border: none;
  padding: 0 !important;
  color: #069;
  text-decoration: underline;
  cursor: pointer;
}

</style>
