<template>
  <v-main class="custom-main">
    <v-container>
      <v-col align-self="center" class="text-center">
        <v-card
          class="mx-auto"
          max-width="554"
          variant="text"
        >
          <v-card-item>
            <v-card-title class="text-h4 text-wrap " style="font-weight: 800;">
              Aprende algo nuevo cada día
            </v-card-title>
          </v-card-item>

          <v-card-text class="text-body-1 font-italic font-weight-bold">
            Explora nuestra amplia variedad de cursos y lleva tus habilidades al siguiente nivel. ¡El conocimiento te espera!
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn
              color="indigo-accent-4"
              text="Learn More"
              variant="elevated"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-row class="mt-10" justify="center">
        <h1>Nuestros cursos destacados</h1>
      </v-row>

      <v-row class="mt-5" justify="center">
        <v-sheet
          class="mx-auto"
          elevation="8"
          max-width="850"
        >
          <v-slide-group
            v-model="model"
            class="pa-4"
            center-active
            show-arrows
          >
            <v-slide-group-item
              v-for="(n, index) in props.info"
              :key="index"
              v-slot="{ isSelected, toggle }"
            >
              <v-card
                class="ma-4"
                max-width="344"
                elevation="2"
              >
                <v-img
                  height="200px"
                  :src="n['IMG - EBOOK']"
                  :aspect-ratio="1"
                ></v-img>

                <v-card-title class="font-weight-bold text-wrap">
                    {{ n['TITULO'] }}
                </v-card-title>

                <v-card-text class="text-justify font-italic font-syne">
                  {{ n['DESC - EBOOK'] }}
                </v-card-text>

                <v-card-actions>
                  <v-btn  
                    block
                    variant="elevated"
                    color="primary"
                    :to="`/curso/${n['URL - NAME']}`"
                  >Ir al Curso</v-btn>

                </v-card-actions>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, defineProps, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const model = ref(0)
const props = defineProps({
  info: {
    type: Array,
    required: true,
    default: () => []
  }
})

onBeforeMount(() => {
  if (props.info.length === 0) {
    
  }
})
</script>

<style scoped>
.custom-main {
  padding-top: 80px; /* Ajusta este valor según la altura de tu navbar */
}
</style>
