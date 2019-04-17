<template>
  <div class="newsletter">
    <div class="container">
      <div class="row">
         <div class="col-12 col-md-6">
          <h2>{{ $t("homepage.modtuleTitle.signup") }}</h2>
          <p>{{ $t("homepage.modtuleTitle.signupDesc") }}</p>
        </div>
        <div class="col-12 col-md-6 d-flex align-items-center justify-content-end">
          <div v-if="success">
            <div class="alert alert-success" v-html="$t('homepage.modtuleTitle.signupSuccess')"></div>
          </div>
          <b-form inline v-else>
            <label class="sr-only" for="email">{{ $t("homepage.modtuleTitle.signupName") }}</label>
            <!-- <b-input v-model="subscriber.name" type="text" class="mb-2 mr-sm-2 mb-sm-0" id="name" v-bind:placeholder="$t('homepage.modtuleTitle.signupName')" /> -->
            <b-input v-model="subscriber.email" type="email" class="mb-2 mr-sm-2 mb-sm-0" id="email" v-bind:placeholder="$t('homepage.modtuleTitle.signupEmail')" />
            <b-button variant="danger" @click="subscribe">{{ $t("homepage.modtuleTitle.signupButton") }}</b-button>
          </b-form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsletter',
  data () {
    return {
      subscriber: {
        email: '',
        name: ''
      },
      success: false

    }
  },
  methods: {
    subscribe () {
      if (this.subscriber.email === '') {
        this.$toast.error(this.$t('homepage.signup.blankError'), {duration: 2000, position: 'bottom-right'})
      } else {
        this.$axios.post('/api/newsletters', this.subscriber)
        .then(res => this.success = true)
        .catch(err => console.log(err))
      }
    }
  }
}
</script>
<style lang="scss">
.newsletter {
    background: #514444;
    padding: 20px;
    color: #fff;
    border-bottom: 4px solid #e4111d;
    p {
      margin-bottom: 0;
    }
}
</style>


