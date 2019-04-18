<template>
  <div class="main-layout" :class="lang + ' ' + $route.name">
    <header class="">
      <b-navbar toggleable="md" :class="navClass" fixed="top" type="dark" variant="">
        <div class="container">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand :to="homeURL"><img src="/img/logo.png" class="img-logo" alt="Logo"></b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
              <b-nav-item :class="item.name" v-for="(item, index) in items" :key="index" :to="'/'+lang+item.path">
                {{item.name}}
              </b-nav-item>
              <LocaleSwitcher/>
            </b-navbar-nav>

          </b-collapse>
        </div>

      </b-navbar>

    </header>
    <main>

    <nuxt/>
    </main>
    <footer>
      <div class="container">
        <div class="row">
          <div id="logo-footer" class="col-12 col-md-2 d-flex align-items-center center-mobile">
            <img src="/img/logo.png" alt="Logo">
          </div>
          <div class="col-12 col-md-10">
            <p class="text-right center-mobile">
              {{ $t("homepage.footer.line1") }}
              <br>{{ $t("homepage.footer.line2") }}
              <br>{{ $t("homepage.footer.line3") }}
            </p>
          </div>

        </div>
      </div>


    </footer>
    <div class="social-right">
      <ul>
        <li><a href="https://www.lottecenter.com.vn" title="Lotte Center Hanoi" target="_blank"><img src="/img/icons/apple-touch-icon-60x60.png" alt=""></a></li>
        <li><a href="https://www.facebook.com/observationdeckhanoi/" title="Facebook" target="_blank"><img src="/img/icons/facebook_circle-512.png" alt=""></a></li>
        <li><a href="https://www.instagram.com/observationdeckhanoi/" title="Instagram" target="_blank"><img src="/img/icons/instagram-colourful-icon.png" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from '~/components/LocaleSwitcher'
import viMenu from '~/static/api/vi/menu.json'
import enMenu from '~/static/api/en/menu.json'
import krMenu from '~/static/api/kr/menu.json'
export default {
  name: 'app',
  components: {
    LocaleSwitcher
  },
  data () {
    return {
      navClass: '',
      items: []
    }
  },
  async asyncData({ store }) {
    await store.dispatch('setDevice', 'md')
  },
  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      if (window.scrollY > 0) {
        this.navClass = 'sticky'
      } else {
        this.navClass = ''
      }
    },
    getItems () {
      switch(this.$store.state.locale) {
        case 'vi':
          this.items = viMenu
          break;
        case 'en':
          this.items = enMenu
          break;
        case 'kr':
          this.items = krMenu
          break;
        default:
          this.items = viMenu
      }
    }
  },
  created () {
    this.getItems()
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
      let device = 'xl'
      // xs- 300 -> 399 |  sm - 400 -> 767 | md - 768 -> 1023 | lg : 1024 -> 1366 | xl: > 1366
      if(window.innerWidth <= 399) {
        device = 'xs'
      } else if (window.innerWidth >= 400 && window.innerWidth <= 767  ) {
        device = 'sm'
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1023  ) {
        device = 'md'
      } else if (window.innerWidth >= 1024 && window.innerWidth <= 1366  ) {
        device = 'lg'
      } else if (window.innerWidth > 1366  ) {
        device = 'xl'
      }
      this.$store.dispatch('setDevice', device)
    }

  },
  computed: {
    lang () {
      return this.$store.state.locale
    },
    homeURL () {
      return '/'+this.lang+'/index'
    }
  },
  watch: {
    lang (to, from) {
      this.getItems()
    }
  }
}
</script>
<style lang="scss" scoped>
  body {

    a {
      color: #e4111d;
      &:hover {
        color: #000;
      }
    }
    // overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }
  ::-webkit-scrollbar {
      width:  .5em;
      height: .5em;
  }

  ::-webkit-scrollbar-thumb {
      background: #e4111d;
  }

  ::-webkit-scrollbar-track {
      background: #ccc;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  nav.navbar {
    &.sticky {
      background: rgba(255, 255, 255, 0.7);
    }
    //
    @media screen and (max-width: 767px){
      padding-top: 0;
      padding-bottom: 0;
      background: rgb(0, 0, 0);
    }
    ul {
      > li {

         margin: 0 5px;

        &.Home {
          display: none;
        }
        > a {
          color: #666;
          font-size: 20px;
          padding: 10px 20px !important;
          // color: #fff !important;
          font-weight: 400;
          &.nuxt-link-active {
            color: #fff!important;
            background: #ed1c24;
          }

        }
      }
    }
  }
  .lang-Index, .index  {
    nav.navbar {

      ul {

         li {

          > a {
            color: #000 !important;
          }
        }
      }
      // &.sticky {
      //   ul {
      //     > li {
      //       > a {
      //         // color: #fff !important;
      //       }
      //     }
      //   }
      // }
    }
  }
  footer {
    padding: 20px 0 10px;
    background: #393939;
    color: #fff;
    font-size: 14px;
    .social-icon {
      a {
       img {
         width: 32px;
         margin-right: 10px;
       }
      }
    }
  }
  #logo-footer, #social-footer {

      @media screen and (max-width: 767px) {
        justify-content: center !important;

    }
  }


  .btn-danger {
    color: #fff;
    background-color: #ed1d24;
    border-color: #ed1d24;
}
.kr {
  font-family: 'Nanum Gothic', sans-serif;
  .font-coiny, h2, h3 {
    font-family: 'Nanum Gothic', sans-serif !important;
  }
}
.rich-snippets {
  position: fixed;
  top: -1000px;
  left: - 1000px;
}
img.img-logo {
    height: 40px;
}
.navbar-dark .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.5);
}
.social-right {
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 45%;
  ul {
    list-style: none;
    li {
      padding: 5px;
    }
  }
  img {
    width: 45px;
    height: auto;
  }
}

</style>
