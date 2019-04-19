<template>
  <div class="overview">
    <!-- <div class="stars"></div>
    <div class="twinkling"></div> -->

    <div class="overview-content">
      <div class="container">

        <h2 class="text-center font-coiny">{{ $t("homepage.modtuleTitle.overview") }}</h2>
        <div class="overview-tab">
          <b-tabs>
            <b-tab v-for="(item, index) in overview" :key="index" :title="item.title" :active="index == 0">
              <div class="row">
                <div v-for="(sec, i) in item.section" :key="i" class="col-12 col-md-6">
                  <div class="overview-item">
                    <div class="img-over">
                      <img :src="sec.thumbnail" alt="">
                      <div class="text-over">
                        <div class="text-center" v-text="sec.text"></div>
                      </div>
                      <div class="sec-title text-center">
                        <span  v-text="sec.name"></span>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import viOverview from '~/static/api/vi/overview.json'
import enOverview from '~/static/api/en/overview.json'
import krOverview from '~/static/api/kr/overview.json'
export default {
  name: 'overview',

  computed: {
    lang () {
      return this.$store.state.locale
    },
    overview () {
      switch(this.$store.state.locale) {
        case 'vi':
          return viOverview
          break;
        case 'en':
          return enOverview
          break;
        case 'kr':
          return krOverview
          break;
        default:
          return viOverview
      }
    }
  }
}
</script>
<style lang="scss">
.overview {
  // padding: 40px 0;
  // background-image: url('/img/bg/overview.png');

   /* Set a specific height */
  // height: 814px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
      position: relative;

  @media screen and (min-width: 990px) and (max-width: 1100px) {
    // height: 715px;
  }
  @media screen and (max-width: 767px) {
    // height: auto;
  }
  .card {
    background: rgba(255, 255, 255, 0.8)
  }
  h2 {
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #e4111d;
    font-weight: bold;
    span {
      color: #e4111d;
    }
  }
  li {
    a {
      color: #fff;
      background: #63574c;
      margin-bottom: 10px;
    }
  }
  .overview-item {

    .img-over {
      &:hover {
        cursor: pointer;
        .text-over {
          opacity: 1;
        }
        .sec-title span {
          opacity: 0;
        }
      }
        position: relative;
        margin-bottom: 40px;
        .text-over {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-size: 18px;
          opacity: 0;
          transition: all 1s;
        }
        .sec-title {

            margin-bottom: 10px;
            position: absolute;
            width: 100%;
            bottom: 40%;
            span {
              // background: #000;
              color: #fff;
              font-size: 30px;
              padding: 10px 20px;
              position: relative;
              border-radius: 5px;
              text-shadow: 1px 1px  #000;
              display: inline-block;
              // &:after, &:before {
              //   content: "";
              //   width: .2em;
              //   bottom: 0;
              //   position: absolute;
              //   display: block;
              //   border: 20px solid #000;
              //   // box-shadow: 0px 1px 0px rgba(0,0,0,0.4);
              //   //z-index: -2;
              // }
              // &:after {
              //   right: -1.35em;
              //   border-left-width: .75em;
              //   border-right-color: transparent;
              // }
              // &:before {
              //   left: -1.35em;
              //   border-right-width: .75em;
              //   border-left-color: transparent;
              // }
            }
        }
    }
    img {
      width: 100%;
    }

  }
  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #212529;
  }
  @media screen and (max-width: 767px) {
    .col-auto {
      width: 100%;
      text-align: center;
    }
  }
  video.bg-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .outer-video {
    overflow: hidden;
  }
  .overview-content {
       position: relative;
    padding: 40px 0;
        z-index: 99;

  }
.nav-tabs
  {
    text-align: center;
    display: block;
    .nav-item {
    margin-bottom: -1px;
    display: inline-block;
    margin: 0 5px;
    a {
      color: #63574c;
      width: 160px;
      background: none;
      border: 1px solid;
      border-radius: 0;
      &.active {
        color: #fff;
        background: #e4111d;
      }
    }
  }
}
}
.home .overview .ResVideoWidget {
  max-height: 920px;

}
.home .overview video.bg-video, .home .upcomming-event video.bg-video {
    width: 100%;
    height: 100%;
    position: initial;
    height: 930px;
}
.home .upcomming-event video.bg-video {

    height: 710px;
}

 @media screen and (min-width: 1400px) and (max-width: 1700px) {
    .home .overview video.bg-video {
      height: 934px;
    }
    .home .upcomming-event video.bg-video {
      height: 700px;
    }
  }
  @media screen and (min-width: 1100px) and (max-width: 1399px) {
    .home .overview video.bg-video {
      height: 934px;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1099px) {
    .home .overview video.bg-video {
      height: 790px;
    }
    .home .upcomming-event video.bg-video {
      height: 620px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    .home .overview video.bg-video {
      height: 670px;
    }
    .home .upcomming-event video.bg-video {
      height: 480px;
    }
  }
  @media screen and (max-width: 767px) {
    .home .overview video.bg-video {
      height: 1540px;
    }
    .home .upcomming-event video.bg-video {
      height: 1850px;
    }
  }
  @keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
}

.stars, .twinkling, .clouds {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:0;
}

.twinkling{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index:1;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}

.clouds{
    background:transparent url(http://pngimg.com/uploads/cloud/cloud_PNG24.png) repeat top center;
    z-index:3;

  -moz-animation:move-clouds-back 200s linear infinite;
  -ms-animation:move-clouds-back 200s linear infinite;
  -o-animation:move-clouds-back 200s linear infinite;
  -webkit-animation:move-clouds-back 200s linear infinite;
  animation:move-clouds-back 200s linear infinite;
}
</style>

