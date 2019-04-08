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
        <!-- <h1>Hello world!</h1> -->
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
          img: '/img/slider/1.JPG',
          heading: '',
          desc: ''
        },
        {
          img: '/img/slider/2.JPG',
          heading: '',
          desc: ''
        },
        {
          img: '/img/slider/3.JPG',
          heading: '',
          desc: ''
        },
        {
          img: '/img/slider/4.JPG',
          heading: '',
          desc: ''
        },
        {
          img: '/img/slider/5.JPG',
          heading: '',
          desc: ''
        },
        {
          img: '/img/slider/6.JPG',
          heading: '',
          desc: ''
        }
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
