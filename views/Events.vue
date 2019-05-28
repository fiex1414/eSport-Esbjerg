<template>
  <v-container>
    <v-layout
      row
      wrap
      :class="{'pl-5 pt-5': $vuetify.breakpoint.mdAndUp, 'pt-5 ': $vuetify.breakpoint.xs}"
      style="background-image: linear-gradient(#00102B, #0e2752, #00102B);margin-bottom:1px;"
    >
      <div id="logo-background" style="width:100%;">
        <v-flex xs12 md8 lg6 order-sm1 px-5 pb-5 style="text-align:left;">
          <span id="overskrift-white">Events</span>
          <v-layout row wrap>
            <v-flex xs12 order-xs1 pt-3>
              <v-dialog id="dialog-box" v-model="event1" width="80%">
                <template v-slot:activator="{ on }">
                  <div id="bg-img">
                    <div id="overlaybox" class="fill-height">
                      <p v-on="on">
                        <v-layout id="box-padding" justify-start column fill-height pl-4 pr-4>
                          <span id="event-name">LAN - Esbjerg</span>

                          <v-layout
                            row
                            wrap
                            :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                          >
                            <v-flex
                              xs1
                              sm1
                              order-xs1
                              :class="{'pt-0': $vuetify.breakpoint.smAndUp, 'pt-1': $vuetify.breakpoint.xs}"
                            >
                              <v-layout :class="{'justify-center': $vuetify.breakpoint.xs}">
                                <span id="detail">
                                  <i class="fas fa-map-marker-alt"></i>
                                </span>
                              </v-layout>
                            </v-flex>
                            <v-flex
                              xs11
                              sm5
                              order-xs2
                              pl-1
                              :class="{'pt-1': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail">Esbjerg Bibliotek</span>
                            </v-flex>
                            <v-flex
                              xs1
                              sm1
                              order-xs3
                              :class="{'pt-0': $vuetify.breakpoint.smAndUp, 'pt-1': $vuetify.breakpoint.xs}"
                            >
                              <v-layout :class="{'justify-center': $vuetify.breakpoint.xs}">
                                <span id="detail">
                                  <i class="fas fa-clock"></i>
                                </span>
                              </v-layout>
                            </v-flex>
                            <v-flex
                              xs11
                              sm5
                              order-xs4
                              pl-1
                              :class="{'pt-1': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail">7/6-19 kl. 20.00</span>
                            </v-flex>
                          </v-layout>
                        </v-layout>
                      </p>
                    </div>
                  </div>
                </template>

                <v-card style="border-radius:20px;">
                  <v-layout
                    :class="{'row': $vuetify.breakpoint.smAndUp, 'column': $vuetify.breakpoint.xs}"
                    wrap
                  >
                    <v-flex id="dialog-blue-part" xs6>
                      <v-layout row wrap align-center>
                        <v-flex xs12 order-xs1>
                          <v-layout justify-end>
                            <v-btn
                              id="close-blue"
                              style="color:white;"
                              icon
                              dark
                              @click="event1 = false"
                            >
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialog-event-name">LAN</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs3
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <v-layout row wrap>
                            <v-flex xs1 order-xs1 py-2>
                              <i class="far fa-calendar-alt" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs2
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">7.- 8. juni 2019</span>
                            </v-flex>
                            <v-flex xs1 order-xs7 py-2>
                              <i class="fas fa-hand-holding-usd" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs8
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">100 kr.</span>
                            </v-flex>
                            <v-flex xs1 order-xs5 py-2>
                              <i class="fas fa-clock" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs6
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">20.00 - 10.00</span>
                            </v-flex>
                            <v-flex xs1 order-xs3 py-2>
                              <i class="fas fa-map-marker-alt" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs4
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">Nørregade 19, 6700 Esbjerg</span>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs4
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <v-layout
                            row
                            wrap
                            :class="{'pt-5': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                          >
                            <v-flex xs12>
                              <span id="share">Del</span>
                            </v-flex>

                            <v-flex
                              xs1
                              order-xs1
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a href="https://www.facebook.com/eSportEsbjerg/" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </v-flex>
                            <v-flex
                              pl-2
                              xs1
                              order-xs2
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a
                                href="https://www.instagram.com/esport_esbjerg/?hl=da"
                                target="_blank"
                              >
                                <i class="fab fa-instagram"></i>
                              </a>
                            </v-flex>
                            <v-flex
                              pl-4
                              xs1
                              order-xs3
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a href="https://twitter.com/esport_esbjerg" target="_blank">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row wrap>
                        <v-flex xs12 order-xs1>
                          <v-layout justify-end>
                            <v-btn
                              id="close-white"
                              style="color:#00102b;"
                              icon
                              dark
                              @click="event1 = false"
                            >
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          :class="{'pt-5 px-5': $vuetify.breakpoint.smAndUp, 'pt-1 px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialogheader">Beskrivelse</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs3
                          :class="{'px-5 py-3': $vuetify.breakpoint.smAndUp, 'px-4 py-2': $vuetify.breakpoint.xs}"
                        >
                          <span id="text-regular">
                            Endnu en gang åbner Esbjerg Bibliotek dørene op og inviterer til LAN-event i computerspillets tegn!
                            <br>
                            <br>Dørene vil blive åbnet d. 7. juni og bliver lukket igen d. 8. juni.
                            <br>
                            <br>Hvis du er medlem af eSport Esbjerg, kan du få billetten til medlemspris for kun 50 kr.
                          </span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs4
                          :class="{'px-5 ': $vuetify.breakpoint.smAndUp, 'px-4 ': $vuetify.breakpoint.xs}"
                        >
                          <v-layout row wrap justify-end>
                            <a
                              target="_blank"
                              href="https://www.place2book.com/da/choose_seating_sales_workflow?seccode=pd0alcr5iq&fbclid=IwAR0iK9FER0C-US_RkHCIQTPrrXbw24sMxRouScrtK8Z8Qi7YM9FNqcMzASo"
                            >
                              <v-btn
                                flat
                                style="background-color:#2C93C6;margin-left:0px !important;"
                              >
                                <span id="text-button">Køb billet</span>
                              </v-btn>
                            </a>
                            <router-link to="/regler" style="text-decoration:none;">
                              <v-btn
                                flat
                                style="background-color:#00102b;margin-left:0px !important;"
                              >
                                <span id="text-button">Regler</span>
                              </v-btn>
                            </router-link>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs6
                          px-5
                          :class="{'pt-5': $vuetify.breakpoint.smAndUp, 'pt-4': $vuetify.breakpoint.xs}"
                        >
                          <p id="sponsors">Sponsorer</p>
                        </v-flex>
                        <v-flex xs3 order-xs7 pl-5>
                          <v-img :src="require('../assets/hallen.png')" contain></v-img>
                        </v-flex>
                        <v-flex xs6 order-xs8 pt-1 px-1>
                          <v-img :src="require('../assets/cloud-factory-dark.png')" contain></v-img>
                        </v-flex>
                        <v-flex xs3 order-xs9 pr-5 pt-2>
                          <v-img :src="require('../assets/Stofa.png')" contain></v-img>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex xs12 order-xs2 pt-3>
              <v-dialog id="dialog-box" v-model="event2" width="80%">
                <template v-slot:activator="{ on }">
                  <div id="bg-img">
                    <div id="overlaybox" class="fill-height">
                      <p v-on="on">
                        <v-layout justify-start column fill-height pl-4 pr-4 id="box-padding">
                          <span id="event-name">LAN - Varde</span>
                          <v-layout
                            row
                            wrap
                            :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                          >
                            <v-flex
                              xs1
                              sm1
                              order-xs1
                              :class="{'pt-0': $vuetify.breakpoint.smAndUp, 'pt-1': $vuetify.breakpoint.xs}"
                            >
                              <v-layout :class="{'justify-center': $vuetify.breakpoint.xs}">
                                <span id="detail">
                                  <i class="fas fa-map-marker-alt"></i>
                                </span>
                              </v-layout>
                            </v-flex>
                            <v-flex
                              xs11
                              sm5
                              order-xs2
                              pl-1
                              :class="{'pt-1': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail">Varde Bibliotek</span>
                            </v-flex>
                            <v-flex
                              xs1
                              sm1
                              order-xs3
                              :class="{'pt-0': $vuetify.breakpoint.smAndUp, 'pt-1': $vuetify.breakpoint.xs}"
                            >
                              <v-layout :class="{'justify-center': $vuetify.breakpoint.xs}">
                                <span id="detail">
                                  <i class="fas fa-clock"></i>
                                </span>
                              </v-layout>
                            </v-flex>
                            <v-flex
                              xs11
                              sm5
                              order-xs4
                              pl-1
                              :class="{'pt-1': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail">9/1-19 kl. 18.00</span>
                            </v-flex>
                          </v-layout>
                        </v-layout>
                      </p>
                    </div>
                  </div>
                </template>

                <v-card style="border-radius:20px;">
                  <v-layout
                    :class="{'row': $vuetify.breakpoint.smAndUp, 'column': $vuetify.breakpoint.xs}"
                    wrap
                  >
                    <v-flex id="dialog-blue-part" xs6>
                      <v-layout row wrap align-center>
                        <v-flex xs12 order-xs1>
                          <v-layout justify-end>
                            <v-btn
                              id="close-blue"
                              style="color:white;"
                              icon
                              dark
                              @click="event2 = false"
                            >
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialog-event-name">LAN</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs3
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <v-layout row wrap>
                            <v-flex xs1 order-xs1 py-2>
                              <i class="far fa-calendar-alt" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs2
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">9.- 10. november 2019</span>
                            </v-flex>
                            <v-flex xs1 order-xs7 py-2>
                              <i class="fas fa-hand-holding-usd" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs8
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">100 kr.</span>
                            </v-flex>
                            <v-flex xs1 order-xs5 py-2>
                              <i class="fas fa-clock" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs6
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">18.00 - 08.00</span>
                            </v-flex>
                            <v-flex xs1 order-xs3 py-2>
                              <i class="fas fa-map-marker-alt" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs4
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">Rådhusstræde 2, 6800 Varde</span>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs4
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <v-layout
                            row
                            wrap
                            :class="{'pt-5': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                          >
                            <v-flex xs12>
                              <span id="share">Del</span>
                            </v-flex>

                            <v-flex
                              xs1
                              order-xs1
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a href="https://www.facebook.com/eSportEsbjerg/" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </v-flex>
                            <v-flex
                              pl-2
                              xs1
                              order-xs2
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a
                                href="https://www.instagram.com/esport_esbjerg/?hl=da"
                                target="_blank"
                              >
                                <i class="fab fa-instagram"></i>
                              </a>
                            </v-flex>
                            <v-flex
                              pl-4
                              xs1
                              order-xs3
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a href="https://twitter.com/esport_esbjerg" target="_blank">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row wrap>
                        <v-flex xs12 order-xs1>
                          <v-layout justify-end>
                            <v-btn
                              id="close-white"
                              style="color:#00102b;"
                              icon
                              dark
                              @click="event2 = false"
                            >
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          :class="{'pt-5 px-5': $vuetify.breakpoint.smAndUp, 'pt-1 px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialogheader">Beskrivelse</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs3
                          :class="{'px-5 py-3': $vuetify.breakpoint.smAndUp, 'px-4 py-2': $vuetify.breakpoint.xs}"
                        >
                          <span id="text-regular">
                            For første gang åbner Varde Bibliotek dørene op og tilbyder et LAN-event i computerspillets tegn!
                            <br>
                            <br>Dørene vil blive åbnet d. 9. november og bliver lukket igen d. 10. november.
                            <br>
                            <br>Hvis du er medlem af eSport Esbjerg, kan du få billetten til medlemspris for kun 50 kr.
                          </span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs4
                          :class="{'px-5 ': $vuetify.breakpoint.smAndUp, 'px-4 ': $vuetify.breakpoint.xs}"
                        >
                          <v-layout row wrap justify-end>
                            <a
                              target="_blank"
                              href="https://www.place2book.com/da/choose_seating_sales_workflow?seccode=pd0alcr5iq&fbclid=IwAR0iK9FER0C-US_RkHCIQTPrrXbw24sMxRouScrtK8Z8Qi7YM9FNqcMzASo"
                            >
                              <v-btn
                                flat
                                style="background-color:#2C93C6;margin-left:0px !important;"
                              >
                                <span id="text-button">Køb billet</span>
                              </v-btn>
                            </a>
                            <router-link to="/regler" style="text-decoration:none;">
                              <v-btn
                                flat
                                style="background-color:#00102b;margin-left:0px !important;"
                              >
                                <span id="text-button">Regler</span>
                              </v-btn>
                            </router-link>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs6
                          px-5
                          :class="{'pt-5': $vuetify.breakpoint.smAndUp, 'pt-4': $vuetify.breakpoint.xs}"
                        >
                          <p id="sponsors">Sponsorer</p>
                        </v-flex>
                        <v-flex xs3 order-xs7 pl-5>
                          <v-img :src="require('../assets/hallen.png')" contain></v-img>
                        </v-flex>
                        <v-flex xs6 order-xs8 pt-1 px-1>
                          <v-img :src="require('../assets/cloud-factory-dark.png')" contain></v-img>
                        </v-flex>
                        <v-flex xs3 order-xs9 pr-5 pt-2>
                          <v-img :src="require('../assets/Stofa.png')" contain></v-img>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex xs12 order-xs3 pt-3>
              <v-dialog id="dialog-box" v-model="event3" width="80%">
                <template v-slot:activator="{ on }">
                  <div id="bg-img">
                    <div id="overlaybox" class="fill-height">
                      <p v-on="on">
                        <v-layout justify-start column fill-height pl-4 pr-4 id="box-padding">
                          <span id="event-name">LAN - København</span>
                          <v-layout
                            row
                            wrap
                            :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                          >
                            <v-flex
                              xs1
                              sm1
                              order-xs1
                              :class="{'pt-0': $vuetify.breakpoint.smAndUp, 'pt-1': $vuetify.breakpoint.xs}"
                            >
                              <v-layout :class="{'justify-center': $vuetify.breakpoint.xs}">
                                <span id="detail">
                                  <i class="fas fa-map-marker-alt"></i>
                                </span>
                              </v-layout>
                            </v-flex>
                            <v-flex
                              xs11
                              sm5
                              order-xs2
                              pl-1
                              :class="{'pt-1': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail">Øksnehallen</span>
                            </v-flex>
                            <v-flex
                              xs1
                              sm1
                              order-xs3
                              :class="{'pt-0': $vuetify.breakpoint.smAndUp, 'pt-1': $vuetify.breakpoint.xs}"
                            >
                              <v-layout :class="{'justify-center': $vuetify.breakpoint.xs}">
                                <span id="detail">
                                  <i class="fas fa-clock"></i>
                                </span>
                              </v-layout>
                            </v-flex>
                            <v-flex
                              xs11
                              sm5
                              order-xs4
                              pl-1
                              :class="{'pt-1': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail">20/7-19 kl. 19.00</span>
                            </v-flex>
                          </v-layout>
                        </v-layout>
                      </p>
                    </div>
                  </div>
                </template>

                <v-card style="border-radius:20px;">
                  <v-layout
                    :class="{'row': $vuetify.breakpoint.smAndUp, 'column': $vuetify.breakpoint.xs}"
                    wrap
                  >
                    <v-flex id="dialog-blue-part" xs6>
                      <v-layout row wrap align-center>
                        <v-flex xs12 order-xs1>
                          <v-layout justify-end>
                            <v-btn
                              id="close-blue"
                              style="color:white;"
                              icon
                              dark
                              @click="event3 = false"
                            >
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialog-event-name">LAN</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs3
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <v-layout row wrap>
                            <v-flex xs1 order-xs1 py-2>
                              <i class="far fa-calendar-alt" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs2
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">20.- 21. juli 2019</span>
                            </v-flex>
                            <v-flex xs1 order-xs7 py-2>
                              <i class="fas fa-hand-holding-usd" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs8
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">100 kr.</span>
                            </v-flex>
                            <v-flex xs1 order-xs5 py-2>
                              <i class="fas fa-clock" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs6
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">19.00 - 09.00</span>
                            </v-flex>
                            <v-flex xs1 order-xs3 py-2>
                              <i class="fas fa-map-marker-alt" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs4
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">Halmtorvet 11, 1700 København</span>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs4
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <v-layout
                            row
                            wrap
                            :class="{'pt-5': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                          >
                            <v-flex xs12>
                              <span id="share">Del</span>
                            </v-flex>

                            <v-flex
                              xs1
                              order-xs1
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a href="https://www.facebook.com/eSportEsbjerg/" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </v-flex>
                            <v-flex
                              pl-2
                              xs1
                              order-xs2
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a
                                href="https://www.instagram.com/esport_esbjerg/?hl=da"
                                target="_blank"
                              >
                                <i class="fab fa-instagram"></i>
                              </a>
                            </v-flex>
                            <v-flex
                              pl-4
                              xs1
                              order-xs3
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a href="https://twitter.com/esport_esbjerg" target="_blank">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row wrap>
                        <v-flex xs12 order-xs1>
                          <v-layout justify-end>
                            <v-btn
                              id="close-white"
                              style="color:#00102b;"
                              icon
                              dark
                              @click="event3 = false"
                            >
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          :class="{'pt-5 px-5': $vuetify.breakpoint.smAndUp, 'pt-1 px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialogheader">Beskrivelse</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs3
                          :class="{'px-5 py-3': $vuetify.breakpoint.smAndUp, 'px-4 py-2': $vuetify.breakpoint.xs}"
                        >
                          <span id="text-regular">
                            Endnu en gang vil Øksnehallen åbne dørene op og tilbyde et nyt LAN-event i computerspillets tegn!
                            <br>
                            <br>Dørene vil blive åbnet d. 20. juli og bliver lukket igen d. 21. juli.
                            <br>
                            <br>Hvis du er medlem af eSport Esbjerg, kan du få billetten til medlemspris for kun 50 kr.
                          </span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs4
                          :class="{'px-5 ': $vuetify.breakpoint.smAndUp, 'px-4 ': $vuetify.breakpoint.xs}"
                        >
                          <v-layout row wrap justify-end>
                            <a
                              target="_blank"
                              href="https://www.place2book.com/da/choose_seating_sales_workflow?seccode=pd0alcr5iq&fbclid=IwAR0iK9FER0C-US_RkHCIQTPrrXbw24sMxRouScrtK8Z8Qi7YM9FNqcMzASo"
                            >
                              <v-btn
                                flat
                                style="background-color:#2C93C6;margin-left:0px !important;"
                              >
                                <span id="text-button">Køb billet</span>
                              </v-btn>
                            </a>
                            <router-link to="/regler" style="text-decoration:none;">
                              <v-btn
                                flat
                                style="background-color:#00102b;margin-left:0px !important;"
                              >
                                <span id="text-button">Regler</span>
                              </v-btn>
                            </router-link>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs6
                          px-5
                          :class="{'pt-5': $vuetify.breakpoint.smAndUp, 'pt-4': $vuetify.breakpoint.xs}"
                        >
                          <p id="sponsors">Sponsorer</p>
                        </v-flex>
                        <v-flex xs3 order-xs7 pl-5>
                          <v-img :src="require('../assets/hallen.png')" contain></v-img>
                        </v-flex>
                        <v-flex xs6 order-xs8 pt-1 px-1>
                          <v-img :src="require('../assets/cloud-factory-dark.png')" contain></v-img>
                        </v-flex>
                        <v-flex xs3 order-xs9 pr-5 pt-2>
                          <v-img :src="require('../assets/Stofa.png')" contain></v-img>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-dialog>
            </v-flex>

            <v-flex xs12 order-xs4 pt-3>
              <v-dialog id="dialog-box" v-model="event4" width="80%">
                <template v-slot:activator="{ on }">
                  <div id="bg-img">
                    <div id="overlaybox" class="fill-height">
                      <p v-on="on">
                        <v-layout justify-start column fill-height pl-4 pr-4 id="box-padding">
                          <span id="event-name">ESL</span>
                          <v-layout
                            row
                            wrap
                            :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                          >
                            <v-flex
                              xs1
                              sm1
                              order-xs1
                              :class="{'pt-0': $vuetify.breakpoint.smAndUp, 'pt-1': $vuetify.breakpoint.xs}"
                            >
                              <v-layout :class="{'justify-center': $vuetify.breakpoint.xs}">
                                <span id="detail">
                                  <i class="fas fa-map-marker-alt"></i>
                                </span>
                              </v-layout>
                            </v-flex>
                            <v-flex
                              xs11
                              sm5
                              order-xs2
                              pl-1
                              :class="{'pt-1': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail">Kvaglundhallen</span>
                            </v-flex>
                            <v-flex
                              xs1
                              sm1
                              order-xs3
                              :class="{'pt-0': $vuetify.breakpoint.smAndUp, 'pt-1': $vuetify.breakpoint.xs}"
                            >
                              <v-layout :class="{'justify-center': $vuetify.breakpoint.xs}">
                                <span id="detail">
                                  <i class="fas fa-clock"></i>
                                </span>
                              </v-layout>
                            </v-flex>
                            <v-flex
                              xs11
                              sm5
                              order-xs4
                              pl-1
                              :class="{'pt-1': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail">6/9-19 kl. 00.00</span>
                            </v-flex>
                          </v-layout>
                        </v-layout>
                      </p>
                    </div>
                  </div>
                </template>

                <v-card style="border-radius:20px;">
                  <v-layout
                    :class="{'row': $vuetify.breakpoint.smAndUp, 'column': $vuetify.breakpoint.xs}"
                    wrap
                  >
                    <v-flex id="dialog-blue-part" xs6>
                      <v-layout row wrap align-center>
                        <v-flex xs12 order-xs1>
                          <v-layout justify-end>
                            <v-btn
                              id="close-blue"
                              style="color:white;"
                              icon
                              dark
                              @click="event4 = false"
                            >
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialog-event-name">ESL FALL</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs3
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <v-layout row wrap>
                            <v-flex xs1 order-xs1 py-2>
                              <i class="far fa-calendar-alt" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs2
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">6.- 8. september 2019</span>
                            </v-flex>
                            <v-flex xs1 order-xs7 py-2>
                              <i class="fas fa-hand-holding-usd" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs8
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">200 kr.</span>
                            </v-flex>
                            <v-flex xs1 order-xs5 py-2>
                              <i class="fas fa-clock" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs6
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">00.00 - 00.00</span>
                            </v-flex>
                            <v-flex xs1 order-xs3 py-2>
                              <i class="fas fa-map-marker-alt" style="color:#2c93c6;"></i>
                            </v-flex>
                            <v-flex
                              xs11
                              order-xs4
                              py-2
                              :class="{'pl-1': $vuetify.breakpoint.smAndUp, 'pl-3': $vuetify.breakpoint.xs}"
                            >
                              <span id="detail-dialog">Strandbyvej 122, 6705 Esbjerg</span>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs4
                          :class="{'px-5': $vuetify.breakpoint.smAndUp, 'px-4': $vuetify.breakpoint.xs}"
                        >
                          <v-layout
                            row
                            wrap
                            :class="{'pt-5': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                          >
                            <v-flex xs12>
                              <span id="share">Del</span>
                            </v-flex>

                            <v-flex
                              xs1
                              order-xs1
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a href="https://www.facebook.com/eSportEsbjerg/" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </v-flex>
                            <v-flex
                              pl-2
                              xs1
                              order-xs2
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a
                                href="https://www.instagram.com/esport_esbjerg/?hl=da"
                                target="_blank"
                              >
                                <i class="fab fa-instagram"></i>
                              </a>
                            </v-flex>
                            <v-flex
                              pl-4
                              xs1
                              order-xs3
                              :class="{'pt-3': $vuetify.breakpoint.smAndUp, 'pt-2': $vuetify.breakpoint.xs}"
                            >
                              <a href="https://twitter.com/esport_esbjerg" target="_blank">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row wrap>
                        <v-flex xs12 order-xs1>
                          <v-layout justify-end>
                            <v-btn
                              id="close-white"
                              style="color:#00102b;"
                              icon
                              dark
                              @click="event4 = false"
                            >
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs2
                          :class="{'pt-5 px-5': $vuetify.breakpoint.smAndUp, 'pt-1 px-4': $vuetify.breakpoint.xs}"
                        >
                          <span id="dialogheader">Beskrivelse</span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs3
                          :class="{'px-5 py-3': $vuetify.breakpoint.smAndUp, 'px-4 py-2': $vuetify.breakpoint.xs}"
                        >
                          <span id="text-regular">
                            Endnu en gang vil ELS åbne dørene op for Kvaglundhallen og tilbyde vores fantastiske deltagere en mulighed for en ekstraordinær weekend i computerspillets tegn!
                            <br>
                            <br>Dørene vil blive åbnet d. 6. september og bliver lukket igen d. 8. september.
                            Hvis du er hurtigt ude af starthullerne, kan du få billetterne til Earlybird-pris for kun 150 kr.
                          </span>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs4
                          :class="{'px-5 ': $vuetify.breakpoint.smAndUp, 'px-4 ': $vuetify.breakpoint.xs}"
                        >
                          <v-layout row wrap justify-end>
                            <a
                              target="_blank"
                              href="https://www.place2book.com/da/choose_seating_sales_workflow?seccode=pd0alcr5iq&fbclid=IwAR0iK9FER0C-US_RkHCIQTPrrXbw24sMxRouScrtK8Z8Qi7YM9FNqcMzASo"
                            >
                              <v-btn
                                flat
                                style="background-color:#2C93C6;margin-left:0px !important;"
                              >
                                <span id="text-button">Køb billet</span>
                              </v-btn>
                            </a>
                            <router-link to="/regler" style="text-decoration:none;">
                              <v-btn
                                flat
                                style="background-color:#00102b;margin-left:0px !important;"
                              >
                                <span id="text-button">Regler</span>
                              </v-btn>
                            </router-link>
                          </v-layout>
                        </v-flex>
                        <v-flex
                          xs12
                          order-xs6
                          px-5
                          :class="{'pt-5': $vuetify.breakpoint.smAndUp, 'pt-4': $vuetify.breakpoint.xs}"
                        >
                          <p id="sponsors">Sponsorer</p>
                        </v-flex>
                        <v-flex xs3 order-xs7 pl-5>
                          <v-img :src="require('../assets/hallen.png')" contain></v-img>
                        </v-flex>
                        <v-flex xs6 order-xs8 pt-1 px-1>
                          <v-img :src="require('../assets/cloud-factory-dark.png')" contain></v-img>
                        </v-flex>
                        <v-flex xs3 order-xs9 pr-5 pt-2>
                          <v-img :src="require('../assets/Stofa.png')" contain></v-img>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs0 md4 lg6 order-sm2>
          <!--  <v-img :src="require('../assets/dark-logo.png')" contain height="600"></v-img> -->
        </v-flex>
      </div>
    </v-layout>
  </v-container>
