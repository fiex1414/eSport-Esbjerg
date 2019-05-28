<template>
  <v-container>
    <v-layout
      row
      wrap
      pt-5
      pb-5
      style="background-image: linear-gradient(#00102B, #0e2752, #00102B);margin-bottom:1px;"
    >
      <v-flex sm12 order-sm1>
        <v-layout
          row
          wrap
          justify-center
          :class="{'pa-5': $vuetify.breakpoint.mdAndUp, 'pa-2': $vuetify.breakpoint.smAndDown}"
        >
          <v-flex
            xs6
            sm3
            order-xs1
            px-5
            style="cursor:pointer;"
            :class="{'pb-5': $vuetify.breakpoint.smAndUp, 'pb-0': $vuetify.breakpoint.xs}"
          >
            <v-layout row wrap>
              <v-flex xs12 order-xs1>
                <p v-on:click="componentShow = 'Hvemervi'">
                  <v-img :src="require('../assets/who.svg')" contain height="150"></v-img>
                </p>
              </v-flex>
              <v-flex xs12 order-xs2>
                <p
                  v-on:click="componentShow = 'Hvemervi'"
                  class="text-xs-center"
                  id="icon-header"
                >Hvem er vi</p>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex
            xs6
            sm3
            order-xs2
            px-5
            style="cursor:pointer;"
            :class="{'pb-5': $vuetify.breakpoint.smAndUp, 'pb-0': $vuetify.breakpoint.xs}"
          >
            <v-layout row wrap>
              <v-flex xs12 order-xs1>
                <p v-on:click="componentShow = 'Spil'">
                  <v-img :src="require('../assets/konsol.svg')" contain height="150"></v-img>
                </p>
              </v-flex>
              <v-flex xs12 order-xs2>
                <p v-on:click="componentShow = 'Spil'" class="text-xs-center" id="icon-header">Spil</p>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs6 sm3 order-xs3 px-5 pb-5 style="cursor:pointer;">
            <v-layout row wrap>
              <v-flex xs12 order-xs1>
                <p v-on:click="componentShow = 'Esport'">
                  <v-img :src="require('../assets/pc.svg')" contain height="150"></v-img>
                </p>
              </v-flex>
              <v-flex xs12 order-xs2>
                <p
                  v-on:click="componentShow = 'Esport'"
                  class="text-xs-center"
                  id="icon-header"
                >eSport</p>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs6 sm3 order-xs4 px-5 pb-5 style="cursor:pointer;">
            <v-layout row wrap>
              <v-flex xs12 order-xs1>
                <p v-on:click="componentShow = 'Partnere'">
                  <v-img :src="require('../assets/partners.svg')" contain height="150"></v-img>
                </p>
              </v-flex>
              <v-flex xs12 order-xs2>
                <p
                  v-on:click="componentShow = 'Partnere'"
                  class="text-xs-center"
                  id="icon-header"
                >Partnere</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <component v-bind:is="componentShow"></component>
      </v-flex>
      <v-flex sm12 order-xs5>
        <!-- Omosintro component -->
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import Omosintro from "@/components/Omosintro.vue";
import Spil from "@/components/Spil.vue";
import Hvemervi from "@/components/Hvemervi.vue";
import Esport from "@/components/Esport.vue";
import Partnere from "@/components/Partnere.vue";

export default {
  name: "home",
  data() {
    return {
      componentShow: false,
      dialog: false
    };
  },
  components: {
    Omosintro,
    Spil,
    Hvemervi,
    Esport,
    Partnere,
  }
};
</script>
<style scoped>
.container {
  padding: 0 !important;
  max-width: 100vw !important;
}
#overskrift-white {
  font-size: 80px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: white;
}
#logo-background {
  background-image: url("../assets/half-logo.png");
  background-size: contain;
  background-position-x: right;
  background-repeat: no-repeat;
}
#regular {
  font-family: "roboto";
}
#text-regular {
  font-family: "roboto";
}
#text-bold {
  font-family: "roboto";
  font-weight: bold;
}

#text-button {
  font-family: "roboto";
}

#icon-header {
  font-size: 30px;
  color: #1592e6;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
}
.v-content {
  padding: 0px !important;
}

@media only screen and (max-width: 1020px) {
  #icon-header {
    font-size: 25px;
  }
}
@media only screen and (max-width: 960px) {
  #logo-background {
    background-image: none;
  }
}

@media only screen and (max-width: 850px) {
  #icon-header {
    font-size: 18px;
  }
}
@media only screen and (max-width: 730px) {
  #icon-header {
    font-size: 14px;
  }
}
@media only screen and (max-width: 600px) {
  #icon-header {
    font-size: 18px;
  }
}
</style>
