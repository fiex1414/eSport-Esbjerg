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
          <span id="overskrift-white">Regler</span>

          <v-flex xs12 order-xs2 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Generelt</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    Deltagelse til ELP forudsætter overholdelse af de til enhver tid gældende regler for ELP, samt dansk og international lovgivning.
                    <br>
                    <br>Regelsættet for ELP kan ændres uden varsel, og vil hurtigst muligt blive opdateret på ELP’s hjemmeside og Facebook.
                    <br>
                    <br>Deltagere skal altid følge anvisninger fra ELP’s crew, offentlige myndigheder som politi og brandvæsen, også selvom disse ikke er dækket af dette regelsæt.
                    <br>
                    <br>Hvis gældende regler eller anvisninger ikke bliver overholdt, forbeholder ELP sig retten til, uden varsel, at bortvise personer fra eventet og eventets område, uden mulighed for refundering af evt. billet.
                    <br>
                    <br>Deltagelse til ELP sker udelukkende på deltagerens eget ansvar.
                    <br>
                    <br>ELP påtager sig intet ansvar for hærværk, tyveri, fejlstrøm eller anden skade på udstyr.
                    <br>
                    <br>Hel eller delvis refundering af billet er ikke muligt. Heller ikke i tilfælde af sygdom, strømafbrydelse, udfald på netværk eller andre uforudsete hændelser.
                    <br>
                    <br>Hver billet til ELP er unik, og giver adgang for én person til eventet.
                    <br>
                    <br>Snyd med billetter eller andre forsøg på, uberettiget, at komme ind til eventet vil blive politianmeldt.
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>

          <v-flex xs12 order-xs3 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Deltagerpladser</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    Til hver deltagerplads stilles der ét strømstik og ét netværksstik til rådighed.
                    <br>
                    <br>Deltageren skal selv medbringe stikdåse og netværkskabel for tilslutning af eget udstyr.
                    <br>
                    <br>Det er kun tilladt at tilslutte én computer, konsol eller lign. pr. deltager.
                    <br>
                    <br>Det er ikke tilladt at tilslutte eget netværksudstyr i form af routere, access points, switche, eller andet udstyr bortset fra en computer eller konsol til ELP’s netværk.
                    <br>
                    <br>Det er ikke tilladt at benytte højtalere.
                    <br>
                    <br>Det er ikke tilladt at medbringe køleskabe, toastere, kaffemaskiner, elkedler, effektlamper eller andre elektriske apparater med et højt strømforbrug.
                    <br>
                    <br>Det er ikke tilladt af medbringe sofaer, lænestole eller andre større møbler, men det er dog tilladt, at medbringe en kontorstol.
                    <br>
                    <br>I soveområderne skal man placere luftmadrasser og liggeunderlag, op ad hinanden uden mellemrum, og indenfor opmærkede båse, så der er soveplads til alle.
                    <br>
                    <br>Det er ikke tilladt at sove under borde, på gang-arealer eller lign. Sovning skal foregå i de opmærkede soveområder.
                    <br>
                    <br>Alle deltagernes ejendele skal placeres på deltagerens bordplads eller derunder.
                    <br>
                    <br>Der må under ingen omstændigheder stå ejendele i gangarealerne, foran døre eller porte da disse er flugtveje.
                    <br>
                    <br>Gældende lovgivning vedr. kopiering af software og ophavsretsbeskyttet materiale skal overholdes til eventet, og der henstilles til, at deltagerne er opmærksomme på, hvad der er adgang til på deres computer.
                    <br>
                    <br>Det er ikke tilladt, at tvinge sig adgang til andres udstyr eller på anden måde benytte andres udstyr uden tilladelse fra rette vedkommende.
                    <br>
                    <br>Når en deltager forlader eventet, er det deltagerens ansvar at tage alle sine medbragte ejendele med sig, samt smide alt sit affald i affaldsspandene.
                    <br>
                    <br>Evt. glemte ejendele skal gøres krav på straks efter eventet. Efter 1 uge doneres resten til velgørende formål, eller bortskaffes.
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>

          <v-flex xs12 order-xs4 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Rygning</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    Det er ikke tilladt at ryge indendørs.
                    <br>
                    <br>Rygning må kun ske udendørs i de markerede rygeområder.
                    <br>
                    <br>Der gælder samme regler for brugere af e-cigaretter og snus, som for almindelige rygere.
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>

          <v-flex xs12 order-xs5 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Alkohol og stoffer</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    Det er ikke tilladt at indtage nogen former for alkohol, euforiserende stoffer eller møde op i påvirket tilstand til eventet.
                    <br>
                    <br>Forbuddet gælder på hele området for eventet, både i hallerne, parkeringspladserne samt alle underdørsarealer inden for event området.
                    <br>
                    <br>Det er ikke tilladt at indtage alkohol uden for eventets område, og derefter benytte eventets soveområde i påvirket tilstand.
                    <br>
                    <br>Overtrædelse af disse regler vil medføre øjeblikkelig bortvisning, uden undtagelse. Og uden refusion af evt. billet.
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
          <v-flex xs12 order-xs6 py-3>
            <v-expansion-panel expand>
              <v-expansion-panel-content>
                <template v-slot:header>
                  <div id="question">Andet</div>
                </template>
                <v-card>
                  <v-card-text id="answer">
                    Det er ikke tilladt af ophænge plakater, skilte, uddele reklamemateriale eller på anden måde gøre reklame uden skriftlig tilladelse fra ELP.
                    <br>
                    <br>Det er ikke tilladt at sælge varer eller ydelser under ELP uden skriftlig tilladelse fra ELP
                    <br>
                    <br>Det er tilladt for den enkelte deltager, at medbringe mad og drikkevarer i begrænsede mængder til eget forbrug.
                    <br>
                    <br>ELP forbeholder sig retten til at videoovervåge eventet, tage billeder og optage video til eventet, samt at distribuere dette til internettet og bruge det til markedsføring af ELP, uden tilladelse fra personer, der måtte optræde på optagelserne/billederne.
                    <br>
                    <br>ELP forbeholder sig retten til at gennemsøge deltagernes tasker, computerkabinetter m.m. igennem for alkohol, euforiserende stoffer m.m.
                    <br>
                    <br>Hvis en deltager ikke vil lade ELP gennemsøge tasker, computerkabinetter m.m. vil dette medføre øjeblikkelig bortvisning.
                    <br>
                    <br>Der kan forekomme drone-flyvning over hovedet på deltagerne, hvilket deltageren giver accept til ved accept af disse regler og deltagelse til ELP.
                    <br>
                    <br>ELP forbeholder sig retten til at logge alt datatrafik, jfr. gældende lovgivning, på hele ELP’s netværk samt internetforbindelse.
                    <br>
                    <br>Det er ikke tilladt at medbringe knive, knojern, attrapvåben eller andre våben, af nogen art under eventet.
                    <br>
                    <br>Det er ikke tilladt at bære maske eller på anden måde dække sit ansigt til under eventet.
                    <br>
                    <br>Det er ikke tilladt at benytte segboards, løbehjul og andre køretøjer indendørs til ELP, eller udendørs i forbindelse med indgangen, madboder og andre steder, hvor folk er tæt samlet.
                    <br>
                    <br>Droneflyvning er kun tilladt efter skriftlig forudgående aftale med ELP, og vil kun blive givet, hvis man kan fremvise dronecertikat, drifthåndbog og godkendt drone, ligesom man skal have et godkendt formål med droneflyvningen.
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
        </v-flex>
        <v-flex xs0 sm4 md6 order-sm2>
          <!--  <v-img :src="require('../assets/dark-logo.png')" contain height="800"></v-img> -->
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
