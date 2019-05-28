<template>
  <v-app>
    <v-toolbar app style="background-color: #00102B;box-shadow:none;">
      <v-toolbar-title>
        <router-link to="/" style="text-decoration:none;">
          <img src="./assets/logo.png" style="height:75px;margin-top:30px;margin-right:25px;">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="font-weight-light">
        <router-link to="/omos" style="text-decoration:none;">
          <v-btn id="menu-button" class="hidden-sm-and-down" flat>
            <span>Om os</span>
          </v-btn>
        </router-link>
        <router-link to="/events" style="text-decoration:none;">
          <v-btn id="menu-button" class="hidden-sm-and-down" flat>
            <span>Events</span>
          </v-btn>
        </router-link>
        <router-link to="/galleri" style="text-decoration:none;">
          <v-btn id="menu-button" class="hidden-sm-and-down" flat>
            <span>Galleri</span>
          </v-btn>
        </router-link>
        <router-link to="/medlemsskab" style="text-decoration:none;">
          <v-btn id="menu-button" class="hidden-sm-and-down" flat>
            <span>Medlemskab</span>
          </v-btn>
        </router-link>
        <router-link to="/tilmelding" style="text-decoration:none;">
          <v-btn id="signup-button" class="hidden-sm-and-down" flat>
            <span>Tilmeld</span>
          </v-btn>
        </router-link>
      </span>

      <v-container class="hidden-md-and-up">
        <v-layout justify-end>
          <p @click.stop="drawer = !drawer">
            <i style="color:white;cursor:pointer;font-size:25px;" class="fas fa-bars"></i>
          </p>
        </v-layout>
      </v-container>
    </v-toolbar>
    <v-layout wrap>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        right
        temporary
        style="background-color:#00102B; position:fixed"
      >
        <v-list
          id="list-styling"
          class="pa-1"
          style="border-bottom:1px solid rgba(255, 255, 255, 0.459);"
        >
          <router-link to="/omos" style="text-decoration:none;">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span>Om os</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>

        <v-list
          id="list-styling"
          class="pa-1"
          style="border-bottom:1px solid rgba(255, 255, 255, 0.459);"
        >
          <router-link to="/events" style="text-decoration:none;">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span>Events</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>
        <v-list
          id="list-styling"
          class="pa-1"
          style="border-bottom:1px solid rgba(255, 255, 255, 0.459);"
        >
          <router-link to="/galleri" style="text-decoration:none;">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span>Galleri</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>
        <v-list
          id="list-styling"
          class="pa-1"
          style="border-bottom:1px solid rgba(255, 255, 255, 0.459);"
        >
          <router-link to="/medlemsskab" style="text-decoration:none;">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span>Medlemskab</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>
        <v-list
          id="list-styling"
          class="pa-1"
          style="border-bottom:1px solid rgba(255, 255, 255, 0.459);"
        >
          <router-link to="/tilmelding" style="text-decoration:none;">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span>Tilmeld</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
    <v-content>
      <router-view/>
    </v-content>
    <div style="background-color: #00102B;">
    <v-container>
      <v-layout
        row
        wrap
        :class="{'pa-0': $vuetify.breakpoint.mdAndUp, 'pa-2': $vuetify.breakpoint.smAndDown}"
      >
        <v-flex xs6 sm3 order-sm1 :class="{ 'pb-4': $vuetify.breakpoint.xs}">
          <router-link to="/Omos" style="text-decoration:none;">
            <span id="footer-header">Om os</span>
          </router-link>
          <br>
          <router-link to="/Omos" style="text-decoration:none;">
            <span id="text-regular">Vores Organisation</span>
            <br>
            <span id="text-regular">eSport</span>
            <br>
            <span id="text-regular">Spil</span>
            <br>
            <span id="text-regular">Partnere</span>
          </router-link>
        </v-flex>
        <v-flex xs6 sm3 order-sm2>
          <router-link to="/Omos" style="text-decoration:none;">
            <span id="footer-header">Support</span>
          </router-link>
          <br>
          <router-link to="/Omos" style="text-decoration:none;">
            <span id="text-regular">Hjælp</span>
          </router-link>
          <br>
          <router-link to="/Faq" style="text-decoration:none;">
            <span id="text-regular">FAQ</span>
          </router-link>
        </v-flex>
        <v-flex xs6 sm3 order-sm3 :class="{ 'pb-4': $vuetify.breakpoint.xs}">
          <router-link to="/Kontakt" style="text-decoration:none;">
            <span id="footer-header">Kontakt</span>
          </router-link>
          <br>
          <a
            href="https://www.google.com/maps/place/Askekrattet+4,+6705+Esbjerg/@55.4950447,8.4861611,17z/data=!3m1!4b1!4m5!3m4!1s0x464b216d2fef920d:0xb03a880cdc6a3599!8m2!3d55.4950417!4d8.4883498"
            target="_blank"
            style="text-decoration:none;"
          >
            <span id="text-regular">Askekrattet 4</span>

            <br>
            <span id="text-regular">6705 Esbjerg</span>
            <br>
          </a>
          <span id="text-regular">+45 27 15 37 74</span>
          <br>
          <span id="text-regular">support@esport-esbjerg.dk</span>
        </v-flex>
        <v-flex xs0 sm0 md1 order-sm4 pa-1 class="hidden-sm-and-down">
          <router-link to="/" style="text-decoration:none;">
            <v-img :src="require('./assets/dark-logo.png')"></v-img>
          </router-link>
        </v-flex>
        <v-flex xs6 sm3 md2 order-sm5>
          <span id="footer-header">Følg os</span>
          <br>
          <a href="https://www.facebook.com/eSportEsbjerg/" target="_blank">
            <i id="SOME-ikoner" class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/esport_esbjerg/?hl=da" target="_blank">
            <i id="SOME-ikoner" class="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/esport_esbjerg" target="_blank">
            <i id="SOME-ikoner" class="fab fa-twitter"></i>
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
    
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style>
span {
  color: white;
  font-family: "Roboto";
  text-transform: none;
}
#menu-button:hover {
  border: 2px solid white;
}
#signup-button {
  border: 2px solid white;
}
#signup-button:hover {
  background-color: #2c93c6;
}
#list-styling:hover {
  background-color: #2c93c6;
}
#footer-header {
  font-size: 20px;
  color: #145b86;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;
}
#text-regular {
  font-family: "roboto";
}
#SOME-ikoner {
  color: white;
  font-size: 25px;
  padding: 15px;
}
@media only screen and (max-width: 1200px) {
  #SOME-ikoner {
    font-size: 20px;
  }
}
@media only screen and (max-width: 600px) {
  #SOME-ikoner {
    font-size: 30px;
  }
}
</style>
