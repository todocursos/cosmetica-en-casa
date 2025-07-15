<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" style="background-color:#2E5C8A">
     <div class="d-flex ga-3">
      <a 
        v-for="icon in props.info"
        :href="icon.URL"
      >
        <v-avatar>
          <v-img
            cover
            :key="icon.NAME"
            :src="icon.IMG"
            size="x-small"
          />
        </v-avatar>
      </a>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="font-weight-bold font-syne opacity-60 text-white">
      ¡Hoy puede ser el día en que cambies tu vida!
No estás aquí por casualidad. Estás aquí porque sabes que mereces más: más libertad, más propósito, más ingresos, ¡más vida!
Nuestros cursos están diseñados para darte las herramientas que necesitas para emprender con confianza y pasión.
No importa de dónde vengas, lo importante es hacia dónde estás dispuesto a llegar.
¡Es tu momento!
Cree en ti. Aprende. Emprende. Transforma tu futuro.
    </div>

    <v-divider></v-divider>

    <div class="font-lato text-white">
      {{ new Date().getFullYear() }} — <strong class="font-syne">TODO CURSOS</strong>
    </div>
  </v-footer>
</template>

<script setup>

import { defineProps} from 'vue'

const props = defineProps({
  info: {
    type: Array,
    required: true,
    default: () => []
  }
})


</script>