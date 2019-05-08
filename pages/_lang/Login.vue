<template>
  <div class="login">
    <header-banner :title="'Login'" :desc="''" :img="headerImage"></header-banner>

    <div class="container">
      <div class="alert alert-warning" v-if="err" v-text="err"></div>
      <label for="email">
        <input id="email" class="form-control" type="email" v-model="loginData.username" placeholder="Username">
      </label>
      <label for="password">
        <input id="password" class="form-control" type="password" v-model="loginData.password" placeholder="Password">
      </label>
      <button class="btn btn-success" @click="postLogin">
        login
      </button>

    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: {
    'header-banner': HeaderBanner
  },
  data () {
    return {
      headerImage: '/img/header/lotte_about_visual.jpg',
      screenWidth: '',
      loginData: {
        username: '',
        password: ''
      },
      err: ''
    }
  },
  middleware: 'notAuthenticated',
  methods: {
    postLogin() {
      this.$axios.$post('/api/users/login', this.loginData)
        .then(res => {
          console.log(res)
          const auth = {
            accessToken: res.data
          }
          this.$store.commit('SET_AUTH', auth) // mutating to store for client rendering
          Cookie.set('auth', auth) // saving token in cookie for server rendering
          // this.$router.push('/'+this.currentLocale+'/dashboard')
        })
        .catch(err => this.err = err.response.data.msg)

    }
  },
  computed: {
    currentLocale () {
      return this.$store.state.locale
    }
  }
}
</script>
