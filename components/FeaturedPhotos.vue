<template>
  <div class="featured-photo">
    <div class="container">
      <h2 class="text-center" @click="seeMore">{{ $t("homepage.modtuleTitle.galleries") }}</h2>
      <div class="row">
        <div class="col-6 col-md-3">
          <img src="/img/galleries/homepage/2-thumb.JPG" alt="">
        </div>
        <div class="col-6 col-md-3">
          <img src="/img/facilities/4. Sky lounge bar.JPG" alt="">
        </div>
        <div class="col-6 col-md-3">
          <img src="/img/facilities/Angel in us - Ẩm thực.jpg" alt="">
        </div>
        <div class="col-6 col-md-3">
          <img src="/img/overview/1.Sky walk.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    seeMore () {
      this.$router.push({ path: '/'+this.$store.state.locale+'/'+'explore/gallery'})
    }
  },
  computed () {

  }
}
</script>

<style lang="scss">
.featured-photo {
  padding: 40px 0;
  h2 {
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #e4111d;
    font-weight: bold;
  }
}
</style>
