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
          <span id="overskrift-white">Galleri</span>
          <v-layout row wrap>
            <v-flex xs12 sm4 md6 order-xs1 pa-3>
              <v-dialog v-model="dialog" width="900">
                <template v-slot:activator="{ on }">
                  <p v-on="on">
                    <v-img
                      :src="require('../assets/elp/4.jpg')"
                      aspect-ratio="1"
                      style="border-radius:10px;"
                    >
                      <v-layout align-end fill-height>
                        <v-flex id="overlaybox">
                          <v-layout row wrap>
                            <v-flex xs10 order-xs1 pt-3 pl-3>
                              <p id="event-title">ELP 2019</p>
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

                <v-card>
                  <v-carousel>
                    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex xs12 sm4 md6 order-xs2 pa-3>
              <v-dialog v-model="dialog2" width="900">
                <template v-slot:activator="{ on }">
                  <p v-on="on">
                    <v-img
                      src="https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/41673934_2024896631104206_3056124287736872960_n.jpg?_nc_cat=106&_nc_ht=scontent.faar2-1.fna&oh=69052ae76eb6626060a72292030329d8&oe=5D9CE137"
                      aspect-ratio="1"
                      style="border-radius:10px;"
                    >
                      <v-layout align-end fill-height>
                        <v-flex id="overlaybox">
                          <v-layout row wrap>
                            <v-flex xs10 order-xs1 pt-3 pl-3>
                              <p id="event-title">Træning 9/4-19</p>
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
                <v-card>
                  <v-carousel>
                    <v-carousel-item v-for="(item,i) in items2" :key="i" :src="item.src"></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex xs12 sm4 md6 order-xs3 pa-3>
              <v-dialog v-model="dialog3" width="900">
                <template v-slot:activator="{ on }">
                  <p v-on="on">
                    <v-img
                      src="https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/35758849_1948305242096679_8689789124183326720_n.jpg?_nc_cat=100&_nc_ht=scontent.faar2-1.fna&oh=a69bd68da848c069fbbdc40423f1df79&oe=5D96B9B5"
                      aspect-ratio="1"
                      style="border-radius:10px;"
                    >
                      <v-layout align-end fill-height>
                        <v-flex id="overlaybox">
                          <v-layout row wrap>
                            <v-flex xs10 order-xs1 pt-3 pl-3>
                              <p id="event-title">LAN 13/11-18</p>
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
                <v-card>
                  <v-carousel>
                    <v-carousel-item v-for="(item,i) in items3" :key="i" :src="item.src"></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex xs12 sm4 md6 order-xs4 pa-3>
              <v-dialog v-model="dialog4" width="900">
                <template v-slot:activator="{ on }">
                  <p v-on="on">
                    <v-img
                      src="https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/47574709_2071686453091890_718638055430291456_n.jpg?_nc_cat=101&_nc_ht=scontent.faar2-1.fna&oh=a1c9508fb45dfbb616cce78640554977&oe=5D648C92"
                      aspect-ratio="1"
                      style="border-radius:10px;"
                    >
                      <v-layout align-end fill-height>
                        <v-flex id="overlaybox">
                          <v-layout row wrap>
                            <v-flex xs10 order-xs1 pt-3 pl-3>
                              <p id="event-title">Kvaglund</p>
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
                <v-card>
                  <v-carousel>
                    <v-carousel-item v-for="(item,i) in items4" :key="i" :src="item.src"></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex xs12 sm4 md6 order-xs5 pa-3>
              <v-dialog v-model="dialog5" width="900">
                <template v-slot:activator="{ on }">
                  <p v-on="on">
                    <v-img
                      src="https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/27657874_1883088725284998_3342084710116066532_n.jpg?_nc_cat=104&_nc_ht=scontent.faar2-1.fna&oh=59c11ee53035ba9bc85b792a258d1877&oe=5D51DB1F"
                      aspect-ratio="1"
                      style="border-radius:10px;"
                    >
                      <v-layout align-end fill-height>
                        <v-flex id="overlaybox">
                          <v-layout row wrap>
                            <v-flex xs10 order-xs1 pt-3 pl-3>
                              <p id="event-title">Træning 9/5-19</p>
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
                <v-card>
                  <v-carousel>
                    <v-carousel-item v-for="(item,i) in items5" :key="i" :src="item.src"></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-dialog>
            </v-flex>
            <v-flex xs12 sm4 md6 order-xs6 pa-3>
              <v-dialog v-model="dialog6" width="900">
                <template v-slot:activator="{ on }">
                  <p v-on="on">
                    <v-img
                      src="https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/54515659_2131107773816424_2207611579531264000_n.jpg?_nc_cat=110&_nc_ht=scontent.faar2-1.fna&oh=a494dc31e57a55223bb16a88b9b1449d&oe=5D9F7447"
                      aspect-ratio="1"
                      style="border-radius:10px;"
                    >
                      <v-layout align-end fill-height>
                        <v-flex id="overlaybox">
                          <v-layout row wrap>
                            <v-flex xs10 order-xs1 pt-3 pl-3>
                              <p id="event-title">LAN 16/2-19</p>
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
                <v-card>
                  <v-carousel>
                    <v-carousel-item v-for="(item,i) in items6" :key="i" :src="item.src"></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs0 md4 lg6 order-sm2>
          <!-- <v-img :src="require('../assets/dark-logo.png')" contain height="600"></v-img> -->
        </v-flex>
      </div>
    </v-layout>

  </v-container>
