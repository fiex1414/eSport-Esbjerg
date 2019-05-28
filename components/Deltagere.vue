<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 order-xs1 px-0>
          <span>BEMÆRK du skal være over 18 år uden forældretilmelding.</span>
        </v-flex>
        <v-flex
          xs12
          sm6
          order-xs2
          :class="{'py-0 pl-0 pr-3': $vuetify.breakpoint.smAndUp, 'pa-0': $vuetify.breakpoint.xs}"
        >
          <v-text-field v-model="firstname" :rules="nameRules" label="Fornavn" solo flat required></v-text-field>
        </v-flex>

        <v-flex
          xs12
          sm6
          order-xs3
          :class="{'py-0 pr-0 pl-3': $vuetify.breakpoint.smAndUp, 'pa-0': $vuetify.breakpoint.xs}"
        >
          <v-text-field v-model="lastname" :rules="nameRules" label="Efternavn" solo flat required></v-text-field>
        </v-flex>

        <v-flex xs12 order-xs4 pa-0>
          <v-text-field v-model="nickname" :rules="nameRules" label="Nickname" solo flat required></v-text-field>
        </v-flex>

        <v-flex xs12 order-xs5 pa-0>
          <v-text-field v-model="vejnavn" :rules="nameRules" label="Vejnavn" solo flat required></v-text-field>
        </v-flex>

        <v-flex
          xs12
          sm6
          order-xs6
          :class="{'py-0 pl-0 pr-3': $vuetify.breakpoint.smAndUp, 'pa-0': $vuetify.breakpoint.xs}"
        >
          <v-text-field
            v-model="postnr"
            :rules="numberRules"
            label="Postnr"
            mask="####"
            solo
            flat
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          sm6
          order-xs7
          :class="{'py-0 pr-0 pl-3': $vuetify.breakpoint.smAndUp, 'pa-0': $vuetify.breakpoint.xs}"
        >
          <v-text-field v-model="by" :rules="nameRules" label="By" solo flat required></v-text-field>
        </v-flex>
        <v-flex xs12 order-xs8 pa-0>
          <v-text-field
            v-model="tlf"
            :rules="nameRules"
            type="number"
            label="Telefon"
            solo
            flat
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 order-xs9 pa-0>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" solo flat required></v-text-field>
        </v-flex>

        <v-flex xs12 order-xs10 pa-0>
          <v-text-field
            v-model="fodselsdato"
            :rules="nameRules"
            label="Fødselsdato dd-mm-åååå"
            mask="##-##-####"
            solo
            flat
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    fodselsdato: "",
    by: "",
    postnr: "",
    vejnavn: "",
    nickname: "",
    nameRules: [v => !!v || "Feltet skal udfyldes"],
    email: "",
    emailRules: [
      v => !!v || "Feltet skal udfyldes",
      v => /.+@.+/.test(v) || "E-mail eksisterer ikke"
    ]
  })
};
</script>

<style scoped>
</style>