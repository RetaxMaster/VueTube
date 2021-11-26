<template>
    <main>

        <iframe width="560" height="315" :src="video.url" :title="video.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1>{{ video.title }}</h1>

    </main>
</template>

<script>
export default {
    
    name: "YTVideo",

    props: {
        video: {
            type: Object,
            required: true
        }
    }

}
</script>