</template>

<script>

export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/elp/2.jpg")
        },
        {
          src: require("../assets/elp/3.jpg")
        },
        {
          src: require("../assets/elp/4.jpg")
        },
        {
          src: require("../assets/elp/5.jpg")
        },
        {
          src: require("../assets/elp/6.jpg")
        },
        {
          src: require("../assets/elp/8.jpg")
        },
        {
          src: require("../assets/elp/10.jpg")
        },
        {
          src: require("../assets/elp/11.jpg")
        }
      ],
      items2: [
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/41673934_2024896631104206_3056124287736872960_n.jpg?_nc_cat=106&_nc_ht=scontent.faar2-1.fna&oh=69052ae76eb6626060a72292030329d8&oe=5D9CE137"
        },
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/41677482_2024897661104103_5119306210276802560_n.jpg?_nc_cat=111&_nc_ht=scontent.faar2-1.fna&oh=1e1917a682c86be2c233d94300b05ffb&oe=5D5F3CF6"
        },
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/41611858_2024898247770711_6246748856487247872_n.jpg?_nc_cat=111&_nc_ht=scontent.faar2-1.fna&oh=0352737d2c39267dd6e60198c7a6bb42&oe=5D94845C"
        }
      ],
      items3: [
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/35758849_1948305242096679_8689789124183326720_n.jpg?_nc_cat=100&_nc_ht=scontent.faar2-1.fna&oh=a69bd68da848c069fbbdc40423f1df79&oe=5D96B9B5"
        },
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/35657278_1948305278763342_1738526499981492224_n.jpg?_nc_cat=104&_nc_ht=scontent.faar2-1.fna&oh=093211c2ebc78fd1452c678fc291281d&oe=5D9AE50C"
        },
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/35734902_1948305202096683_5949148004156964864_n.jpg?_nc_cat=104&_nc_ht=scontent.faar2-1.fna&oh=0eb4a1e6ed3082934cca04ceeebbe8f0&oe=5D5BF93D"
        }
      ],
      items4: [
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/47574709_2071686453091890_718638055430291456_n.jpg?_nc_cat=101&_nc_ht=scontent.faar2-1.fna&oh=a1c9508fb45dfbb616cce78640554977&oe=5D648C92"
        },
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/48277512_2071686433091892_5635431571243663360_n.jpg?_nc_cat=104&_nc_ht=scontent.faar2-1.fna&oh=41806be0e2196fb88d04746e01550411&oe=5D5EE853"
        }
      ],
      items5: [
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/27657874_1883088725284998_3342084710116066532_n.jpg?_nc_cat=104&_nc_ht=scontent.faar2-1.fna&oh=59c11ee53035ba9bc85b792a258d1877&oe=5D51DB1F"
        },
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/27540726_1883088768618327_8859606564775063292_n.jpg?_nc_cat=108&_nc_ht=scontent.faar2-1.fna&oh=d42f888d686bc3bbf733eec5f99aae62&oe=5D5369B2"
        },
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/27750110_1883088675285003_8398944432301978199_n.jpg?_nc_cat=111&_nc_ht=scontent.faar2-1.fna&oh=9211e722ebd3f0a29017461564bc56d9&oe=5D6839EA"
        }
      ],
      items6: [
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/54515659_2131107773816424_2207611579531264000_n.jpg?_nc_cat=110&_nc_ht=scontent.faar2-1.fna&oh=a494dc31e57a55223bb16a88b9b1449d&oe=5D9F7447"
        },
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/17862672_1748671278726744_9128609921383510065_n.jpg?_nc_cat=105&_nc_ht=scontent.faar2-1.fna&oh=71949ba849721dbdbff6e2e5e58de9c4&oe=5D5D574E"
        },
        {
          src:
            "https://scontent.faar2-1.fna.fbcdn.net/v/t1.0-9/17759706_1748671338726738_6379807829982651882_n.jpg?_nc_cat=111&_nc_ht=scontent.faar2-1.fna&oh=eb954fc276fa458775383d128b830252&oe=5D5A0A5F"
        }
      ]
    };
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
  font-family: "impact";
  color: white;
}

#event-title {
  color: white;
  font-family: "impact";
  font-size: 25px;
}

#text-button {
  font-family: "roboto";
}
#overlaybox {
  background-color: #131723c9;
  border-radius: 0px 0px 10px 10px;
}
.v-content {
  padding: 0px !important;
}
@media only screen and (max-width: 900px) {
  #event-title {
    font-size: 20px;
  }
}
@media only screen and (max-width: 850px) {
  #overskrift-white {
    font-size: 60px;
  }
}
@media only screen and (max-width: 750px) {
  #event-title {
    font-size: 17px;
  }
}
@media only screen and (max-width: 670px) {
  #event-title {
    font-size: 14px;
  }
}
@media only screen and (max-width: 600px) {
  #overskrift-white {
    font-size: 45px;
  }
  #event-title {
    font-size: 25px;
  }
}
@media only screen and (max-width: 400px) {
  #event-title {
    font-size: 20px;
  }
}
</style>
