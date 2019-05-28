<template>
  <v-container>
    <v-layout
      row
      wrap
      :class="{'pl-5 pt-5': $vuetify.breakpoint.mdAndUp, 'pt-5 ': $vuetify.breakpoint.smAndDown}"
      style="background-image: linear-gradient(#00102B, #0e2752, #00102B);margin-bottom:1px;"
    >
      <div id="logo-background" style="width:100%;">
        <v-flex
          xs12
          sm8
          md6
          order-sm1
          pb-5
          px-5
          style="text-align:left;"
          :class="{'px-4': $vuetify.breakpoint.smAndUp, 'px-2': $vuetify.breakpoint.xs}"
        >
          <span id="overskrift-white">Kontakt</span>
          <v-layout row wrap>
            <v-flex xs12 order-xs1 pr-0>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="Fornavn"
                solo
                flat
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 order-xs2 pa-0>
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" solo flat required></v-text-field>
            </v-flex>

            <v-flex xs12 order-xs3>
              <v-textarea label="Din besked..." solo auto-grow flat required></v-textarea>
            </v-flex>

            <v-flex order-xs4>
              <v-layout justify-end>
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" style="background-color:#2C93C6;margin:0;">
                      <span id="text-button">Send</span>
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
                        <p id="dialogheader" class="text-xs-center">Tak for din besked</p>
                      </v-flex>
                      <v-flex xs12>
                        <p class="text-xs-center">
                          <i class="fas fa-check-circle" style="font-size:70px;color:#00102b;"></i>
                        </p>
                      </v-flex>
                      <v-flex xs12 px-5 pb-4>
                        <span id="dialog-text">
                          Vi vil bestræbe os på at svare på din mail hurtigst muligt.
                          Går det ikke hurtigt nok, kan du finde vores nummer under
                          <span
                            id="link-contact"
                            @click="dialog = false"
                            style="cursor:pointer;"
                          >KONTAKT</span> nederst på siden.
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-dialog>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm4 md6 order-sm2>
          <!-- <v-img :src="require('../assets/dark-logo.png')" contain height="600"></v-img> -->
        </v-flex>
      </div>
    </v-layout>

  </v-container>
</template>

<script>

export default {
  data: () => ({
    firstname: "",
    nameRules: [v => !!v || "Feltet skal udfyldes"],
    email: "",
    emailRules: [
      v => !!v || "Feltet skal udfyldes",
      v => /.+@.+/.test(v) || "E-mail eksisterer ikke"
    ],
    dialog: false
  }),
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
}
@media only screen and (max-width: 390px) {
  #dialogheader {
    font-size: 20px;
  }
}
</style>
