<template>
    
    <div class="results-container">
        
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />

    </div>

</template>

<script>

import Result from "./Result";

export default {

    name: "ResultsList",

    components: {
        Result
    }

}

</script>

<style scoped>

.results-container {
    width: 560px;
    margin-top: 30px;
}

</style>