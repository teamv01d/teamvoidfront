<template>
   <div class="Container">
       <v-card 
       slot="cover"
    :loading="loading"
    class="mx-auto my-12 background-color"
    max-width="500"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="require(`../assets/CompanyLogos/${ilan.CompanyLogo}`)"
    ></v-img>

    <v-card-title>{{ilan.CompanyName}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ •{{ilan.Location}}
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Gereksinimler</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>Java</v-chip>

        <v-chip>Python</v-chip>

        <v-chip>SQL</v-chip>

        <v-chip>NodeJs</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Apply
      </v-btn>
    </v-card-actions>
  </v-card>
   </div>
   
</template>
<script>
export default {
    props:["ilan"],
};
</script>

<style lang="scss" scoped>
.Container{
    
    
    
    .background-color {
  background: linear-gradient(to top right, #02c3bd -22%, #e5dbf3 82%);
  padding: 10px;
}

}

</style>