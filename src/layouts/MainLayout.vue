<template>
  <div class="container">

    <HeaderBar/>

    <router-view/>

    <FooterBar/>

  </div>
</template>

<script>

import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'

export default {

  name: 'MainLayout',

  components: {
    HeaderBar,
    FooterBar
  }

}

</script>