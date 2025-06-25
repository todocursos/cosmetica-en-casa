<script setup>
import { RouterLink, RouterView } from 'vue-router'

const items = [
  { title: 'Curso de Maquillaje', route: 'home' },
  { title: 'Curso de Peinados', route: 'home' },
  { title: 'Curso de Cuidado Facial', route: 'home' },
  { title: 'Curso de Estilismo', route: 'home' },
  { title: 'Curso de Manicura', route: 'home' }
]
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="55" height="55" />

    <div class="wrapper">
     
    </div>
  </header>
 <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/test">About</RouterLink>
      </nav> -->

  <v-app>
    <v-app-bar
      scroll-behavior="inverted fade-image"
      scroll-threshold="141"
      image="https://picsum.photos/1920/1080?random"
    >
      <v-app-bar-title><h1>BELLEZA FEMENINA</h1></v-app-bar-title>
    
      <template v-slot:prepend>
        <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>
      </template>

      <!-- CURSOS -->
      <v-menu
        open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >
            Cursos
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <RouterLink class="text-decoration-none" :to="{ name: item.route }">{{ item.title }}</RouterLink>
          </v-list-item>
        </v-list>
      </v-menu>

      <RouterLink to="/" class="text-decoration-none">
        <v-btn color="primary" prepend-icon="mdi-phone">
          <template v-slot:prepend>
            <v-icon color="primary"></v-icon>
          </template>
          Contactanos
        </v-btn>
      </RouterLink>
    </v-app-bar>
  </v-app>
  <RouterView />
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
