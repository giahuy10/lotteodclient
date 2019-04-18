<template>
  <div class="featured-photo">
    <div class="container">
      <h2 class="text-center" @click="seeMore">{{ $t("homepage.modtuleTitle.galleries") }}</h2>
      <div class="scroller-wrap">
        <div class="scroller" ref="scroller">
          <div class="scroller-inner" ref="scroller_inner" :style="'left:'+scroller.left+'px'">
            <div class="scroller-item" v-for="(item, index) in items" :key="index" ref="scroller_items">
              <img :src="'/img/galleries/homepage/'+item.thumbnail" alt="" @click="openImg(index)">
            </div>
          </div>
        </div>
        <a href="#" class="scroller-button next" v-if="scroller.next" @click.prevent="scroll(1)"><img src="/img/icons/arrow.png" alt=""></a>

        <a href="#" class="scroller-button prev" v-if="scroller.prev" @click.prevent="scroll(2)"><img src="/img/icons/arrow.png" alt=""></a>
      </div>
    </div>
    <b-modal id="galleryModal" size="xl" ref="myModalRef" centered hide-header hide-footer hide-title>
      <div class="d-block text-center img-modal">


        <img :src="items[currentItem] ? '/img/galleries/homepage/'+items[currentItem].full : ''" alt="">


        <a href="#" class="img-button next" @click.prevent="change(1)"><img src="/img/icons/arrow.png" alt=""></a>
        <a href="#" class="img-button prev" @click.prevent="change(2)"><img src="/img/icons/arrow.png" alt=""></a>

      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentItem: '',
      items: [
        {
          thumbnail: '1-thumb.webp',
          full: '1.webp'
        },
        {
          thumbnail: '2-thumb.webp',
          full: '2.webp'
        },
        {
          thumbnail: '3-thumb.webp',
          full: '3.webp'
        },
        {
          thumbnail: '4-thumb.webp',
          full: '4.webp'
        },
        {
          thumbnail: '5-thumb.webp',
          full: '5.webp'
        },
        {
          thumbnail: '6-thumb.webp',
          full: '6.webp'
        },
        {
          thumbnail: '7-thumb.webp',
          full: '7.webp'
        },
        {
          thumbnail: '8-thumb.webp',
          full: '8.webp'
        },
        {
          thumbnail: '9-thumb.webp',
          full: '9.webp'
        },
        {
          thumbnail: '10-thumb.webp',
          full: '10.webp'
        }
      ],
      scroller: {
        full: 0,
        screen: 0,
        max: 0,
        left: 0,
        next: true,
        prev: false,
        step: 250
      }
    }
  },
  mounted () {
    let app = this
    if (process.client) {
      window.addEventListener("load", function(event) {
        app.$refs.scroller_items.forEach(element => {
          console.log(element.offsetWidth)
          app.scroller.full +=element.offsetWidth
        });
        app.scroller.screen = app.$refs.scroller.clientWidth
        app.scroller.max = app.scroller.full - app.scroller.screen
      });
    }

      // console.log(this.$refs.scroller_inner)
      // this.$refs.scroller_items.forEach(element => {
      //   this.scroller.full += element.offsetWidth
      // });
      // here is the Vue code
      // this.scroller.full = 2575 // this.$refs.scroller_inner.clientWidth

      // console.log('full: ', this.scroller.full)
      // console.log('screen: ', this.scroller.screen)
      // console.log('max: ', this.scroller.max)

  },
  methods: {
    seeMore () {
      this.$router.push({ path: '/'+this.$store.state.locale+'/'+'explore/gallery'})
    },
    openImg (index) {
      this.currentItem = index
      this.$refs.myModalRef.show()
    },
    change (type) {
      if (type === 1) {
        // prev
        if (this.currentItem === 0) {
          this.currentItem = this.items.length - 1
        } else {
          this.currentItem--
        }
      } else {
        // next
        if (this.currentItem + 1 === this.items.length) {
          this.currentItem = 0
        } else {
          this.currentItem++
        }
      }
    },
    scroll (type) {
      if (type === 1) {
        // next
        console.log('left: ', this.scroller.left)
        console.log('step: ', this.scroller.step)
        console.log('max: ', this.scroller.max)
        if (this.scroller.left - this.scroller.step * 2 < 0 - this.scroller.max) {
          this.scroller.left = 0 - this.scroller.max
        } else {
          this.scroller.left -=  this.scroller.step
        }

      } else {
        // prev
        if (this.scroller.left +  this.scroller.step * 2 > 0) {
          this.scroller.left = 0
        } else {
          this.scroller.left +=  this.scroller.step
        }
      }
      if (this.scroller.left < 0) {
        this.scroller.prev = true
      } else {
        this.scroller.prev = false
      }
      if (this.scroller.left > 0 - this.scroller.max) {
        this.scroller.next = true
      } else {
        this.scroller.next = false
      }
    }
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
  .btn-galleries {
    margin-top: 40px;
    background: #000;
    color: #fff;
  }
}
.scroller-wrap {
  position: relative;
  .scroller {
    height: 200px;
    overflow: hidden;
    .scroller-inner {
      width: 2575px;
      position: relative;
      left: 0;
      transition: all 0.5s;
      .scroller-item {
        display: inline;
        border-right: 2px solid #fff;
        &:hover {
          cursor: pointer;
        }
        img {
          height: 200px;
          width: auto;
        }
      }
    }
  }
  .scroller-button {
    position: absolute;
    top: 45%;
    &.next {
      right: -20px;
    }
    &.prev {
      left: -20px;
      img {
        transform: rotate(180deg)
      }
    }
  }
}
#galleryModal {
  .modal-content {
    background: none;
    border: 0;
    .img-modal {
      position: relative;
      .img-button {
        position: absolute;
        top: 45%;
        img {
          border: 0;
        }
        &.next {
          right: 0;
        }
        &.prev {
          left: 0;
          img {
            transform: rotate(180deg);
          }
        }
      }
    }
    img {
      border: 2px solid #ccc;
    }
  }
}
</style>
