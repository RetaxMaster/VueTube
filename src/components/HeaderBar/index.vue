<template>

  <header>
      
      <Logo />
      <Navbar />

  </header>

</template>

<script>

import Logo from "./Logo";
import Navbar from "./Navbar";

export default {

  name: 'HeaderBar',

  components: {
      Logo, 
      Navbar
  }

}

</script>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #202020;
  padding: 10px 20px;
  color: #fff;
}

</style>