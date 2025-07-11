<template>
  <v-container class="fill-height">
    <v-row align-content="center" justify="center">
      <v-col cols="12" class="text-center">
        <div class="astronaut-animation">
          <!-- SVG animado de astronauta -->
          <v-img 
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG16c2s1Z2xicjBnOGgyMm51aG54dXA1MjNzOGtiZzkxcjJoYW9udyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VwoJkTfZAUBSU/giphy.gif"
            alt="404 Not Found"
            width="300"
            height="300"
            class="mx-auto"
          />
        </div>
        <h1 class="display-3 mb-4">¡Houston, tenemos un problema!</h1>
        <p class="title">La página que buscas se perdió en el espacio</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.astronaut-animation {
  max-width: 300px;
  margin: 0 auto 40px;
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>
<script setup>  
import { useRouter } from 'vue-router'

const router = useRouter() 

setTimeout(() => {
  router.push('/')
}, 10000)

</script>