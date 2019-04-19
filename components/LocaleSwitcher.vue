<template>
    <b-nav-item-dropdown right class="lang">
      <template slot="button-content">
         <img
            :src="'/img/lang/'+currentLocale+'.png'"
            class="country-icon as-toggle"
            />
            {{icons[currentLocale]}}
        </template>
      <b-dropdown-item v-for="locale in locales" :key="locale.code" @click.prevent="switchLanguage(locale.code)">
        <!-- <img
            :src="icons[locale.code]"
            class="country-icon as-toggle"
            />  -->
            {{locale.name}}
      </b-dropdown-item>

    </b-nav-item-dropdown>
</template>

<script>
export default {
  data () {
    return {
      icons: {
        en: 'English',
        vi: 'Vietnamese',
        kr: 'Korean'
      }
    }
  },
  mounted () {
    console.log('path', this.$route.path)
  },
  methods: {
    switchLanguage (lang) {
      this.$store.dispatch('setLang', lang)
      localStorage.setItem('lang', lang)
      if (process.browser) {
        var currentPath = this.$route.path !== '/' ? this.$route.path : '/vi/index'
        var path = currentPath.split('/')
        var route = '/'+lang+currentPath.substring(3, currentPath.length)
        this.$router.push({path: route})
      }
    }
  },
  computed: {
    currentLocale () {
      return this.$store.state.locale
    },
    locales () {
      return this.$store.state.locales
    }
  }
}
</script>

<style scoped>
    .country-icon {
        width: 20px;
        height: auto;
        display: inline-block;
        vertical-align: baseline;
        border: 1px solid #dee2e6;
        box-shadow: 0px 1px 3px rgba(24, 29, 38, 0.1);
    }

    .country-icon.as-toggle {
        margin-top: 5px;
    }

    .locale-name {
        display: inline-block;
        vertical-align: baseline;
    }

</style>
<style lang="scss">
.lang {
  > a {
    border: 1px solid #666;
    font-size: 20px;
    color: #666 !important;
    @media screen and (max-width: 767px) {
      border: 0;
    }
  }
}
</style>
