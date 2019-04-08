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
          <label class="col-sm-2 col-form-label">Show on homepage</label>
          <div class="col-sm-10">
            <input type="checkbox" class="form-control" placeholder="" v-model="item.homepage">
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
      file: '',
      item: {
        homepage: 0,
        thumbnail: '',
        full: ''
      }
    }
  },
  layout: 'dashboard',
  methods: {
    handleFileUpload () {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('homepage', this.homepage);
      this.$axios.post( '/api/photos/upload', formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
        ).then(res => {
          console.log(res)
          this.item.thumbnail = res.data.thumbnail,
          this.item.full = res.data.full
        })
        .catch(err => console.log(err))
    },
    saveData () {
      this.$axios.post('/api/photos', this.item)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>
