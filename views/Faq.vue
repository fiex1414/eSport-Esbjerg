<template>
  <v-container>
    <v-layout
      row
      wrap
      style="background-image: linear-gradient(#00102B, #0e2752, #00102B);margin-bottom:1px;"
      :class="{'pl-5 pt-5': $vuetify.breakpoint.mdAndUp, 'pt-5 ': $vuetify.breakpoint.smAndDown}"
    >
      <div id="logo-background" style="width:100%;">
        <v-flex xs12 sm8 md6 order-sm1 px-5 pb-5 style="text-align:left;">
          <span id="overskrift-white">FAQ</span>

          <v-flex xs12 order-xs2 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Hvad er eSport?</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    eSport står helt konkret for elektronisk sport og indebærer computerspil på konkurrenceplan. Aktiviteten består af faste træninger kombineret med turneringer/mesterskaber, som kan føre til kvalifikationer og til sidst finaler.
                    eSport er anerkendt af både DGI og De Olympiske Lege som en reel sportsgren på konkurrenceniveau.
                    <br>
                    <br>
                    <router-link to="/omos" style="text-decoration:none;color:#2C93C6;">LÆS MERE</router-link>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>

          <v-flex xs12 order-xs3 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Hvordan melder jeg mit barn ind?</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    Du kan tilmelde dit barn under
                    <router-link
                      to="/tilmelding"
                      style="text-decoration:none;color:#2C93C6;"
                    >TILMELDING.</router-link>Bemærk, at hvis deltageren er over 18 bruges formularen til "deltagere", og hvis deltageren er under 18 bruges formularen til "forældre".
                    <br>
                    <br>Du kan også møde op personligt til en af vores træninger mandag - torsdag 18.00 - 20. 00 og udfylde en formular.
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>

          <v-flex xs12 order-xs4 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Er der aldersgrænse på?</div>
                </template>
                <v-card>
                  <v-card-text
                    id="answer"
                  >Hos eSport Esbjerg er der ingen aldersgrænse. Dog skal børn og unge under 18 have forældretilladelse for at kunne melde sig ind og deltage i træninger samt ved arrangerede events.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>

          <v-flex xs12 order-xs5 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Hvordan kan jeg kontakte eSport Esbjerg?</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    Du finder vores kontaktoplysninger bestående af e-mail, telefonnummer og adresse i footeren nederst på siden.
                    <br>
                    <br>Du kan også sende os en besked under
                    <router-link to="/kontakt" style="text-decoration:none;color:#2C93C6;">KONTAKT</router-link>.
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
          <v-flex xs12 order-xs6 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Hvad er LAN?</div>
                </template>
                <v-card>
                  <v-card-text
                    id="answer"
                  >LAN-party er et event, der enten varer over en aften/nat eller i løbet af et par dage hvor man selv medbringer computer. Her kan deltagerne så kobles sammen i et netværk og konkurrere i multiplayer-spil.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
          <v-flex xs12 order-xs7 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Hvad koster det at være medlem?</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    Priserne afhænger af, hvilken medlemspakke, du ønsker. Hvis du blot ønsker medlemsskab for event-rabatter samt server-adgang, kan du træne hjemme uden træner for 100 kr. Ønsker du derimod 1 ugentlig træning med træner koster det 300 kr, mens det for 2 ugentlige træninger koster 500 kr. Hertil kan du også udvide din pakke med yderligere 2 træninger i ugen for 250 kr. ekstra.
                    <br>
                    <br>
                    <router-link
                      to="/medlemsskab"
                      style="text-decoration:none;color:#2C93C6;"
                    >LÆS MERE</router-link>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
          <v-flex xs12 order-xs8 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Hvilke spil udbydes?</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    På nuværende tidspunkt udbydes CS GO, Fortnite og Overwatch.
                    <br>
                    <br>
                    <router-link
                      to="/medlemsskab"
                      style="text-decoration:none;color:#2C93C6;"
                    >LÆS OM SPILLENE</router-link>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
          <v-flex xs12 order-xs9 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Formularen virker ikke - hvad gør jeg?</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    Har du problemer med tilmeldingen, kan vi kontaktes på oplysningerne nederst på siden, eller du kan sende os en besked under
                    <router-link to="/kontakt" style="text-decoration:none;color:#2C93C6;">KONTAKT.</router-link>
                    <br>
                    <br>Du er også velkommen til at møde op til en af vores træninger mandag - torsdag 18.00 - 20.00 og udfylde en formular.
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
          <v-flex xs12 order-xs10 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Hvornår holder I åbent?</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    På Bakkeskolen Cosmos holder vi åbent mandag-torsdag kl. 18.00 - 20.00.
                    <br>I Kvaglundhallen holder vi åbent mandag og onsdag kl. 18.00 - 20.00.
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
        </v-flex>
        <v-flex xs0 sm4 md6 order-sm2>
          <!-- <v-img :src="require('../assets/dark-logo.png')" contain height="600"></v-img> -->
        </v-flex>
      </div>
    </v-layout>
  </v-container>
</template>

<script>

export default {
};
</script>
<style scoped>
.container {
  padding: 0 !important;
  max-width: 100vw !important;
}
#logo-background {
  background-image: url("../assets/half-logo.png");
  background-size: contain;
  background-position-x: right;
  background-repeat: no-repeat;
}
#overskrift-white {
  font-size: 80px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: white;
}
#question {
  font-family: "roboto";
  font-weight: bold;
}
#answer {
  font-family: "roboto";
  font-weight: normal;
}
.v-content {
  padding: 0px !important;
}
@media only screen and (max-width: 850px) {
  #overskrift-white {
    font-size: 60px;
  }
}
@media only screen and (max-width: 600px) {
  #overskrift-white {
    font-size: 45px;
  }
  #answer {
    font-size: 12px;
  }
}
</style>
