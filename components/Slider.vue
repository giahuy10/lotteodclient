<template>
  <div>
    <b-carousel
      id="carousel-1"
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
  data() {
    return {
      slide: 0,
      sliding: null,
      sliders: [
        {
          img: '/img/slider/1.webp',
          heading: this.$t("homepage.slideshow.heading1"),
          desc: ''
        },
        {
          img: '/img/slider/2.webp',
          heading: this.$t("homepage.slideshow.animation1"),
          desc: ''
        },
        {
          img: '/img/slider/5.webp',
          heading: this.$t("homepage.slideshow.animation2"),
          desc: ''
        },
        {
          img: '/img/slider/6.webp',
          heading: this.$t("homepage.slideshow.heading2"),
          desc: ''
        },
        // {
        //   img: '/img/slider/5.webp',
        //   heading: '',
        //   desc: ''
        // },
        // {
        //   img: '/img/slider/6.webp',
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
  bottom: 250px;
  h2 {
    font-size: 60px;
    text-transform: uppercase;
    text-shadow: 1px -1px 1px #000;
    font-weight: bold;
  }

}
</style>
