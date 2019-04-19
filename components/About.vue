<template>
  <div class="about">
    <div class="introTxt text-center">
      <div class="row">
        <div class="col-12 col-md-4">
          <img src="/img/explore/Lotte-building-01.png" alt="Lotte center Hanoi">
        </div>
        <div class="col-12 col-md-8">
          <div class="intro-1">
            <p v-html="$t('explore.about.text1')"></p>
          </div>
          <div class="intro-2">
            <p v-html="$t('explore.about.text2')"></p>
          </div>
          <div class="intro-3">
            <p v-html="$t('explore.about.text3')"></p>
          </div>

        </div>
      </div>

		</div>



    <video width="400" controls>
      <source src="/video/explore.mp4" type="video/mp4">

      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<style lang="scss">
.about {
  video {
    width: 100%;
  }
  padding: 40px 0;
  .introTxt {
    margin-bottom: 40px;
    .intro-2 {
      padding: 65px 0 50px;
      margin: 75px 0;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    p {

      padding-right: 20px;

      text-align: left;

      @media screen and (max-width: 767px) {
        border-right: 0;
      }
    }
  }
  video, iframe {
    width: 100%;

  }
}
</style>

