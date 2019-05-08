<template>
  <div class="edit-event">
    <h2>{{ item && item.slug ? 'Update event' : 'Create event'}}</h2>
    <form action="" v-on:submit.prevent="saveData">
      <b-tabs content-class="mt-3">
        <b-tab title="Vietnamese" active>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="item.title_vi" placeholder="Event title in vietnamese">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
              <no-ssr>
                <editor v-model="item.desc_vi" :toolbar="toolbar" api-key="lxzv6h8kur0syil9hllrjlm94wtumcz3fy6ea2jc0inlsmnb" :init="init"></editor>
              </no-ssr>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="item.date_vi" placeholder="Date in vietnamese">
            </div>
          </div>
        </b-tab>
        <b-tab title="English">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="item.title_en" placeholder="Event title in english">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
              <no-ssr>
                <editor v-model="item.desc_en" :toolbar="toolbar" api-key="lxzv6h8kur0syil9hllrjlm94wtumcz3fy6ea2jc0inlsmnb" :init="init"></editor>
              </no-ssr>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="item.date_en" placeholder="Date in english">
            </div>
          </div>
        </b-tab>
        <b-tab title="Other">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Image</label>
            <div class="col-sm-10">
              <input type="file" class="form-control" placeholder="" ref="file" v-on:change="handleFileUpload()">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-12">
              <div v-if="loading">
                <img style="width: 40px;" src="https://www.wpfaster.org/wp-content/uploads/2013/06/circle-loading-gif.gif" alt="">
              </div>
              <img v-if="item.full" style="width: 200px;" :src="item.full" alt="">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Enable</label>
            <div class="col-sm-10">
              <input type="checkbox" class="form-check-input" placeholder="" v-model="item.state">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Show on homepage</label>
            <div class="col-sm-10">
              <input type="checkbox" class="form-check-input" placeholder="" v-model="item.homepage">
            </div>
          </div>
        </b-tab>
      </b-tabs>
      <button class="btn btn-success btn-block" @click.prevent="saveData">Save</button>
    </form>
  </div>
</template>
<script>
// import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import Editor from '@tinymce/tinymce-vue'
export default {

  components: {
    'editor': Editor, // <- Important part
    // vueDropzone: vue2Dropzone
  },
  data () {
    return {
      //_id: 0,
      loading: false,
      item: {
        //_id: 0,
        state: 1,
        homepage: 0,
        title_vi: '',
        title_en: '',
        desc_vi: '',
        desc_en: '',
        date_vi: '',
        date_en: '',
        thumbnail: '',
        slug: ''
      },
      init: {
        plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help',
        images_upload_url: 'https://admin.lotteskywalk.tk/api/events/upload?editor=true',
      },

      toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
    }
  },
  layout: 'dashboard',
  async asyncData({ store, params }) {
    await store.dispatch('event/getEventDetail', { slug: params.id})
  },
  mounted () {
    // this.item = this.$store.state.event.eventDetail
    this.getItem()
  },
  methods: {
    async getItem () {
      let result = await this.$axios.get('/api/events/'+this.$route.params.id)
      if (result.data.item) {
        this.item = result.data.item
      }

    },
    handleFileUpload () {
      this.loading = true
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('file', this.file);
      this.$axios.post( '/api/events/upload', formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
        ).then(res => {
          console.log(res)
          this.item.full = res.data.full
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          console.log(err.response)
        })
    },
    saveData () {
      if (this.$route.params.id != 0) {
        console.log('update item')
        this.$axios.put('/api/events/'+this.item._id, this.item)
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
      } else {
        console.log('insert item')
        this.$axios.post('/api/events', this.item)
        .then(res => {
          console.log(res)
          this.$router.push({name: 'lang-dashboard-events-edit-id', params: { id: res.data }})
        })
        .catch(err => console.log(err.response))
      }

    }
  }
}
</script>
