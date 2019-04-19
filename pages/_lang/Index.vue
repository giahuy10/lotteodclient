<template>
  <div class="home">
    <Slider/>
    <!-- <Pano v-if="videoEnd"/>
    <Video v-else @videoEnded="endVideo"/> -->
    <Overview/>
    <UpCommingEvent/>
    <!-- <Galleries type="homepage"/> -->
    <FeaturedPhotos/>

    <!-- <Interview/> -->
    <Newsletter/>
    <div class="reservation hidden-xs">
      <a href="#" @click.prevent="$router.push({ path: '/'+$store.state.locale+'/'+'ticket'})">
        <img src="/img/main_content_img4.jpg" alt="Buy ticket">
      </a>

    </div>
    <!-- <b-modal class="onlyMain" ref="promotion" centered size="xl"  hide-footer hide-title>
      <div class="d-block text-center">
        <img src="/img/events/web banner-promo -02.png" alt="">
      </div>
    </b-modal> -->
  </div>
</template>

<script>
import FeaturedPhotos from '~/components/FeaturedPhotos'
import Slider from '~/components/Slider'
import Pano from '~/components/Pano'
import Video from '~/components/Video'
import Interview from '~/components/Interview'
import Newsletter from '~/components/Newsletter'
import UpCommingEvent from '~/components/UpcommingEvent'
import Overview from '~/components/Overview'
import FeaturedFacilities from '~/components/FeaturedFacilities'
import Galleries from '~/components/Galleries'
export default {
  components: { UpCommingEvent, Overview, FeaturedFacilities, Galleries, Newsletter, Interview, Video, Pano, Slider, FeaturedPhotos },
  name: 'home',
  data () {
    return {
      videoEnd: false,
      screenWidth: 'xl'
    }
  },
  async asyncData ({ store }) {
    await store.dispatch('event/getEvents', { limit: 3, homepage: 1, locale: store.state.locale })
  },
  methods: {
    showModal () {
      this.$refs.promotion.show()
    },
    hideModal () {
      this.$refs.promotion.hide()
    },
    endVideo (value) {
      this.videoEnd = true
    }
  },
  mounted () {
    // if (!sessionStorage.getItem('openPopup')) {
    //   this.showModal()
    //   sessionStorage.setItem('openPopup', 1)
    // }
    this.screenWidth = this.$store.state.screenWidth
  },
  head () {
    return {
      title: this.$t('homepage.metaTitle'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content:  this.$t('homepage.metaDesc')},
        { hid: 'og-title', property: 'og:title', content: this.$t('homepage.metaTitle') },
        { hid: 'og-description', property: 'og:description', content: this.$t('homepage.metaDesc') },
        { hid: 'og-image', property: 'og:image', content: 'http://observationdeck.lottecenter.com.vn/img/slider/1.JPG' },

      ]
    }
  },
}
</script>
<style lang="scss">
.home {


  .onlyMain {
  .modal-dialog {
    .modal-header {
      display: none;
    }
    .modal-body {
      img {
        width: 100%;
      }
    }
  }
  }
}
.kr {
  .home {
    .video-cap {
      h1, h2 {
        font-family: 'Nanum Gothic', sans-serif !important;
        font-weight: normal;
      }
    }
  }
}

.reservation {
  position: fixed;
  bottom: 0;
  right: -100px;
  width: 150px;
  z-index: 9999;
  transition: all 0.5s;
  &:hover {
    right: 0;
    cursor: pointer;
  }
}

@media screen and (max-width: 767px){
  .hidden-xs {
    display: none;
  }
}
</style>

