<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav  class="ml-auto">
        <b-nav-item :to="{name : 'Login'}">Login</b-nav-item>
        <b-nav-item :to="{name : 'Registration'}">Registration</b-nav-item>
        <b-nav-item :to="{name : 'Forgot'}">Forgot Password</b-nav-item>
        <b-nav-item :to="{name : 'Profile'}">Profile</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
