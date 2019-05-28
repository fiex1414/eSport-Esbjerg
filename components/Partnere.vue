<template>
  <v-form v-model="valid">
    <v-container
      :class="{'px-0': $vuetify.breakpoint.mdAndUp, 'px-5': $vuetify.breakpoint.smAndDown}"
    >
      <v-layout row wrap>
        <v-flex xs12 order-xs1>
          <span id="overskrift-white">Partnere</span>
        </v-flex>
        <v-flex xs12 md6 order-xs2>
          <v-layout row wrap>
            <v-flex xs12 sm6 order-xs1 pa-4>
              <v-img :src="require('../assets/cosmos.png')" contain></v-img>
            </v-flex>
            <v-flex xs12 sm6 order-xs2 pa-4>
              <v-img :src="require('../assets/hallen-white.png')" contain height="70"></v-img>
            </v-flex>
            <v-flex xs12 order-xs3 pa-4>
              <v-img :src="require('../assets/cloud-factory.png')" contain></v-img>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 order-xs1>
          <span id="underoverskrift-white">Mangler du</span>
          <span id="underoverskrift-blue">information</span>
          <span id="underoverskrift-white">?</span>
        </v-flex>
        <v-flex xs12 order-xs2>
          <router-link to="/Faq" style="text-decoration:none;">
            <v-btn flat style="background-color:#2C93C6;">
              <span id="text-button">FAQ</span>
            </v-btn>
          </router-link>
          <router-link to="/kontakt" style="text-decoration:none;">
            <v-btn flat style="background-color:#2C93C6;">
              <span id="text-button">Kontakt os</span>
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {};
</script>

<style scoped>
#overskrift-white {
  font-size: 80px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: white;
}
#regular {
  font-family: "roboto";
}
#name {
  font-size: 20px;
  color: #145b86;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
}
#title {
  color: white;
  font-family: "roboto";
  font-size: 17px;
}
#underoverskrift-white {
  font-size: 60px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: white;
}
#underoverskrift-blue {
  font-size: 60px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: #145b86;
}
@media only screen and (max-width: 850px) {
  #overskrift-white {
    font-size: 60px;
  }
  #underoverskrift-white {
    font-size: 40px;
  }
  #underoverskrift-blue {
    font-size: 40px;
  }
}
@media only screen and (max-width: 600px) {
  #overskrift-white {
    font-size: 45px;
  }
  #underoverskrift-white {
    font-size: 30px;
  }
  #underoverskrift-blue {
    font-size: 30px;
  }
}
@media only screen and (max-width: 445px) {
  #underoverskrift-white {
    font-size: 20px;
  }
  #underoverskrift-blue {
    font-size: 20px;
  }
}
</style>