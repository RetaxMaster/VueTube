<template>
    
    <div class="logo-container">
        <picture class="image-container">
            <img alt="Vue logo" src="@/assets/logo.png">
        </picture>
        
        <span>VueTube</span>
    </div>

</template>

<script>
export default {
    
    name: "Logo"

}
</script>

<style scoped>

span {
    font-size: 20px;
    margin-left: -17px;
}

span::first-letter {
    opacity: 0;
}

.logo-container {
    display: flex;
    align-items: center;
    background: rgb(255, 255, 255, 0.12);
    padding: 5px 13px;
    border-radius: 5px;
}

.image-container {
    width: 30px;
}

</style>