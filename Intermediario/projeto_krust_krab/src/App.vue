<!--A navbar e o footer se repetem em tds as paginas pq esta fora do router-view-->
<template>
  <Navbar :logo="logo_src" :alt="app_name"></Navbar>
  <router-view/>
  <Footer></Footer>

</template>

<!--Componentes que se repetem ficam em App-->

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        logo_src: "/img/krustK.png",
        app_name: "Krusty Krab"
      }
    }
  }
</script>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;

  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #1b1b1b;
  }



</style>
