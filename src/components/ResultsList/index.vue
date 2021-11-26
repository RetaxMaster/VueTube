<template>
    
    <div class="results-container">
        
        <Result v-for="result in videoResults" :key="result.id.videoId" :result="result" />

    </div>

</template>

<script>

import Result from "./Result";
import { mapState } from 'vuex'

export default {

    name: "ResultsList",

    components: {
        Result
    },

    computed: {

        // Uso: mapState(moduleName, { state })
        ...mapState('youtube', ["videoResults"])

    },

}

</script>

<style scoped>

.results-container {
    width: 560px;
    margin-top: 30px;
}

</style>