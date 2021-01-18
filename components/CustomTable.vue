<template>
  <v-card class="mb-5">
    <v-card-title>
      {{ title }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        class="pb-4"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="settlements"
      item-key="spending_transaction"
      :search="search"
      :loading="loading"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus',
      }"
      loading-text="Fetching transactions..."
      :height="530"
      show-expand
      single-expand
      :expanded.sync="expanded"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" style="padding: 2%">
          <b>Funding Transaction Details:</b><br /><br />
          Hash
          <v-icon>mdi-arrow-right</v-icon>
          <span>
            {{ item.funding.transaction }}
          </span>
          <br />
          Time
          <v-icon>mdi-arrow-right</v-icon>
          <span>
            {{ new Date(item.funding.transaction_block.timestamp) }}
          </span>
          <br />
          BCH Price
          <v-icon>mdi-arrow-right</v-icon>
          <span> ${{ item.funding.transaction_block.bch_usd_price }} </span>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },

  data() {
    return {
      search: "",
      loading: true,
      expanded: [],
      settlements: [],
      headers: [
        {
          text: "Spending Transaction",
          align: "start",
          sortable: false,
          value: "spending_transaction",
        },
        { text: "Hedge Satoshis", align: "start", value: "hedge_satoshis" },
        { text: "Long Satoshis", align: "start", value: "long_satoshis" },
        { text: "Oracle Price ($)", align: "start", value: "oracle_price" },
        { text: "", value: "data-table-expand" },
      ],
    };
  },

  created() {
    this.$axios.get("settlements/").then((resp) => {
      this.settlements = resp.data;
      this.loading = false;
    });
  },
};
</script>
