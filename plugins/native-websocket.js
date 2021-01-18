import Vue from "vue";
import VueNativeSock from "vue-native-websocket";

Vue.use(VueNativeSock, "ws://hedgetracker.spice.cash/ws/socket/", {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
});
