<template>
    
    <div class="result" @click="setNewVideo">

        <div class="image-container">
            <img :src="result.snippet.thumbnails.high.url" :alt="result.snippet.title">
        </div>

        <div class="video-info">
            <h2>{{ result.snippet.title }}</h2>
            <p>{{ result.snippet.description }}</p>
        </div>

    </div>

</template>

<script>
export default {
    
    name: "Result",

    props: {

        result: {
            type: Object,
            required: true
        }

    },

    methods: {

        setNewVideo() {
            this.$emit("update:video", {
                url: `https://www.youtube.com/embed/${this.result.id.videoId}`,
                title: this.result.snippet.title
            });
        }

    }
}
</script>

<style scoped>

.result {
    display: flex;
    margin-bottom: 15px;
    align-items: flex-start;
    cursor: pointer;
    border-radius: 5px;
}

.result:hover {
    background: rgb(255, 255, 255, 0.1);
}

.result .image-container {
    width: 200px;
}

.result .video-info {
    width: calc(100% - 200px);
    padding: 0 10px;
}

.result .video-info h2 {
    font-size: 20px;
    margin-bottom: 5px;
}

.result .video-info p {
    font-size: 13px;
    max-height: 76px;
    overflow: hidden;
    color: #7e7e7e;
}

</style>