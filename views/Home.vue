<template>
  <v-container>
    <v-layout
      row
      wrap
      justify-center
      pa-5
      align-center
      style="background-image: linear-gradient(#00102B, #2C93C6);"
    >
      <v-flex id="text-box" xs12 md6 order-sm1 :class="{'pl-5': $vuetify.breakpoint.lgAndUp}">
        <span id="overskrift-white">Team</span>
        <span id="overskrift-blue">play</span>
        <br>
        <span id="text-regular">
          Kom og vær en del af en forening med plads
          til alle, der har interesse for gaming! Vi udvikler både kompetencer, men vi har også stor fokus på at skabe samvær og gode oplevelser.
        </span>
        <br>
        <br>
        <span id="text-bold">Så kom og vær en del af fællesskabet!</span>
        <v-layout justify-end>
          <router-link to="/tilmelding" style="text-decoration:none;">
            <v-btn flat style="background-color:#2C93C6;">
              <span id="text-button">Tilmeld</span>
            </v-btn>
          </router-link>
        </v-layout>
      </v-flex>
      <v-flex xs0 md6 order-sm2>
        <v-img :src="require('../assets/logo.png')" contain height="500"></v-img>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      :class="{'pa-5': $vuetify.breakpoint.mdAndUp, 'pa-4': $vuetify.breakpoint.smAndDown}"
    >
      <v-flex
        xs12
        sm6
        order-sm1
        :class="{'pr-4': $vuetify.breakpoint.mdAndUp, 'pr-2': $vuetify.breakpoint.sm, 'pr-0': $vuetify.breakpoint.xs}"
      >
        <router-link to="/nyheder" style="text-decoration:none;">
          <v-card id="nyheder">
            <div id="overlay">
              <div id="box-border">
                <div>
                  <v-flex pl-4>
                    <v-card-title primary-title>
                      <span id="newsevents-white">ny</span>
                      <span id="newsevents-blue">heder</span>
                    </v-card-title>
                  </v-flex>
                  <v-layout row wrap>
                    <v-flex xs8 lg6 pl-4 pb-3 order-xs1>
                      <v-card-text>
                        <span id="text-regular">
                          Læs om de nyeste
                          trends og opdateringer
                          hos eSport Esbjerg…
                        </span>
                      </v-card-text>
                    </v-flex>
                    <v-flex xs4 lg6 order-xs2>
                      <v-layout justify-end pr-4 pt-4>
                        <i class="fas fa-chevron-right" style="color:white;font-size:40px;"></i>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </div>
              </div>
            </div>
          </v-card>
        </router-link>
      </v-flex>
      <v-flex
        xs12
        sm6
        order-sm2
        :class="{'pl-4': $vuetify.breakpoint.mdAndUp, 'pl-2': $vuetify.breakpoint.sm, 'pl-0 pt-4': $vuetify.breakpoint.xs}"
      >
        <router-link to="/events" style="text-decoration:none;">
          <v-card id="events">
            <div id="overlay">
              <div id="box-border">
                <div>
                  <v-flex pl-4>
                    <v-card-title primary-title>
                      <span id="newsevents-white">Events</span>
                    </v-card-title>
                  </v-flex>
                  <v-layout row wrap>
                    <v-flex xs8 lg6 pl-4 pb-3 order-xs1>
                      <v-card-text>
                        <span
                          id="text-regular"
                        >Læs om de kommende fede events og tilmeld dig eller dit barn…</span>
                      </v-card-text>
                    </v-flex>
                    <v-flex xs4 lg6 order-xs2>
                      <v-layout justify-end pr-4 pt-4>
                        <i class="fas fa-chevron-right" style="color:white;font-size:40px;"></i>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </div>
              </div>
            </div>
          </v-card>
        </router-link>
      </v-flex>
    </v-layout>

    <v-layout id="video-section" px-5 pt-3 row wrap>
      <v-flex xs12 order-xs1>
        <span id="video-header-white">Fælles</span>
        <span id="video-header-blue">skab</span>
      </v-flex>

      <v-flex xs12 order-xs2 pb-5>
        <iframe
          id="video-size"
          src="https://www.youtube.com/embed/fEEfQCbJ4r0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-flex>
    </v-layout>

    <router-link to="/omos" style="text-decoration:none;">
      <v-layout style="padding-bottom:0px;"
        row
        wrap
        justify-center
        :class="{'pa-5': $vuetify.breakpoint.mdAndUp, 'pa-3': $vuetify.breakpoint.mdAndDown}"
      >
        <v-flex
          xs12
          sm4
          order-xs1
          style="cursor:pointer;"
          :class="{'pa-5': $vuetify.breakpoint.mdAndUp, 'px-5 pt-4': $vuetify.breakpoint.smAndDown}"
        >
          <v-img :src="require('../assets/parents.svg')" contain height="200"></v-img>
          <br>
          <p class="text-xs-center" id="icon-header">Til forældre</p>
        </v-flex>
        <v-flex
          xs12
          sm4
          order-xs2
          style="cursor:pointer;"
          :class="{'pa-5': $vuetify.breakpoint.mdAndUp, 'px-5 pt-4': $vuetify.breakpoint.smAndDown}"
        >
          <v-img :src="require('../assets/headphones-full.svg')" contain height="200"></v-img>
          <br>
          <p class="text-xs-center" id="icon-header">Spil</p>
        </v-flex>

        <v-flex
          xs12
          sm4
          order-xs3
          style="cursor:pointer;"
          :class="{'pa-5': $vuetify.breakpoint.mdAndUp, 'px-5 pt-4': $vuetify.breakpoint.smAndDown}"
        >
          <v-img :src="require('../assets/users.svg')" contain height="200"></v-img>
          <br>
          <p class="text-xs-center" id="icon-header">Til deltagere</p>
        </v-flex>
      </v-layout >
    </router-link>
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
#text-box {
  padding-right: 50px;
}

