<template>
  <v-app>
    <v-main>
      <router-view>
        <app-individual-login />
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import IndividualLogin from "./components/IndividualLogin.vue";

export default {
  name: "App",

  components: {
    appIndividualLogin: IndividualLogin,
  },

  data: () => ({
    //
  }),
};
</script>
