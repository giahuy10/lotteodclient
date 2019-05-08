<template>
  <div class="container">

    <!-- <div class="form-group row">
      <label class="col-sm-2 col-form-label">Popup Image</label>
      <div class="col-sm-10">

        <input type="url" class="form-control" v-model="item.popup_img" placeholder="Enter image url" >

      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Pop-up URL</label>
      <div class="col-sm-10">

        <input type="url" class="form-control" v-model="item.popup_url" placeholder="Enter pop-up url" >

      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Events on homepage</label>
      <div class="col-sm-10">

        <input type="url" class="form-control" v-model="item.event_homepage" placeholder="Enter number of events on homepage" >

      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Event limit</label>
      <div class="col-sm-10">

        <input type="url" class="form-control" v-model="item.event_limit" placeholder="Enter number of events per page" >

      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Photos on homepage</label>
      <div class="col-sm-10">

        <input type="url" class="form-control" v-model="item.photo_homepage" placeholder="Enter number of photos on homepage" >

      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Photo limit</label>
      <div class="col-sm-10">

        <input type="url" class="form-control" v-model="item.photo_limit" placeholder="Enter number of photos per page" >

      </div>
    </div>

    <button class="btn btn-danger" @click.prevent="saveConfig">Update config</button> -->
  </div>
</template>

<script>


export default {

  data () {
    return {
      item: {
        popup_img: '',
        popup_url: '',
        popup_state: '',
        event_homepage: '',
        event_limit: '',
        photo_homepage: '',
        photo_limit: ''
      }
    }
  },
  layout: 'dashboard',
  middleware: 'authenticated',
  mounted () {
    this.getConfig()
  },
  methods: {
    getConfig () {
      this.$axios.get('/configuration.json')
        .then(res => {
          console.log(res)
          this.item = res.data
        })
        .catch(err => console.log(err))
    },
    saveConfig () {
      this.$axios.put('/api/configs/',  this.item)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  },
  computed: {
    currentLocale () {
      return this.$store.state.locale
    }
  }
}
</script>
