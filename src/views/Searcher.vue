<template>
  
<main>

  <iframe width="560" height="315" :src="currentVideo.url" :title="currentVideo.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h1>{{ currentVideo.title }}</h1>

</main>

<section>

  <div class="input-search">
    <div class="custom-input">
      <input type="text" placeholder="Busca un video" @keypress="searchInYouTube">
      <div class="input-line"></div>
    </div>
  </div>

  <ResultsList />

</section>

</template>

<script>

import ResultsList from "@/components/ResultsList"
import { mapState } from 'vuex'
import store from '@/store'

export default {

  name: 'Searcher',


  data() {
    return {
      debounce: false
    }
  },

  components: {
    ResultsList
  },

  computed: {

    // Uso: mapState(moduleName, { state })
    ...mapState('youtube', ["currentVideo"])

  },

  methods: {

    searchInYouTube(e) {

      const query = e.target.value + e.key;

      // El debounce me ayuda a no mandar multiples request cada que se presiona una tecla.
      if (!this.debounce) {

        this.debounce = true;

        store.dispatch("youtube/searchVideo", {
          query
        });

        // Reseteamos el debounce
        setTimeout(() => this.debounce = false, 500)

      }
      
    }

  }

}
</script>

<style scoped>

h1 {
  font-size: 28px;
  margin: 10px 0;
}

main,
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  margin-top: 30px;
}

.input-search {
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  margin: 50px 0;
}

.input-search .custom-input {
  width: 560px;
  position: relative;
}

.input-search .custom-input input {
  width: 100%;
  padding: 5px 10px;
  border: none;
  outline: none;
  border-bottom: 2px solid #ccc;
  background: none;
  color: #fff;
}

.input-search .custom-input .input-line {
  content: '';
  height: 2px;
  width: 0;
  background: #2165ff;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s width ease;
}

.input-search .custom-input input:focus + .input-line {
  width: 100%;
}

/* .input-search input:hover {

} */

</style>