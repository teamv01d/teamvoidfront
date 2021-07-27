<template>
  <v-app>
    <v-main>
      <router-view>
        <app-individual-login />
        <Ilanlar />
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import IndividualLogin from "./components/IndividualLogin.vue";
import Ilanlar from "./components/Ilanlar.vue"

export default {
  name: "App",

  components: {
    appIndividualLogin: IndividualLogin,
    Ilanlar,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html,body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body{
  background-color: rgb(245,245,245);
  
}
#nav{
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: white;
  line-height: 30px;

  a{
    font-weight: bold;
    color: darkgray;
    text-decoration: none;
    margin: 0 5px 0 5px;
    font-size: 1.25rem;

    &:active{
      color: #2c3e50;
    }
  }
}
.text-center{
  text-align: center;
}
</style>
