<template>
    <div id="main-banner">
        <h1>Krusty Krab</h1>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }


</script>

<style scoped>

    #main-banner {
        background-image: url('../../public/img/hamburguer_krabbyPatty.jpg'); /*os dois pontos significa que voltou pastas */
        background-position: 0 -180px; /*trabalha no eixo y */
        background-size: cover; /*para a imagem aparecer o maximo possivel */
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        
    }

    #main-banner h1 {
        color: #fff;
        font-size: 300%;
        padding: 10px 10px;
        
    }

    

</style>