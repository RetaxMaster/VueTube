<template>

  <MainLayout/>

</template>

<script>

import MainLayout from './layouts/MainLayout.vue'

// Podemos importar aquí directamente un archivo CSS
import "@/assets/css/styles.css"

export default {

  name: 'App',

  components: {
    MainLayout
  }

}
</script>

