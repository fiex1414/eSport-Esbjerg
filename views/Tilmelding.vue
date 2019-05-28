<template>
  <v-container>
    <v-layout
      row
      wrap
      :class="{'pl-5 pt-5': $vuetify.breakpoint.mdAndUp, 'pt-5 ': $vuetify.breakpoint.smAndDown}"
      style="background-image: linear-gradient(#00102B, #0e2752, #00102B);margin-bottom:1px;"
    >
      <div id="logo-background">
        <v-flex xs12 sm12 md6 order-sm1 px-5 pb-5 style="text-align:left;">
          <span id="overskrift-white">Tilmeding</span>
          <v-layout row wrap>
            <v-flex xs6 order-xs1 pr-4>
              <v-btn
                flat
                v-on:click="componentShow = 'Foraeldre'"
                style="height:48px;width:100%;background-color:#2C93C6;"
              >
                <span id="text-button">Forældre</span>
              </v-btn>
            </v-flex>
            <v-flex xs6 order-xs2 pr-3 pl-2>
              <v-btn
                flat
                v-on:click="componentShow = 'Deltagere'"
                style="height:48px;width:100%;background-color:#2C93C6;"
              >
                <span id="text-button">Deltager</span>
              </v-btn>
            </v-flex>

            <v-flex xs12 order-xs3>
              <component v-bind:is="componentShow"></component>
              <v-flex xs12 order-xs4>
                <v-layout row wrap px-2 style="margin-top:-30px;">
                  <v-flex xs6 sm3 order-xs1>
                    <v-checkbox input-value="true" value dark disabled color="#2C93C6">
                      <template v-slot:label>
                        <div class="white--text">Basis</div>
                      </template>
                    </v-checkbox>
                  </v-flex>
                  <v-flex xs6 sm3 order-xs2 >
                    <v-checkbox v-model="checkbox2" dark color="#2C93C6" >
                      <template v-slot:label>
                        <div class="white--text">Pakke 1</div>
                      </template>
                    </v-checkbox>
                  </v-flex>
                  <v-flex id="checkbox-top-padding" xs6 sm3 order-xs4 order-sm3>
                    <v-checkbox v-model="checkbox3" dark color="#2C93C6">
                      <template v-slot:label>
                        <div class="white--text">Pakke 2</div>
                      </template>
                    </v-checkbox>
                  </v-flex>
                  <v-flex id="checkbox-top-padding" xs6 sm3 order-xs3 order-sm4>
                    <v-checkbox v-model="checkbox4" dark color="#2C93C6">
                      <template v-slot:label>
                        <div class="white--text">Modul</div>
                      </template>
                    </v-checkbox>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-layout justify-end>
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on }">
                    <v-btn flat v-on="on" style="background-color:#2C93C6;">
                      <span id="text-button">Tilmeld</span>
                    </v-btn>
                  </template>
                  <v-card style="border-radius:20px;">
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-layout justify-end>
                          <v-btn style="color:#00102b;" icon dark @click="dialog = false">
                            <v-icon>close</v-icon>
                          </v-btn>
                        </v-layout>
                      </v-flex>
                      <v-flex xs12>
                        <p id="dialogheader" class="text-xs-center">Tak for din tilmelding</p>
                      </v-flex>
                      <v-flex xs12>
                        <p class="text-xs-center">
                          <i class="fas fa-check-circle" style="font-size:70px;color:#00102b;"></i>
                        </p>
                      </v-flex>
                      <v-flex xs12 px-5 pb-4>
                        <span id="dialog-text">
                          Vi behandler din tilmelding inden for kort tid og sender
                          en bekræftelse til din e-mail. Går der for lang tid, er du
                          velkommen til at kontakte os under
                          <router-link to="/kontakt" style="text-decoration:none;">
                            <span id="link-contact">KONTAKT</span>
                          </router-link>.
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-dialog>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs0 sm0 md6 order-sm2>
          <!-- <v-img :src="require('../assets/dark-logo.png')" contain height="600"></v-img> -->
        </v-flex>
      </div>
    </v-layout>


  </v-container>
</template>

<script>
import Foraeldre from "@/components/Foraeldre.vue";
import Deltagere from "@/components/Deltagere.vue";

export default {
  name: "home",
  data() {
    return {
      componentShow: "Foraeldre",
      dialog: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
    };
  },
  components: {
    Foraeldre,
    Deltagere,
  },
  

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
  background-repeat: no-repeat;
  background-position-x: right;
}
#overskrift-white {
  font-size: 80px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: white;
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
#dialogheader {
  text-transform: uppercase;
  font-family: "Anton", sans-serif !important;
  color: #00102b;
  font-size: 25px;
}

#dialog-text {
  font-family: "roboto";
  color: black;
}
#link-contact {
  font-family: "roboto";
  font-weight: bold;
  color: #00102b;
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
  #checkbox-top-padding {
    margin-top: -20px;
  }
}
@media only screen and (max-width: 390px) {
  #dialogheader {
    font-size: 20px;
  }
}
</style>
