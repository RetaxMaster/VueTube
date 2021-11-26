<template>
    
    <div class="result">

        <div class="image-container">
            <img src="https://i.ytimg.com/vi/2DQFFLHNrKo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnN5b9wcbthWLYMcUsl8JB-RK9uA" alt="Título del video">
        </div>

        <div class="video-info">
            <h2>Título del video</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem excepturi ipsam unde, distinctio, impedit culpa deserunt esse rerum repudiandae voluptatem magni laudantium amet. Non natus a excepturi aspernatur impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem excepturi ipsam unde, distinctio, impedit culpa deserunt esse rerum repudiandae voluptatem magni laudantium amet. Non natus a excepturi aspernatur impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem excepturi ipsam unde, distinctio, impedit culpa deserunt esse rerum repudiandae voluptatem magni laudantium amet. Non natus a excepturi aspernatur impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem excepturi ipsam unde, distinctio, impedit culpa deserunt esse rerum repudiandae voluptatem magni laudantium amet. Non natus a excepturi aspernatur impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem excepturi ipsam unde, distinctio, impedit culpa deserunt esse rerum repudiandae voluptatem magni laudantium amet. Non natus a excepturi aspernatur impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem excepturi ipsam unde, distinctio, impedit culpa deserunt esse rerum repudiandae voluptatem magni laudantium amet. Non natus a excepturi aspernatur impedit?</p>
        </div>

    </div>

</template>

<script>
export default {
    
    name: "Result",



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