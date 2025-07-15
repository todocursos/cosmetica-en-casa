
<template>
  <div
    class="pa-8"
    :style="{
      width: '100%',
      background:  infoCurso['COLOR - BANNER'],}"
  >
    <v-row>
      <v-col cols="6" class="text-center">
        
        <h1 
          class="text-left my-4 white--text"
          style="
            font-weight: 900; 
            font-size: 2.5rem; 
            line-height: 1.2;
          "
        >
          {{ infoCurso['TITULO'] }}
        </h1>
        
        <p 
          class="my-6 text-justify font-weight-bold font-italic white--text"
          style="
            font-weight: 300; 
            font-size: 1.1rem; 
            line-height: 1.2;
          "
        >
          {{ infoCurso['TEXT - BANNER'] }}
        </p>
        
          
        <v-btn 
          :href="`https://wa.me/${infoCurso['CONTACTO']}/?text=Hola, estoy interesado en el ebook: ${infoCurso['TITULO']}`"
          :color="infoCurso['COLOR - BUTTONS']"
          variant="elevated"
          class="text-primary font-weight-bold mt-10"
          block
        > 
          comprar ahora
        </v-btn>
      </v-col>

      <v-col cols="6">
      <v-img 
        cover
        :src="infoCurso['IMG - BANNER']"
        :alt="`Banner del curso ${infoCurso['TITULO']}`"
        style="border-radius: 380px;"
      />
    </v-col>
    </v-row>
  </div>

  <!-- Bonos Section -->
  <v-sheet 
    class="pa-10" 
    elevation="1" 
    rounded
    :style="{ backgroundColor: infoCurso['COLOR - BACKGROUND']}"
  >
    <v-row dense>
      <v-col cols="12" md="5">
        <v-card elevation="1" >
          <v-card-title 
            class="font-syne font-weight-bold text-start" 
          >
            {{ infoCurso['TITLE - EBOOK'] }}
          </v-card-title>
          
          <v-img 
            cover
            :src="infoCurso['IMG - EBOOK']" 
            height="20rem" 
            style="background: linear-gradient(to right, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1))"
          />
          
          <v-card-text
            class="font-italic"
            style="
              font-weight: 500; 
              font-size: 1.1rem; 
              line-height: 1.2;
            "
          >
            {{ infoCurso['DESC - EBOOK'] }}
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-virtual-scroll 
          height="400"
          width="100%"
          class="pa-4"
          :item-height="150"
          :items="infoCurso.bonos"
        >
          <template v-slot:default="{ item, index }">
            <div class="mb-4">
              <v-row>
                <v-col cols="12">
                  <h3 class="text-h6 font-syne">{{ item.NAME }}</h3>
                </v-col>
              </v-row>

              <v-row>
                <v-col md="3" cols="6" class="mx-0 px-0">
                  <v-img 
                    cover
                    :src="item.IMG" 
                    height="10rem" 
                    style="
                      border-radius: 20px 0px 0px 20px;
                      background: black;
                      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3) !important;
                    "
                  />
                </v-col>
                
                <v-col md="9" cols="6" class="mx-0 px-0">
                  <v-card 
                    elevation="1" 
                    height="10rem"
                    style="border-radius: 0px 20px 20px 0px;"
                  >
                    <v-card-title class="font-weight-bold font-syne">{{ item.TITLE }}</v-card-title>
                    <v-card-text 
                      class="font-italic"
                      style="
                        font-weight: 500; 
                        font-size: 1.1rem; 
                        line-height: 1.2;
                      "
                    >{{ item.DESC }}</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </template>
        </v-virtual-scroll>
      </v-col>
    </v-row>
  </v-sheet>

  <!-- Testimonios Section -->
  <v-sheet 
    class="pa-10" 
    elevation="1" 
    width="100%"
    :style="{backgroundColor: infoCurso['COLOR - BACKGROUND']}"
    rounded
  >
    <h2 class="text-h6 font-weight-bold mb-4 font-lato text-center">Comentarios</h2>
    <v-card
      class="mx-auto pa-10"
      max-width="800"
      elevation="4"
    >
      <v-container class="pa-1">
        <v-item-group
          v-model="selection"
          multiple
        >
          <v-row>
            <v-col
              v-for="(item, i) in infoCurso.rev"
              :key="i"
              cols="12"
              md="6"
              style="border: 2px solid #e5e7eb;"
            >
              <v-item>
                <v-row justify="center" class="pa-6">
                  <v-avatar size="100">
                    <v-img
                      :src="item.IMG"
                      rounded="20"
                      height="150"
                    />
                  </v-avatar>
                </v-row>
                <br>
                <v-card-title class="text-center font-syne">{{ item.NAM }}</v-card-title>
                  
                <v-card-text>
                  <blockquote class="font-syne font-italic"> {{ item.COMMENT }}</blockquote>
                </v-card-text>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-container>
    </v-card>
  
  </v-sheet>

  <!-- Call to Action -->
  <v-sheet
    class="pa-10 text-center"
    :style="{background: infoCurso['COLOR - BANNER'], color: 'white'}"
  >
    <h2 class="text-h5 font-weight-bold mb-2 font-lato">¡No esperes más para transformar tu futuro!</h2>
    <p class="mb-6 font-syne">Adquiere el ebook <span class="font-weight-bold">“{{infoCurso['TITULO']}}”</span> hoy mismo y comienza tu camino hacia el éxito.</p>
    <v-btn block :color="infoCurso['COLOR - BUTTONS']" class="text-primary font-weight-bold">Comprar Ahora</v-btn>
  </v-sheet>

</template>

<script setup>

import { computed, defineProps,onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const selection = ref([])
const route = useRoute()
const router = useRouter()
const props = defineProps({
  info: {
    type: Array,
    required: true,
    default: () => []
  }
})

console.log("ahora es: ", props.info)

const infoCurso = computed(() => {
  let found = props.info[0]
  let bonos = []
  let rev = []

  for (let i = 1; i <= 7; i++) {
    
    if (found[`IMG - BONO ${i}`] || found[`TITLE - BONO ${i}`] || found[`DESC - BONO ${i}`]) {
      bonos.push({
        NAME: `BONO ${i}`,
        IMG: found[`IMG - BONO ${i}`],
        TITLE: found[`TITLE - BONO ${i}`],
        DESC: found[`DESC - BONO ${i}`]
      });
    }

    if(found[`IMG - REV ${i}`] || found[`NAM - REV ${i}`] || found[`COM - REV ${i}`]) {
      rev.push({
        ID: found[`REV ${i}`],
        COMMENT: found[`COM - REV ${i}`],
        IMG: found[`IMG - REV ${i}`],
        NAM: found[`NAM - REV ${i}`]
      })
    }
  }

  // Retornar el nuevo objeto, esparciendo las propiedades principales y agregando bonos
  return {
    ...found,
    bonos,
    rev
  };
  
})

console.log("infoCurso: ", infoCurso.value)


onMounted(() => {
  if (props.info.length === 0) {
    router.push('/404')
  }
})
</script>

<style>
  .white--text {
    color: white !important;
  }

  .font-syne {
    font-family: 'Syne', sans-serif !important;
  }

  .font-lato {
    font-family: 'Lato', sans-serif !important;
  }
</style>