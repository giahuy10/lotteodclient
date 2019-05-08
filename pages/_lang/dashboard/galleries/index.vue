<template>
  <div class="container">
    <div class="list-photos">
      <div class="toolbar">
        <h2>Photos</h2> <button class="btn btn-success" @click.prevent="openPhoto(0)">Create photo</button>
      </div>

      <div class="data">
        <table class="table table-bordered">
          <thead>
            <tr>

              <th>Name</th>
              <th>Image</th>
              <th>Show on homepage</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in photos" :key="index">

              <td><a href="#" @click.prevent="openPhoto(item._id)" v-text="item.name ? item.name : item.thumbnail"></a></td>
              <td><img :src="item.full" alt="" class="photo-thumb"></td>
              <td>{{item.homepage ? 'Yes' : 'No'}}</td>
              <td>

                <!-- <a href="#" @click.prevent="openPhoto(item._id)" ><img src="/edit.png" alt=""></a> -->
                <a href="#" @click.prevent="deletePhoto(item._id)"><img src="/delete.png" alt=""></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example" v-if="pagesNumber.length > 1">
          <ul class="pagination">
              <li v-if="pagination.pagesCurrent > 1" class="page-item">
                  <a class="page-link" href="#" aria-label="Previous"
                      @click.prevent="changePage(pagination.pagesCurrent - 1)">
                      <span aria-hidden="true">«</span>
                  </a>
              </li>
              <li v-for="(page, index) in pagesNumber" :key="index" class="page-item" v-bind:class="[ page == isActived ? 'active' : '']">
                  <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
              </li>
              <li class="page-item" v-if="pagination.pagesCurrent < pagination.pagesTotal">
                  <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(pagination.pagesCurrent + 1)">
                      <span aria-hidden="true">»</span>
                  </a>
              </li>
          </ul>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'dashboard',
  mounted () {
    this.getPhotos()
  },
  data () {
    return {
      photos: []
    }
  },
  methods: {
    getPhotos () {
      this.$axios.$get('/api/photos')
        .then(res => {
          console.log(res)
          this.photos = res.items
        })
        .catch(err => console.log(err))
    },
    openPhoto (photoId) {
      // console.log(this.$router.options.routes)
      this.$router.push({name: 'lang-dashboard-galleries-edit-id', params: { id: photoId }})
    },
    deletePhoto (photoId) {
      this.$axios.delete('/api/photos/'+photoId)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        // this.getItems()
    }
  },
  computed: {
    pagination () {
      return this.$store.state.galleries.pagination
    },
    isActived: function () {
      return this.pagination.pagesCurrent;
    },
    pagesNumber: function () {
      var from = this.pagination.pagesCurrent - this.offset;
      if (from < 1) {
        from = 1;
      }
      var to = from + (this.offset * 2);
      if (to >= this.pagination.pagesTotal) {
        to = this.pagination.pagesTotal;
      }
      var pagesArray = [];
      while (from <= to) {
        pagesArray.push(from);
        from++;
      }
      return pagesArray;
    }
  }
}
</script>
<style lang="scss">
.photo-thumb {
  width: 80px;
  height: auto;
}
</style>
