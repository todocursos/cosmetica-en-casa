<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col cols="12" class="green darken-1 white--text pa-10">
        <div class="d-flex justify-space-between align-center">
          <h1 class="text-h4 font-weight-bold">My Food</h1>
          <div>
            <v-btn text>Home</v-btn>
            <v-btn text>Recipes</v-btn>
            <v-btn text>Tips</v-btn>
            <v-btn text>Contact</v-btn>
          </div>
        </div>
        <div class="mt-10 d-flex flex-column align-start">
          <h2 class="text-h2 font-weight-bold">BROWNIE MAGIC</h2>
          <p class="text-subtitle-1">5 tips how to make the best brownies in the game</p>
          <v-chip class="ma-1" color="black" text-color="white">How to</v-chip>
          <v-chip class="ma-1" color="black" text-color="white">Baking</v-chip>
          <v-btn class="ma-3" color="black" dark>READ NOW</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>