</template>

<script>


export default {
  data: () => ({
    event1: false,
    event2: false,
    event3: false,
    event4: false
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

#bg-img {
  background-image: url("../assets/lan.jpg");
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
}
#logo-background {
  background-image: url("../assets/half-logo.png");
  background-size: contain;
  background-position-x: right;
  background-repeat: no-repeat;
}
#overlaybox {
  background-color: rgba(44, 147, 198, 0.692);
  border-radius: 10px;
}
#box-padding {
  padding-top: 100px;
}

#event-name {
  font-family: "Anton", sans-serif;
  font-size: 40px;
  border-bottom: 2px solid white;
}
#dialog-event-name {
  font-family: "Anton", sans-serif;
  font-size: 80px;
  border-bottom: 2px solid white;
}

#detail {
  font-family: "Roboto";
  font-size: 17px;
  color: white;
  padding-top: 5px;
}
#dialog-blue-part {
  background-color: #00102b;
  border-radius: 20px 0px 0px 20px;
}
#share {
  font-family: "Anton", sans-serif;
  font-size: 20px;
}
#dialogheader {
  text-transform: uppercase;
  font-family: "Anton", sans-serif !important;
  color: #00102b;
  font-size: 25px;
}
#sponsors {
  text-transform: uppercase;
  font-family: "Anton", sans-serif !important;
  color: #00102b;
  font-size: 15px;
}
i {
  font-size: 25px;
  color: white;
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
#close-white {
  visibility: visible;
}
#close-blue {
  visibility: hidden;
}
#text-button {
  font-family: "roboto";
}
.v-content {
  padding: 0px !important;
}

@media only screen and (max-width: 600px) {
  #box-padding {
    padding-top: 80px;
  }
  #event-name {
    font-size: 24px;
  }
  #detail {
    font-size: 13px;
  }
  #dialog-blue-part {
    border-radius: 20px 20px 0px 0px;
    padding-bottom: 20px;
  }
  #dialog-event-name {
    font-size: 40px;
  }
  #close-white {
    visibility: hidden;
  }
  #close-blue {
    visibility: visible;
  }
  i {
    font-size: 20px;
  }
  #detail-dialog {
    font-size: 14px;
  }
  #share {
    font-size: 17px;
  }
  #dialogheader {
    font-size: 22px;
  }
  #overskrift-white {
    font-size: 45px;
  }
  #text-regular {
    font-size: 12px;
  }
}
@media only screen and (max-width: 850px) {
  #overskrift-white {
    font-size: 60px;
  }
}
</style>
