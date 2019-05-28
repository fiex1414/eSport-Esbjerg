<template>
  <div id="logo-background" style="width:100%;">
    <v-form v-model="valid">
      <v-container
        :class="{'px-0': $vuetify.breakpoint.mdAndUp, 'px-5': $vuetify.breakpoint.smAndDown}"
      >
        <v-layout row wrap>
          <v-flex xs12 order-xs1>
            <span id="overskrift-white">Spil</span>
          </v-flex>
          <v-flex xs12 sm12 md7 order-xs2>
            <v-layout row wrap align-center>
              <v-flex id="border-down" xs12 sm5 order-xs1 pr-3 mb-5>
                <v-img :src="require('../assets/csgo.png')" contain></v-img>
              </v-flex>
              <v-flex id="border-side" xs12 sm7 order-xs3 pl-3 mb-5>
                <span>
                  CS-GO er et online multiplayer-spil, hvor man I to modsatte hold enten placerer bomber og eliminerer modstanderen, mens det andet hold forsvare sig ved at eliminere det andet hold eller desarmere bomber.
                  <br>
                  <br>Det er et kommunikativt spil med fokus på teamwork og strategiudvikling. Der er moderat vold i spillet illustreret i form af pistoler og gevær.
                </span>
              </v-flex>
              <v-flex id="border-down" xs12 sm5 order-xs3 pr-3 mb-5>
                <v-img :src="require('../assets/fortnite.png')" contain></v-img>
              </v-flex>
              <v-flex id="border-side" xs12 sm7 order-xs4 pl-3 mb-5>
                <span>
                  FORTNITE er et live multiplayer-spil, som starter ud med 100 spillere, der lander på en ø, hvorefter spillerne skal eliminere hinanden. Det endelig mål er at eliminere de andre spillere og stå tilbage som vinder.
                  <br>
                  <br>
Det er et sjovt, underholdende og kreativt strategispil, hvor man har mulighed for at spille med sine venner og udvikle sine spilkompetencer.
                </span>
              </v-flex>
              <v-flex id="border-down" xs12 sm5 order-xs5 pr-3 mb-5>
                <v-img :src="require('../assets/overwatch.png')" contain></v-img>
              </v-flex>
              <v-flex id="border-side" xs12 sm7 order-xs6 pl-3>
                <span>
                  OVERWATCH er et online multiplayer-spil, hvor man i et 6-mandsteam bevæger sig rundt som en udvalgt HERO-shooter for at beskytte strategiske positioner mod andre modstandere ved at eliminere dem.
                  <br>
                  <br>Spillet har stort fokus på teamplay, kommunikation og strategisk problemløsning.
                </span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs0 sm0 md5 order-xs2>
            <!-- <v-img :src="require('../assets/dark-logo.png')" contain height="550"></v-img> -->
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
  </div>
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

#border-side {
  border-left: 2px solid #2c93c6;
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
  #border-side {
    border-left: none;
  }
  #border-down {
    border-bottom: 2px solid #2c93c6;
    padding-bottom: 25px;
  }
  #underoverskrift-white {
    font-size: 30px;
  }
  #underoverskrift-blue {
    font-size: 30px;
  }
}
@media only screen and (max-width: 600px) {
  #border-side {
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
</style>