<template>
  
<YTVideo :video="currentVideo" />

<section>

  <div class="input-search">
    <div class="custom-input">
      <input v-focus type="text" placeholder="Busca un video" @keyup="searchInYouTube">
      <div class="input-line"></div>
    </div>
  </div>

  <ResultsList />

</section>

</template>

<script>

import { defineAsyncComponent } from 'vue'
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
    ResultsList: defineAsyncComponent( () => import(/*webpackChunkName: "ResultsList" */ '@/components/ResultsList') ),
    YTVideo: defineAsyncComponent( () => import(/*webpackChunkName: "YouTubeVideo" */ '@/components/YTVideo') ),
  },

  computed: {

    // Uso: mapState(moduleName, { state })
    ...mapState('youtube', ["currentVideo"])

  },

  methods: {

    searchInYouTube(e) {

      // El debounce me ayuda a no mandar multiples request cada que se presiona una tecla.
      if (!this.debounce) {

        this.debounce = true;

        // Reseteamos el debounce
        setTimeout(() => {

          const query = e.target.value

          store.dispatch("youtube/searchVideo", {
            query
          });

          this.debounce = false
          
        }, 500)

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