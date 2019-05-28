<template>
  <v-container>
    <v-layout
      row
      wrap
      :class="{'pl-5 pt-5': $vuetify.breakpoint.mdAndUp, 'pt-5 ': $vuetify.breakpoint.smAndDown}"
      style="background-image: linear-gradient(#00102B, #0e2752, #00102B);margin-bottom:1px;"
    >
      <div id="logo-background" style="width:100%;">
        <v-flex xs12 md8 lg6 order-sm1 px-5 pb-5 style="text-align:left;">
          <span id="overskrift-white">Nyheder</span>
          <v-layout row wrap>
            <v-flex xs12 sm4 md6 order-xs1 pa-3>
              <v-dialog v-model="dialogbox1" width="900">
                <template v-slot:activator="{ on }">
                  <p v-on="on">
                    <v-img
                      :src="require('../assets/trainers.jpg')"
                      aspect-ratio="1"
                      style="border-radius:10px;cursor: pointer;"
                    >
                      <v-layout align-end fill-height>
                        <v-flex id="overlaybox">
                          <v-layout row wrap>
                            <v-flex xs10 order-xs1 pt-3 pl-3>
                              <p id="news-title">Ny træner</p>
                            </v-flex>
                            <v-flex xs2 order-xs2 pt-3>
                              <i class="fas fa-chevron-right" style="color:white;font-size:30px;"></i>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-img>
                  </p>
                </template>

                <v-card style="border-radius:20px;">
                  <v-layout
                    wrap
                    :class="{'row': $vuetify.breakpoint.smAndUp, 'column': $vuetify.breakpoint.xs}"
                  >
                    <v-flex xs6 id="news-pic">
                      <v-layout justify-end>
                        <v-btn id="close-pic" icon dark @click="dialogbox1 = false">
                          <v-icon>close</v-icon>
                        </v-btn>
                      </v-layout>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row wrap>
                        <v-layout justify-end>
                          <v-btn id="close-text" icon dark @click="dialogbox1 = false">
                            <v-icon>close</v-icon>
                          </v-btn>
                        </v-layout>
                        <v-flex
                          xs12
                          order-xs1
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialogheader">Fifa 2019</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          py-3
                          pb-5
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="text-regular">
                            Vi kan hermed meddele at vi i august 2019 vil introducere FIFA 2019 som et ekstra spil på programmet, hvor der vil være tildelt 2 trænere på både på mandags- og tirsdagsholdet.
                            <br>
                            <br>Peter og Kasper vil primært være tilstede for at hjælpe på FIFA-holdet, mens Niels og Trine vil være tilstede som hjælpende hånd til de resterende spil.
                            <br>
                            <br>Er der flere spørgmål eller andre efterspørgelser, er I velkomne til at kontakte os for flere oplysninger.
                          </span>
                        </v-flex>
                        <v-flex xs12 order-xs3></v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex xs12 sm4 md6 order-xs2 pa-3>
              <v-dialog v-model="dialogbox2" width="900">
                <template v-slot:activator="{ on }">
                  <p v-on="on">
                    <v-img
                      :src="require('../assets/fifa-2019.png')"
                      aspect-ratio="1"
                      style="border-radius:10px;cursor: pointer;"
                    >
                      <v-layout align-end fill-height>
                        <v-flex id="overlaybox">
                          <v-layout row wrap>
                            <v-flex xs10 order-xs1 pt-3 pl-3>
                              <p id="news-title">Fifa 2019</p>
                            </v-flex>
                            <v-flex xs2 order-xs2 pt-3>
                              <i class="fas fa-chevron-right" style="color:white;font-size:30px;"></i>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-img>
                  </p>
                </template>
                <v-card style="border-radius:20px;">
                  <v-layout
                    wrap
                    :class="{'row': $vuetify.breakpoint.smAndUp, 'column': $vuetify.breakpoint.xs}"
                  >
                    <v-flex xs6 id="news-pic">
                      <v-layout justify-end>
                        <v-btn id="close-pic" icon dark @click="dialogbox2 = false">
                          <v-icon>close</v-icon>
                        </v-btn>
                      </v-layout>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row wrap>
                        <v-layout justify-end>
                          <v-btn id="close-text" icon dark @click="dialogbox2 = false">
                            <v-icon>close</v-icon>
                          </v-btn>
                        </v-layout>
                        <v-flex
                          xs12
                          order-xs1
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialogheader">Fifa 2019</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          py-3
                          pb-5
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="text-regular">
                            Vi kan hermed meddele at vi i august 2019 vil introducere FIFA 2019 som et ekstra spil på programmet, hvor der vil være tildelt 2 trænere på både på mandags- og tirsdagsholdet.
                            <br>
                            <br>Peter og Kasper vil primært være tilstede for at hjælpe på FIFA-holdet, mens Niels og Trine vil være tilstede som hjælpende hånd til de resterende spil.
                            <br>
                            <br>Er der flere spørgmål eller andre efterspørgelser, er I velkomne til at kontakte os for flere oplysninger.
                          </span>
                        </v-flex>
                        <v-flex xs12 order-xs3></v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex xs12 sm4 md6 order-xs3 pa-3>
              <v-dialog v-model="dialogbox3" width="900">
                <template v-slot:activator="{ on }">
                  <p v-on="on">
                    <v-img
                      :src="require('../assets/event.png')"
                      aspect-ratio="1"
                      style="border-radius:10px;cursor: pointer;"
                    >
                      <v-layout align-end fill-height>
                        <v-flex id="overlaybox">
                          <v-layout row wrap>
                            <v-flex xs10 order-xs1 pt-3 pl-3>
                              <p id="news-title">Stort event</p>
                            </v-flex>
                            <v-flex xs2 order-xs2 pt-3>
                              <i class="fas fa-chevron-right" style="color:white;font-size:30px;"></i>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-img>
                  </p>
                </template>
                <v-card style="border-radius:20px;">
                  <v-layout
                    wrap
                    :class="{'row': $vuetify.breakpoint.smAndUp, 'column': $vuetify.breakpoint.xs}"
                  >
                    <v-flex xs6 id="news-pic">
                      <v-layout justify-end>
                        <v-btn id="close-pic" icon dark @click="dialogbox3 = false">
                          <v-icon>close</v-icon>
                        </v-btn>
                      </v-layout>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row wrap>
                        <v-layout justify-end>
                          <v-btn id="close-text" icon dark @click="dialogbox3 = false">
                            <v-icon>close</v-icon>
                          </v-btn>
                        </v-layout>
                        <v-flex
                          xs12
                          order-xs1
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialogheader">Fifa 2019</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          py-3
                          pb-5
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="text-regular">
                            Vi kan hermed meddele at vi i august 2019 vil introducere FIFA 2019 som et ekstra spil på programmet, hvor der vil være tildelt 2 trænere på både på mandags- og tirsdagsholdet.
                            <br>
                            <br>Peter og Kasper vil primært være tilstede for at hjælpe på FIFA-holdet, mens Niels og Trine vil være tilstede som hjælpende hånd til de resterende spil.
                            <br>
                            <br>Er der flere spørgmål eller andre efterspørgelser, er I velkomne til at kontakte os for flere oplysninger.
                          </span>
                        </v-flex>
                        <v-flex xs12 order-xs3></v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex xs12 sm4 md6 order-xs4 pa-3>
              <v-dialog v-model="dialogbox4" width="900">
                <template v-slot:activator="{ on }">
                  <p v-on="on">
                    <v-img
                      :src="require('../assets/lan.png')"
                      aspect-ratio="1"
                      style="border-radius:10px;cursor: pointer;"
                    >
                      <v-layout align-end fill-height>
                        <v-flex id="overlaybox">
                          <v-layout row wrap>
                            <v-flex xs10 order-xs1 pt-3 pl-3>
                              <p id="news-title">Flere LAN</p>
                            </v-flex>
                            <v-flex xs2 order-xs2 pt-3>
                              <i class="fas fa-chevron-right" style="color:white;font-size:30px;"></i>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-img>
                  </p>
                </template>
                <v-card style="border-radius:20px;">
                  <v-layout
                    wrap
                    :class="{'row': $vuetify.breakpoint.smAndUp, 'column': $vuetify.breakpoint.xs}"
                  >
                    <v-flex xs6 id="news-pic">
                      <v-layout justify-end>
                        <v-btn id="close-pic" icon dark @click="dialogbox4 = false">
                          <v-icon>close</v-icon>
                        </v-btn>
                      </v-layout>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row wrap>
                        <v-layout justify-end>
                          <v-btn id="close-text" icon dark @click="dialogbox4 = false">
                            <v-icon>close</v-icon>
                          </v-btn>
                        </v-layout>
                        <v-flex
                          xs12
                          order-xs1
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialogheader">Fifa 2019</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          py-3
                          pb-5
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="text-regular">
                            Vi kan hermed meddele at vi i august 2019 vil introducere FIFA 2019 som et ekstra spil på programmet, hvor der vil være tildelt 2 trænere på både på mandags- og tirsdagsholdet.
                            <br>
                            <br>Peter og Kasper vil primært være tilstede for at hjælpe på FIFA-holdet, mens Niels og Trine vil være tilstede som hjælpende hånd til de resterende spil.
                            <br>
                            <br>Er der flere spørgmål eller andre efterspørgelser, er I velkomne til at kontakte os for flere oplysninger.
                          </span>
                        </v-flex>
                        <v-flex xs12 order-xs3></v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs0 md4 lg6 order-sm2>
          <!--  <v-img :src="require('../assets/dark-logo.png')" contain height="800"></v-img> -->
        </v-flex>
      </div>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      dialogbox1: false,
      dialogbox2: false,
      dialogbox3: false,
      dialogbox4: false,
      dialogbox5: false,
      dialogbox6: false
    };
  },
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
}

