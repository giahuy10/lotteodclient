<template>
  <div>
    <b-carousel v-if="device == 'mobile'"
      id="carousel-mobile"
      v-model="slide"
      :interval="4000"
      fade
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide v-for="(item, index) in sliders" :key="index" :img-src="item.imgM">
        <h2 v-text="item.heading"></h2>
      </b-carousel-slide>
    </b-carousel>
    <b-carousel v-else-if="device == 'tablet'"
      id="carousel-tablet"
      v-model="slide"
      :interval="4000"
      fade
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide v-for="(item, index) in sliders" :key="index" :img-src="item.imgT">
        <h2 v-text="item.heading"></h2>
      </b-carousel-slide>
    </b-carousel>
    <b-carousel v-else
      id="carousel-desk"
      v-model="slide"
      :interval="4000"
      fade
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide v-for="(item, index) in sliders" :key="index" :img-src="item.img">
        <h2 v-text="item.heading"></h2>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  mounted () {
    if (process.client) {
      this.screenWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      )
      console.log('widht= ', this.screenWidth)
    }
  },
  computed: {
    device () {
      if (this.screenWidth > 1366) {
        return 'desk'
      } else if (this.screenWidth > 767) {
        return 'tablet'
      } else {
        return 'mobile'
      }
    }
  },
  data() {
    return {
      screenWidth: 1920,
      slide: 0,
      sliding: null,
      sliders: [
        {
          img: '/img/slider/1.JPG',
          imgM: '/img/slider/1-mobile.JPG',
          imgT: '/img/slider/1-tablet.JPG',
          heading: this.$t("homepage.slideshow.heading1"),
          desc: ''
        },
        {
          img: '/img/slider/2.JPG',
          imgM: '/img/slider/2-mobile.JPG',
          imgT: '/img/slider/2-tablet.JPG',
          heading: this.$t("homepage.slideshow.animation1"),
          desc: ''
        },
        {
          img: '/img/slider/5.JPG',
          imgM: '/img/slider/5-mobile.JPG',
          imgT: '/img/slider/5-tablet.JPG',
          heading: this.$t("homepage.slideshow.animation2"),
          desc: ''
        },
        {
          img: '/img/slider/6.JPG',
          imgM: '/img/slider/6-mobile.JPG',
          imgT: '/img/slider/6-tablet.JPG',
          heading: this.$t("homepage.slideshow.heading2"),
          desc: ''
        },
        // {
        //   img: '/img/slider/5.JPG',
        //   heading: '',
        //   desc: ''
        // },
        // {
        //   img: '/img/slider/6.JPG',
        //   heading: '',
        //   desc: ''
        // }
      ]
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
<style lang="scss">
.carousel-caption {
  @media screen and (max-width: 767px){
    display: none;
  }
  bottom: 250px;
  h2 {
    font-size: 60px;
    text-transform: uppercase;
    text-shadow: 1px -1px 1px #000;
    font-weight: bold;
  }

}
</style>
