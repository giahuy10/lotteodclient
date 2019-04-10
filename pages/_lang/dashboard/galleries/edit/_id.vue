<template>
  <div class="container">
    <form action="" v-on:submit.prevent="saveData">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">File</label>
          <div class="col-sm-10">
            <input type="file" class="form-control" placeholder="" ref="file" v-on:change="handleFileUpload()">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-12">
            <div v-if="loading">
              <img style="width: 40px;" src="https://www.wpfaster.org/wp-content/uploads/2013/06/circle-loading-gif.gif" alt="">
            </div>
            <img v-if="item.thumbnail" :src="item.thumbnail" alt="">
          </div>

        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Show on homepage</label>
          <div class="col-sm-10">
            <input type="checkbox" class="form-check-input" placeholder="" v-model="item.homepage">
          </div>
        </div>

        <div class="form-group">

          <button v-on:click.prevent="saveData()">Submit</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      file: '',
      item: {
        homepage: 0,
        thumbnail: '',
        full: ''
      }
    }
  },
  layout: 'dashboard',
  mounted () {
    // this.item = this.$store.state.event.eventDetail
    if (this.$route.params.id) {
      this.getItem()
    }

  },
  methods: {
    async getItem () {
      let result = await this.$axios.get('/api/photos/'+this.$route.params.id)
      console.log(result)
      if (result.data.item) {
        this.item = result.data.item
      }

    },
    handleFileUpload () {
      this.loading = true
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('file', this.file);
      this.$axios.post( '/api/photos/upload', formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
        ).then(res => {
          console.log(res)
          this.item.thumbnail = res.data.thumbnail
          this.item.full = res.data.full
          this.loading = false
        })
        .catch(err => {
          console.log(err)
          this.loading = false
        })
    },
    saveData () {
      this.$axios.post('/api/photos', this.item)
        .then(res => {
          this.$router.push({name: 'lang-dashboard-galleries-edit-id', params: { id: 0 }})
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
