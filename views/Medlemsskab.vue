<template>
  <v-container>
    <v-layout
      row
      wrap
      style="background-image: linear-gradient(#00102B, #0e2752, #00102B);"
      :class="{'px-5 pt-5': $vuetify.breakpoint.mdAndUp, 'pt-5 ': $vuetify.breakpoint.smAndDown}"
    >
      <v-flex xs12 md7 lg6 order-sm1 px-5 pb-5 style="text-align:left;">
        <span id="overskrift-white">Medlemskab</span>
        <v-layout row wrap>
          <v-flex xs12 order-xs1>
            <span
              id="text-regular"
            >Vi tilbyder medlemskab med mange muligheder og lidt for enhver smag og alder. Fællesskabet og gode rammer er vores fokuspunkter, og vi ønsker at skabe et sundt og positivt miljø for alle vores medlemmer. Medlemmerne får også mulighed for at udvikle sine kompetencer og deltage i konkurrencer samt events.</span>
          </v-flex>
          <v-flex xs12 order-xs2 pt-3>
            <v-layout justify-end>
              <v-btn
                href="#smooth_scroll1"
                v-smooth-scroll="{ duration: 2000, offset: -65} "
                flat
                style="background-color:#2C93C6;margin-left:0px !important;"
              >
                <span id="text-button">Pris</span>
              </v-btn>
              <v-btn
                href="#smooth_scroll2"
                v-smooth-scroll="{ duration: 2000, offset: -65} "
                flat
                style="background-color:#2C93C6;margin-left:0px !important;"
              >
                <span id="text-button">Skema</span>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs0 md5 lg6 order-sm2>
        <v-img :src="require('../assets/dark-logo.png')" contain height="600"></v-img>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      style="background-image: linear-gradient(#00102B, #0e2752, #00102B);"
      :class="{'px-5 pt-5': $vuetify.breakpoint.mdAndUp, 'pt-5 ': $vuetify.breakpoint.smAndDown}"
    >
      <div id="smooth_scroll1"></div>
      <v-flex sm12 order-sm1 px-5 pb-5 style="text-align:left;">
        <span id="overskrift-white">Pris</span>
        <br>
        <span
          id="text-regular"
        >Vores priser betales pr. kontingent (1/2 år), og tilbydes i forskellige pakkerløsninger efter eget ønske og behov.</span>
        <v-layout
          row
          wrap
          :class="{'pa-3': $vuetify.breakpoint.lgAndUp, 'py-3': $vuetify.breakpoint.mdAndDown}"
        >
          <v-flex xs12 sm6 md3 order-xs1 pa-2>
            <v-card style="border-radius:10px;background-color:#00102B;border: 1px solid white;">
              <v-layout row wrap pa-4>
                <v-flex xs12 order-xs1>
                  <p id="package-type" class="text-xs-center">Basis</p>
                </v-flex>
                <v-flex xs12 order-xs2>
                  <p style="margin-top:-10px;" id="price" class="text-xs-center">100 dkk</p>
                </v-flex>
                <v-flex xs12 order-xs3>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">klubarrangementer</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs4>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">Discord-server</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs5>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">Teamspeaker-server</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs6>
                  <router-link to="/Tilmelding" style="text-decoration:none;">
                    <v-btn
                      flat
                      style="background-color:#2C93C6;width:100%;height:40px;margin:0px !important;"
                    >
                      <span id="text-button">Tilmeld</span>
                    </v-btn>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 md3 order-xs2 pa-2>
            <v-card style="border-radius:10px;background-color:#00102B;border: 1px solid white;">
              <v-layout row wrap pa-4>
                <v-flex xs12 order-xs1>
                  <p id="package-type" class="text-xs-center">Pakke 1</p>
                </v-flex>
                <v-flex xs12 order-xs2>
                  <p style="margin-top:-10px;" id="price" class="text-xs-center">300 dkk</p>
                </v-flex>
                <v-flex xs12 order-xs3>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">1x træning/ugen</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs4>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">Udstyr til rådighed</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs5>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">Undervisning</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs6>
                  <router-link to="/Tilmelding" style="text-decoration:none;">
                    <v-btn
                      flat
                      style="background-color:#2C93C6;width:100%;height:40px;margin:0px !important;"
                    >
                      <span id="text-button">Tilmeld</span>
                    </v-btn>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 md3 order-xs3 pa-2>
            <v-card style="border-radius:10px;background-color:#00102B;border: 1px solid white;">
              <v-layout row wrap pa-4>
                <v-flex xs12 order-xs1>
                  <p id="package-type" class="text-xs-center">Pakke 2</p>
                </v-flex>
                <v-flex xs12 order-xs2>
                  <p style="margin-top:-10px;" id="price" class="text-xs-center">500 dkk</p>
                </v-flex>
                <v-flex xs12 order-xs3>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">2x træning/ugen</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs4>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">Udstyr til rådighed</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs5>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">Undervisning</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs6>
                  <router-link to="/Tilmelding" style="text-decoration:none;">
                    <v-btn
                      flat
                      style="background-color:#2C93C6;width:100%;height:40px;margin:0px !important;"
                    >
                      <span id="text-button">Tilmeld</span>
                    </v-btn>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 md3 order-xs4 pa-2>
            <v-card style="border-radius:10px;background-color:#00102B;border: 1px solid white;">
              <v-layout row wrap pa-4>
                <v-flex xs12 order-xs1>
                  <p id="package-type" class="text-xs-center">Modul</p>
                </v-flex>
                <v-flex xs12 order-xs2>
                  <p style="margin-top:-10px;" id="price" class="text-xs-center">250 dkk</p>
                </v-flex>
                <v-flex xs12 order-xs3>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">Udvid din pakke</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs4>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">+ 2x træning/ugen</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs5>
                  <v-layout row wrap>
                    <v-flex
                      xs1
                      order-xs1
                      :class="{'pl-3': $vuetify.breakpoint.lgAndUp, 'pl-1': $vuetify.breakpoint.mdAndDown}"
                    >
                      <i id="check-icon" class="fas fa-check"></i>
                    </v-flex>
                    <v-flex xs11 order-xs2>
                      <p id="advantages" class="text-xs-center">Mere undervisning</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 order-xs6>
                  <router-link to="/Tilmelding" style="text-decoration:none;">
                    <v-btn
                      flat
                      style="background-color:#2C93C6;width:100%;height:40px;margin:0px !important;"
                    >
                      <span id="text-button">Tilmeld</span>
                    </v-btn>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      style="background-image: linear-gradient(#00102B, #0e2752, #00102B);margin-bottom:1px;"
      :class="{'px-5 pt-5 pb-5': $vuetify.breakpoint.mdAndUp, 'pt-5 pb-5': $vuetify.breakpoint.smAndDown}"
    >
      <div id="smooth_scroll2"></div>
      <v-flex xs12 md7 lg6 order-sm1 px-5 style="text-align:left;">
        <span id="overskrift-white">Skema</span>
        <v-layout row wrap>
          <v-flex xs12 order-xs1>
            <div>
              <v-layout justify-start column fill-height>
                <span id="event-name">Mandag</span>
                <v-layout row wrap py-2>
                  <v-flex xs1 sm1 order-xs1 py-2>
                    <i class="fas fa-map-marker-alt"></i>
                  </v-flex>
                  <v-flex xs11 sm5 order-xs2 pl-1>
                    <span id="detail-scheme">Bakkeskolen</span>
                    <br>
                    <span id="detail-scheme">Kvaglundhallen</span>
                  </v-flex>
                  <v-flex xs1 sm1 order-xs3 py-2>
                    <i class="fas fa-clock"></i>
                  </v-flex>
                  <v-flex xs11 sm5 order-xs4 pt-2 pl-1>
                    <span id="detail-scheme">18.00 - 20.00</span>
                  </v-flex>
                </v-layout>
              </v-layout>
            </div>
          </v-flex>
          <v-flex xs12 order-xs2>
            <div>
              <v-layout justify-start column fill-height>
                <span id="event-name">Tirsdag</span>
                <v-layout row wrap py-2>
                  <v-flex xs1 sm1 order-xs1 py-2>
                    <i class="fas fa-map-marker-alt"></i>
                  </v-flex>
                  <v-flex xs11 sm5 order-xs2 pt-2 pl-1>
                    <span id="detail-scheme">Bakkeskolen</span>
                  </v-flex>
                  <v-flex xs1 sm1 order-xs3 py-2>
                    <i class="fas fa-clock"></i>
                  </v-flex>
                  <v-flex xs11 sm5 order-xs4 pt-2 pl-1>
                    <span id="detail-scheme">18.00 - 20.00</span>
                  </v-flex>
                </v-layout>
              </v-layout>
            </div>
          </v-flex>
          <v-flex xs12 order-xs3>
            <div>
              <v-layout justify-start column fill-height>
                <span id="event-name">Onsdag</span>
                <v-layout row wrap py-2>
                  <v-flex xs1 sm1 order-xs1 py-2>
                    <i class="fas fa-map-marker-alt"></i>
                  </v-flex>
                  <v-flex xs11 sm5 order-xs2 pl-1>
                    <span id="detail-scheme">Bakkeskolen</span>
                    <br>
                    <span id="detail-scheme">Kvaglundhallen</span>
                  </v-flex>
                  <v-flex xs1 sm1 order-xs3 py-2>
                    <i class="fas fa-clock"></i>
                  </v-flex>
                  <v-flex xs11 sm5 order-xs4 py-2 pl-1>
                    <span id="detail-scheme">18.00 - 20.00</span>
                  </v-flex>
                </v-layout>
              </v-layout>
            </div>
          </v-flex>
          <v-flex xs12 order-xs4>
            <div>
              <v-layout justify-start column fill-height>
                <span id="event-name">Torsdag</span>
                <v-layout row wrap py-2>
                  <v-flex xs1 sm1 order-xs1 py-2>
                    <i class="fas fa-map-marker-alt"></i>
                  </v-flex>
                  <v-flex xs11 sm5 order-xs2 pt-2 pl-1>
                    <span id="detail-scheme">Bakkeskolen</span>
                  </v-flex>
                  <v-flex xs1 sm1 order-xs3 py-2>
                    <i class="fas fa-clock"></i>
                  </v-flex>
                  <v-flex xs11 sm5 order-xs4 py-2 pl-1>
                    <span id="detail-scheme">18.00 - 20.00</span>
                  </v-flex>
                </v-layout>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs0 md5 lg6 order-sm3>
        <v-img :src="require('../assets/dark-logo.png')" contain height="600"></v-img>
      </v-flex>
      <v-flex order-sm4 px-5 pt-5>
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
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      dialog: false
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
#package-type {
  font-family: "roboto";
  font-weight: bold;
  font-size: 30px;
  color: white;
}
#price {
  font-family: "Anton", sans-serif;
  font-size: 50px;
  color: #1592e6;
  text-transform: uppercase;
}
#advantages {
  font-family: "roboto";
  font-weight: bold;
  color: white;
}

#overlaybox {
  background-color: rgba(44, 147, 198, 0.692);
  border-radius: 10px;
}

#event-name {
  font-family: "roboto";
  font-weight: bold;
  font-size: 40px;
  text-transform: uppercase;
  border-bottom: 2px solid white;
}

#detail {
  font-family: "Roboto";
  font-size: 17px;
  color: white;
  padding-top: 5px;
}
i {
  font-size: 26px;
  color: #1592e6;
}

#check-icon {
  font-size: 15px !important;
}
#detail-scheme {
  font-family: "Roboto";
  font-size: 16px;
  color: #1592e6;
  font-weight: bold;
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

.v-content {
  padding: 0px !important;
}
@media only screen and (max-width: 1264px) {
  #package-type {
    font-size: 18px;
  }
  #price {
    font-size: 35px;
  }
  #advantages {
    font-size: 11px;
  }
  #check-icon {
    font-size: 11px !important;
  }
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
  #text-regular {
    font-size: 12px;
  }
  #event-name {
    font-size: 25px;
  }
  #detail-scheme {
    font-size: 13px;
  }
  i {
    font-size: 20px;
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
