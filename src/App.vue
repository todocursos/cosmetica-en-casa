<template>
  <v-app>
    <!-- <Navbar :headers="titles" class="mb-10"/> -->
    
    <!-- Loading State -->
    <div v-if="isLoading" class="d-flex justify-center align-center" style="height: 400px;">
      <LoadingSpinner />
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="d-flex justify-center align-center" style="height: 400px;">
      <v-alert type="error">
        Error cargando datos: {{ error }}
      </v-alert>
    </div>
    
    <!-- Content -->
    <router-view v-else v-slot="{ Component }">
      <component :is="Component" :info="cursos" />
    </router-view>
    
    <Footer :info="redesSociales" />
  </v-app>
</template>

<script setup>
import { onBeforeMount, ref, computed } from 'vue'
import {getSheetData} from './services/APISheet'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const cursos = ref([])
const redesSociales = ref([])
const error = ref(null)
const isLoading = ref(true)
const titles = computed(() => {
   return cursos.value.map(curso => {return {title: curso['TITULO'], route: curso['URL - NAME']}})
})

onBeforeMount( async () => {
  try {
    let response = await getSheetData()
    cursos.value = response[0]
    redesSociales.value = response[1]

  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne&display=swap');
.v-application {
  font-family: 'Lato', sans-serif !important;
}
</style>