#overskrift-white {
  font-size: 100px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: white;
}
#overskrift-blue {
  font-size: 100px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: #00102b;
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
#nyheder {
  background-image: url("../assets/keyboard.jpg");
  background-size: cover;
  border-radius: 10px;
}
#events {
  background-image: url("../assets/mouse.jpg");
  background-size: cover;
  border-radius: 10px;
}
#newsevents-white {
  font-size: 50px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: white;
}
#newsevents-blue {
  font-size: 50px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: #145b86;
}
#video-header-white {
  font-size: 80px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: white;
}
#video-header-blue {
  font-size: 80px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
  color: #145b86;
}
#video-size {
  width: 711px;
  height: 400px;
}
#box-border {
  border: 20px solid rgba(0, 0, 0, 0);
  border-radius: 25px;
  box-shadow: inset 0px 0px 0px 2px white;
  box-sizing: border-box;
}
#overlay {
  background-color: #131723c9;
}
#video-section {
  background-color: #00102b;
}
#icon-header {
  font-size: 30px;
  color: #145b86;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
}
@media only screen and (max-width: 850px) {
  #video-header-white {
    font-size: 60px;
  }
  #video-header-blue {
    font-size: 60px;
  }
}
@media only screen and (max-width: 840px) {
  #icon-header {
    font-size: 25px;
  }
  #video-size {
    width: 500px;
    height: 281px;
  }
}
@media only screen and (max-width: 750px) {
  #icon-header {
    font-size: 20px;
  }
}
@media only screen and (max-width: 700px) {
  #newsevents-white {
    font-size: 35px;
  }
  #newsevents-blue {
    font-size: 35px;
  }
}
@media only screen and (max-width: 665px) {
  #icon-header {
    font-size: 15px;
  }
}
@media only screen and (max-width: 620px) {
  #video-size {
    width: 380px;
    height: 214px;
  }
}
@media only screen and (max-width: 600px) {
  #newsevents-white {
    font-size: 45px;
  }
  #newsevents-blue {
    font-size: 45px;
  }
  #icon-header {
    font-size: 25px;
  }
  #video-header-white {
    font-size: 45px;
  }
  #video-header-blue {
    font-size: 45px;
  }
  #text-regular {
    font-size: 12px;
  }
}
@media only screen and (max-width: 560px) {
  #text-box {
    padding-right: 0px;
  }
  #overskrift-white {
    font-size: 80px;
  }
  #overskrift-blue {
    font-size: 80px;
  }
}
@media only screen and (max-width: 500px) {
  #video-size {
    width: 300px;
    height: 169px;
  }
}

@media only screen and (max-width: 425px) {
  #overskrift-white {
    font-size: 60px;
  }
  #overskrift-blue {
    font-size: 60px;
  }
}
@media only screen and (max-width: 415px) {
  #video-size {
    width: 220px;
    height: 120px;
  }
}
@media only screen and (max-width: 352px) {
  #overskrift-white {
    font-size: 50px;
  }
  #overskrift-blue {
    font-size: 50px;
  }
}
</style>
