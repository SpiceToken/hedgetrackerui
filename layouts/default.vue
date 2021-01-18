<template>
  <v-app dark>
    <!--
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    -->
    <v-app-bar :clipped-left="clipped" fixed app flat hide-on-scroll>
      <!--
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant" v-if="drawer">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> 
      -->
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>

      <!-- 
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <!-- 
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span> 
    </v-footer>
      -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      // drawer: false,
      // fixed: false,
      // items: [
      //   {
      //     icon: "mdi-chart-bar",
      //     title: "Metrics",
      //     to: "/",
      //   },
      //   {
      //     icon: "mdi-table",
      //     title: "Settlements",
      //     to: "/settlements",
      //   },
      // ],
      // miniVariant: false,
      // right: true,
      // rightDrawer: false,
      title: "Hedge Tracker",
    };
  },
};
</script>

<style scoped>
.v-application {
  background-color: #f2f4f4;
  font-family: "Karla", sans-serif;
}
</style>
