<template>
  <nav>
    <v-toolbar fixed>
      <v-app-bar-nav-icon
        class="grey--text"
        @click.stop="sidebar = !sidebar"
      ></v-app-bar-nav-icon>
      <router-link to="/" class="mylogo">
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Vuex</span>
          <span>Store</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <!-- Minicart Component -->
      <mini-cart></mini-cart>
      <!-- Minicart Component -->
    </v-toolbar>
    <v-navigation-drawer app v-model="sidebar" temporary>
      <v-list>
        <div v-for="(link, i) in links" :key="i">
          <v-list-tile
            v-if="!link.subLinks"
            :to="link.to"
            :active-class="color"
            avatar
            class="v-list-item"
          >
            <v-list-tile-action>
              <v-icon class="pr-3">{{ link.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-title v-text="link.text" />
          </v-list-tile>

          <v-list-group v-else :key="link.text" no-action>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="pr-3">{{ link.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="sublink in link.subLinks"
              :to="sublink.to"
              :key="sublink.text"
            >
              <v-list-tile-title class="list">
                {{ sublink.text }}</v-list-tile-title
              >
            </v-list-tile>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import MiniCart from "./MiniCart";
export default {
  components: {
    MiniCart,
  },
  data() {
    return {
      sidebar: false,
      links: [
        {
          to: "/",
          icon: "mdi-home",
          text: "Home",
        },
        {
          icon: "mdi-dots-grid",
          text: "Products",
          subLinks: [
            {
              text: "Players list",
              to: "/",
            },
            {
              text: "Import WTA Players",
              to: "/",
            },
          ],
        },
        {
          to: "/",
          icon: "mdi-phone",
          text: "Contact",
        },
      ],
    };
  },
};
</script>

<style>
.list {
  padding: 10px 30px;
  display: block !important;
}

.spacer {
  display: inline-block !important;
}
.btn-clear {
  float: right;
}

.mylogo {
  text-decoration: none !important;
}
</style>