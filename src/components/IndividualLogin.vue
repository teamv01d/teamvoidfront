<template>
  <v-app>
    <v-content class="background-color">
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="4">
            <div class="title display-10">
              <h1>Açık iş ve staj imkanlarını bulun</h1>
            </div>
          </v-col>

          <v-col cols="6" offset="1" lg="4">
            <v-card class="text-center mt-12" shaped elevation="10">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <div class="text-right mt-4 pr-10">
                    <v-icon color="#02c3bd" dense left>
                      mdi-account-key
                    </v-icon>
                    <a href="#" style="#00000;">Kurumsal Giriş Yap </a>
                  </div>

                  <!-- <v-divider class="mx-4"></v-divider> -->

                  <h2 class="text-center darken-3--text text--lighten-2 mt-10">
                    VO1D
                  </h2>
                  <v-card-text class="pa-14">
                    <v-form>
                      <v-text-field
                        v-model="user.userName"
                        label="E-posta adresi"
                        name="Email"
                        prepend-inner-icon="email"
                        type="text"
                        color="black lighten-3"
                        outlined
                        class="rounded-0"
                      />
                      <v-text-field
                        v-model="user.userPassword"
                        id="password"
                        label="Şifre"
                        name="password"
                        :type="showPassword ? 'text' : 'password'"
                        prepend-inner-icon="lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        color="black lighten-3"
                        outlined
                        class="rounded-0"
                      />
                    </v-form>
                    <div>
                      <v-btn class="rounded-0" color="#02c3bd" large block dark
                        >GİRİŞ YAP</v-btn
                      >
                      <br />
                      <v-btn
                        color="#02c3bd"
                        outlined
                        large
                        block
                        dark
                        @click="step++"
                      >
                        <v-icon dense left> mdi-account-key </v-icon>Kayıt Ol
                      </v-btn>
                    </div>
                  </v-card-text>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row>
                    <v-col>
                      <v-card-text class="black--text mt-18 pl-10 pr-10">
                        <v-card-text>
                          <h2
                            class="
                              text-center
                              black--text
                              text--lighten-2
                              mb-12
                            "
                          >
                            HESAP OLUŞTUR
                          </h2>

                          <v-form @submit.prevent="onSubmit">
                            <v-text-field
                              v-model="user.name"
                              label="İsim"
                              name="Name"
                              prepend-inner-icon="person"
                              type="text"
                              color="black lighten-3"
                              outlined
                              class="rounded-0"
                            />
                            <v-text-field
                              v-model="user.surname"
                              label="Soyisim"
                              name="SurName"
                              prepend-inner-icon="person"
                              type="text"
                              color="black lighten-3"
                              outlined
                              class="rounded-0"
                            />
                            <v-text-field
                              v-model="user.email"
                              label="E-posta Adresi"
                              name="Email"
                              prepend-inner-icon="email"
                              type="text"
                              color="black lighten-3"
                              outlined
                              class="rounded-0"
                            />

                            <v-text-field
                              v-model="user.password"
                              id="password"
                              label="Şifre"
                              name="password"
                              prepend-inner-icon="lock"
                              :type="showPassword ? 'text' : 'password'"
                              :append-icon="
                                showPassword ? 'mdi-eye' : 'mdi-eye-off'
                              "
                              @click:append="showPassword = !showPassword"
                              color="black lighten-3"
                              outlined
                              class="rounded-0"
                            />

                            <v-card-actions>
                              <v-btn
                                color="#02c3bd"
                                rounded
                                outlined
                                dark
                                large
                                @click="step--"
                              >
                                <v-icon x-large dark left>
                                  mdi-arrow-left </v-icon
                                >BACK
                              </v-btn>
                              <v-spacer />
                              <v-btn type="submit" color="#02c3bd" dark large
                                >KAYIT OL</v-btn
                              >
                            </v-card-actions>
                            <div v-if="submitted" class="mt-4">
                              <h3>Kaydınız başarıyla gerçekleştirildi.</h3>
                            </div>
                          </v-form>
                        </v-card-text>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import endpoint from "@/lib/api";
export default {
  data: () => {
    return {
      user: {
        name: "",
        surname: "",
        password: "",
        email: "",
      },
      step: 1,
      showPassword: false,
      submitted: false,
    };
  },
  methods: {
    onSubmit() {
      this.$axios
        .post(endpoint.auth.register, this.user)
        .then((response) => {
          console.log(response);
          this.user = {};
          this.submitted = "true";
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
.background-color {
  background: linear-gradient(to top right, #02c3bd -22%, #533a71 82%);
}

a:hover {
  font-size: 18px;
}

h1 {
  text-align: left;
  color: white;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  line-height: 50px;
  font-size: 50px;
}
h2 {
  font-size: 30px;
}
</style>
