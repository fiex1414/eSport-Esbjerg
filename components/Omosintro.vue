<template>
  <v-container>
    <v-layout row wrap>
      <v-flex sm12 px-5 pb-5 style="text-align:left;">
        <v-layout row wrap>
          <v-flex xs6 order-xs1>
            <span id="overskrift-white">Om os</span>
            <br>
            <span>
              Vi er en eSport-forening bestående af en gruppe frivillige, som alle har en stor passion for eSport og som ønsker at skabe bedre udvikling og samvær for børn med samme interesse.
              <br>
              <br>Herunder kan du læse mere om os, se hvem de frivillig er, erhverve dig mere viden om eSport generelt og se hvem vores samarbejdspartnere er.
            </span>
          </v-flex>

          <v-flex xs6 order-xs2>
            <v-img :src="require('../assets/dark-logo.png')" contain height="400"></v-img>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

        <style scoped>
#overskrift-white {
  font-size: 80px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: white;
}
</style>
        