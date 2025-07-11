<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['headers'])


</script>

<template>
    <v-app-bar style="background-color:#2E5C8A">
      <v-app-bar-title><h1 class="text-bold"></h1></v-app-bar-title>
      
      <template v-slot:prepend>
        <RouterLink class=" text-white text-h4 font-weight-bold text-decoration-none px-6 font-syne" :to="'/'">
          <v-avatar class="mr-2">
            <v-img
              src="/logo.svg"
              alt="Logo"
            />
          </v-avatar>
          Todo cursos
        </RouterLink>
      </template>

      <!-- CURSOS -->
      <v-menu
        open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn
            class="font-syne font-weight-bold"
            color="white"
            variant="text"
            v-bind="props"
          >
            Cursos
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in props.headers"
            :key="index"
            :value="index"
          >
            <RouterLink class="text-decoration-none" :to="`/curso/${item.route}`">{{ item.title }}</RouterLink>
          </v-list-item>
        </v-list>
      </v-menu>

      <a :href="`https://wa.me/573156114379/?text=Hola, estoy interesado conocer mas sobre los cursos que tienen`" class="text-decoration-none font-syne pr-4">
        <v-btn class="font-weight-bold" color="white" prepend-icon="mdi-phone">
          Contactanos
        </v-btn>
      </a>
    </v-app-bar>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