#news-title {
  color: white;
  font-family: "Anton", sans-serif;
  font-size: 25px;
}
#news-description {
  color: white;
  font-family: "roboto";
  font-size: 12px;
}

#text-button {
  font-family: "roboto";
}
#overlaybox {
  background-color: #131723c9;
  border-radius: 0px 0px 10px 10px;
}
#news-pic {
  background-image: url("../assets/fifa.png");
  background-size: cover;
  border-radius: 20px 0px 0px 20px;
}
#close-pic {
  color: white;
  visibility: hidden;
}
#close-text {
  color: #00102b;
  visibility: visible;
}
#dialogheader {
  text-transform: uppercase;
  font-family: "Anton", sans-serif !important;
  color: #00102b;
  font-size: 25px;
}
#detail-dialog {
  font-family: "Roboto";
  font-size: 17px;
  color: #2c93c6;
}
#text-regular {
  font-family: "roboto";
  color: #00102b;
}
.v-content {
  padding: 0px !important;
}
@media only screen and (max-width: 900px) {
  #news-title {
    font-size: 20px;
  }
}
@media only screen and (max-width: 850px) {
  #overskrift-white {
    font-size: 60px;
  }
}
@media only screen and (max-width: 750px) {
  #news-title {
    font-size: 17px;
  }
}
@media only screen and (max-width: 670px) {
  #news-title {
    font-size: 14px;
  }
}

@media only screen and (max-width: 600px) {
  #overskrift-white {
    font-size: 45px;
  }
  #news-pic {
    border-radius: 20px 20px 0px 0px;
  }
  #close-pic {
    color: white;
    visibility: visible;
  }
  #close-text {
    color: #00102b;
    visibility: hidden;
  }
  #text-regular {
    font-size: 12px;
  }
  #news-title {
    font-size: 25px;
  }
}
@media only screen and (max-width: 400px) {
  #news-title {
    font-size: 20px;
  }
}
</style>
