<template>
  <v-form v-model="valid">
    <v-container
      :class="{'px-0': $vuetify.breakpoint.mdAndUp, 'px-5': $vuetify.breakpoint.smAndDown}"
    >
      <v-layout row wrap>
        <v-layout row wrap>
          <v-flex xs12 order-xs1>
            <span id="overskrift-white">Hvem er vi?</span>
          </v-flex>

          <v-flex xs12 sm12 md6 order-xs2 pb-5>
            <span id="regular">
              eSport Esbjerg er en forening, som har til formål at skabe et samvær for alle der har en interesse indenfor gaming. Vi ønsker at skabe et bedre fælleskab og bidrage til den positive udvikling af unges fritidsinteresser. Samtidig forsøger vi at udvikle medlemmernes kompetencer, så de kan spille på et højere plan.
              <br>
              <br>Vores team består af kvalificerede og uddannede trænere. De står til rådighed med gode tips og opretholder den gode tone, som styrker fællesskabet og skaber postive oplevelser.
            </span>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex
            xs6
            sm4
            md3
            order-xs4
            py-2
            :class="{'px-5': $vuetify.breakpoint.lgAndUp, 'px-3': $vuetify.breakpoint.mdAndDown}"
          >
            <v-img :src="require('../assets/marck.png')"></v-img>
            <br>
            <p class="text-xs-center" id="name">Mark Strunck</p>
            <p class="text-xs-center" id="title">Formand</p>
          </v-flex>
          <v-flex
            xs6
            sm4
            md3
            order-xs5
            py-2
            :class="{'px-5': $vuetify.breakpoint.lgAndUp, 'px-3': $vuetify.breakpoint.mdAndDown}"
          >
            <v-img :src="require('../assets/sune.png')"></v-img>
            <br>
            <p class="text-xs-center" id="name">Sune Røjkjær</p>
            <p class="text-xs-center" id="title">Næstformand</p>
          </v-flex>
          <v-flex
            xs6
            sm4
            md3
            order-xs6
            py-2
            :class="{'px-5': $vuetify.breakpoint.lgAndUp, 'px-3': $vuetify.breakpoint.mdAndDown}"
          >
            <v-img :src="require('../assets/jack.png')"></v-img>
            <br>
            <p class="text-xs-center" id="name">Jack Donovan</p>
            <p class="text-xs-center" id="title">Kasser / Træner</p>
          </v-flex>
          <v-flex
            xs6
            sm4
            md3
            order-xs7
            py-2
            :class="{'px-5': $vuetify.breakpoint.lgAndUp, 'px-3': $vuetify.breakpoint.mdAndDown}"
          >
            <v-img :src="require('../assets/gyda.png')"></v-img>
            <br>
            <p class="text-xs-center" id="name">Gyda Pedersen</p>
            <p class="text-xs-center" id="title">Revisor</p>
          </v-flex>
          <v-flex
            xs6
            sm4
            md3
            order-xs8
            py-2
            :class="{'px-5': $vuetify.breakpoint.lgAndUp, 'px-3': $vuetify.breakpoint.mdAndDown}"
          >
            <v-img :src="require('../assets/jesper.png')"></v-img>
            <br>
            <p class="text-xs-center" id="name">Jesper Sørensen</p>
            <p class="text-xs-center" id="title">Bestyrelsesmedlem</p>
          </v-flex>
          <v-flex
            xs6
            sm4
            md3
            order-xs9
            py-2
            :class="{'px-5': $vuetify.breakpoint.lgAndUp, 'px-3': $vuetify.breakpoint.mdAndDown}"
          >
            <v-img :src="require('../assets/soren.png')"></v-img>
            <br>
            <p class="text-xs-center" id="name">Søren Jensen</p>
            <p class="text-xs-center" id="title">Bestyrelsesmedlem</p>
          </v-flex>
          <v-flex
            xs6
            sm4
            md3
            order-xs10
            py-2
            :class="{'px-5': $vuetify.breakpoint.lgAndUp, 'px-3': $vuetify.breakpoint.mdAndDown}"
          >
            <v-img :src="require('../assets/viktor.png')"></v-img>
            <br>
            <p class="text-xs-center" id="name">Viktor Gjerdmandsen</p>
            <p class="text-xs-center" id="title">Suppleant</p>
          </v-flex>
          <v-flex
            xs6
            sm4
            md3
            order-xs11
            py-2
            :class="{'px-5': $vuetify.breakpoint.lgAndUp, 'px-3': $vuetify.breakpoint.mdAndDown}"
          >
            <v-img :src="require('../assets/kasper.png')"></v-img>
            <br>
            <p class="text-xs-center" id="name">Kasper Nielsen</p>
            <p class="text-xs-center" id="title">Suppleant</p>
          </v-flex>
        </v-layout>
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
#underoverskrift-white {
  font-size: 60px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: white;
}
#underoverskrift-blue {
  font-size: 60px;
  color: #145b86;
  font-family: "Anton", sans-serif;
  text-transform: uppercase;
}
#regular {
  font-family: "roboto";
}
#name {
  font-size: 20px;
  color: #1592e6;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
}
#title {
  color: white;
  font-family: "roboto";
  font-size: 17px;
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
@media only screen and (max-width: 700px) {
  #name {
    font-size: 17px;
  }
  #title {
    font-size: 15px;
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
@media only screen and (max-width: 600px) {
  #regular {
    font-size: 12px;
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
@media only screen and (max-width: 415px) {
  #name {
    font-size: 12px;
  }
  #title {
    font-size: 11px;
  }
}
</style>