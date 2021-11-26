<template>
    
    <nav>
        <ul>
            <li><a href="#">Buscar un video</a></li>
            <li><a href="#">Acerca de</a></li>
        </ul>
    </nav>

</template>

<script>
export default {
    
    name: "Navbar"

}
</script>

<style scoped>

ul {
    display: flex;
    list-style: none;
}

ul li {
    margin: 0 3px;
}

ul li a {
    text-decoration: none;
    padding: 8px 13px;
    color: #fff;
    background: rgb(255, 255, 255, 0);
    border-radius: 5px;
    transition: 0.3s all ease;
}

ul li a:hover {
    background: rgb(255, 255, 255, 0.12);
}

</style>