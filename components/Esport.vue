<template>
  <div id="logo-background" style="width:100%;">
    <v-form v-model="valid">
      <v-container
        :class="{'px-0': $vuetify.breakpoint.mdAndUp, 'px-5': $vuetify.breakpoint.smAndDown}"
      >
        <v-layout row wrap>
          <v-flex xs12 order-xs1>
            <span id="overskrift-white">eSPORT</span>
          </v-flex>
          <v-flex xs12 md6 order-xs2>
            <v-layout row wrap>
              <v-flex xs12 order-xs3 py-2>
                <v-flex xs12 style="border-bottom: 2px solid white;">
                  <span id="header">Hvad er eSport?</span>
                </v-flex>
                <v-layout row wrap py-2>
                  <v-flex xs12>
                    <span id="detail">
                      eSport står helt konkret for elektronisk sport og indebærer computerspil på konkurrenceplan. Aktiviteten består af faste træninger kombineret med turneringer/mesterskaber, som kan føre til kvalifikationer og til sidst finaler.
                      eSport er anerkendt af både DGI og De Olympiske Lege som en reel sportsgren på konkurrenceniveau.
                    </span>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 order-xs4 py-2>
                <v-flex xs12 style="border-bottom: 2px solid white;">
                  <span id="header">Gaming vs. eSport</span>
                </v-flex>
                <v-layout row wrap py-2>
                  <v-flex xs12>
                    <span id="detail">
                      Gaming forbindes ofte med spillere, der bruger meget tid på computer- eller konsolspil.
                      Dog er der sket en drastisk udvikling inden for området, og man er nu nået frem til computerspil på konkurrenceplan, hvor spillerne dyster om store pengepræmier og titler.
                    </span>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 order-xs5 py-2>
                <v-flex xs12 style="border-bottom: 2px solid white;">
                  <span id="header">Hvor populært er eSport?</span>
                </v-flex>
                <v-layout row wrap py-2>
                  <v-flex xs12>
                    <span id="detail">
                      eSport er kommet for at blive. Det er en stadig voksende branche og er med tiden blevet en global konkurrencesport med stadig flere og flere tilskuere. Der afholdes events på størrelse med fodboldstadioner, hvor tilskuere kommer for at blive underholdt af verdenskendte eSportsudøvere.
                      Millioner af andre følger med i konkurrencerne gennem tv og internettet.
                    </span>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 order-xs5 py-2>
                <v-flex xs12 style="border-bottom: 2px solid white;">
                  <span id="header">Aktivitetsniveau</span>
                </v-flex>
                <v-layout row wrap py-2>
                  <v-flex xs12>
                    <span id="detail">
                      Selvom eSport ofte forbindes med dovenskab og lav aktivitetsniveau er tilfældet det stik modsatte. Under denne kategori hører det til at holde sig både fysisk og psykisk sund.
                      Der bliver lagt vægt på at spise sundt samtidig med, at man træner både krop og hjerne til at håndtere stress bedre og arbejde mere effektivt under pres.
                    </span>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs0 md6 order-xs3>
            <!--  <v-img :src="require('../assets/dark-logo.png')" contain height="600"></v-img> -->
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
  font-family: "Anton", sans-serif;
  color: white;
}

#header {
  color: #1592e6;
  font-family: "Anton", sans-serif;
  font-size: 40px;
}
#detail {
  font-family: "Roboto";
  font-size: 17px;
  color: white;
  padding-top: 5px;
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
  #header {
    font-size: 22px;
  }
  #detail {
    font-size: 12px;
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