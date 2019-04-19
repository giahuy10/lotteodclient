<template>
  <div class="ticket" :class="'width-'+screenWidth">
    <header-banner :title="$t('ticket.headerTitle')" :desc="$t('ticket.headerDesc')" :img="headerImage"></header-banner>
    <div class="container">
      <div class="ticketing_counter">
        <!-- <h3>{{ $t("ticket.ticketCounter") }}</h3>
        <p>{{ $t("ticket.ticketCounterDesc") }}</p>


        <hr> -->
      </div>
      <div class="observatory_use_guide">
        <h3>{{ $t("ticket.observerionGuide") }}</h3>
        <p v-html="$t('ticket.useTime')"></p>
        <p v-html="$t('ticket.fee')"></p>
        <div class="board_foot" v-html="$t('ticket.discount')">
        </div>
        <!-- end board_head -->
        <p class="board_tip text-right">{{ $t("ticket.unit") }}</p>
        <div class="fare_table">
            <table class="table table-bordered text-center">
              <tbody>
                  <tr>
                    <th rowspan="3" class="align-middle" v-html="$t('ticket.pricingTable.general')"></th>
                    <td v-html="$t('ticket.pricingTable.adult')"></td>
                    <td  class="align-middle">230,000</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td v-html="$t('ticket.pricingTable.children')"></td>
                    <td  class="align-middle">170,000</td>
                  </tr>
                  <tr>
                    <th rowspan="3"  class="align-middle" v-html="$t('ticket.pricingTable.domestic')"></th>
                    <td v-html="$t('ticket.pricingTable.adult')"></td>
                    <td  class="align-middle">180,000</td>
                  </tr>

                  <tr>
                    <td v-html="$t('ticket.pricingTable.children')"></td>
                    <td  class="align-middle">120,000</td>
                  </tr>
              </tbody>
            </table>
        </div>
        <!-- end fare_table -->
        <div class="board_foot" v-html="$t('ticket.note')">
        </div>
        <div v-if="$store.state.locale == 'vi'">
          <p v-html="$t('ticket.buy')"></p>
          <ul>
            <li><a href="https://www.adayroi.com/ve-tron-goi-tham-quan-dai-quan-sat-lotte-danh-cho-01-nguoi-p-2118702?offer=2118702_QJT" target="_blank">Adayroi</a></li>
            <li><a href="https://www.dealtoday.vn/ha-noi/ve-tron-goi-tham-quan-va-post-card-tai-dai-quan-sat-lotte-42731" target="_blank">Deal Today</a></li>
            <li><a href="https://ticket.hotdeal.vn/event/lotte-observation-deck-dai-quan-sat-lotte.95" target="_blank">Hot Deal</a></li>
            <li><a href="https://www.lotte.vn/product/3940441/e-voucher-tat-ca-cac-ngay-ve-tham-quan-dai-quan-sat-lotte-toa-nha-lotte-center-1027648.html" target="_blank">Lotte.vn</a></li>
          </ul>
        </div>
        <p v-html="$t('ticket.buyOffline')"></p>
        <p style="font-weight: bold">Nguyen Thi Huyen</p>
        <p v-html="$t('homepage.footer.line2')"></p>
        <p>Email: <a href="mailto:huyenguyenod@lotte.vn"> huyenguyenod@lotte.vn </a></p>

        <!-- end board_foot -->
      </div>

    </div>
    <!-- <div class="rich-snippets">
      <div itemscope itemtype="https://schema.org/Product">
        <span itemprop="brand">Lotte Center Hanoi</span> <span itemprop="name">Observerion Deck Ticket</span>

        <span itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
          Average rating: <span itemprop="ratingValue">4.85</span>, based on
          <span itemprop="ratingCount">8936</span> reviews
        </span>
        <span itemprop="offers" itemscope itemtype="https://schema.org/AggregateOffer">
          from $<span itemprop="lowPrice">120.000</span> to
          $<span itemprop="highPrice">230.000</span>
          <meta itemprop="priceCurrency" content="VND" />
        </span>
      </div>
    </div> -->

  </div>
</template>

<script>
import HeaderBanner from '~/components/HeaderBanner.vue'
export default {
  components: {
    'header-banner': HeaderBanner
  },
  name: 'ticket',
  data () {
    return {
      headerImage: '/img/bg/overview.png',
      screenWidth: ''
    }
  },
  head () {
    return {
      title: this.$t("ticket.ticketCounter"),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  mounted () {
    this.screenWidth = this.$store.state.screenWidth
  }
}
</script>
<style lang="scss">
.observatory_use_guide {
  p {
    span {
      color: #ed1d24;
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>


