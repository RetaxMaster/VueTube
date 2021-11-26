<template>
    
    <div class="results-container">
        
        <Result v-for="result in videoResults" :key="result.id.videoId" :result="result" @update:video="setNewVideo" />

    </div>

</template>

<script>

import Result from "./Result";
import { mapState } from 'vuex'
import store from '@/store'

export default {

    name: "ResultsList",

    components: {
        Result
    },

    computed: {

        // Uso: mapState(moduleName, { state })
        ...mapState('youtube', ["videoResults"])

    },

    methods: {
        setNewVideo(videoInfo) {
            // Al llamar a la mutation, debemos especificar a cuál módulo pertenece.
            store.commit("youtube/SET_CURRENT_VIDEO", videoInfo)
        }
    }

}

</script>

<style scoped>

.results-container {
    width: 560px;
    margin-top: 30px;
}

</style>