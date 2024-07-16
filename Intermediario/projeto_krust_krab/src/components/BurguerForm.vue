<template>
    <div>
        <Message :msg="msg" v-show="msg"/>
        <div>
            <form id="burguer-form" @submit="createBurguer">
                <div class="input-container">
                    <label for="name">Nome do Cliente: </label>
                    <input type="text" id="name" name="name" v-model="name" placeholder="Digite o Seu Nome">
                </div>
                <div class="input-container">
                    <label for="bread">Tipo do Pão: </label>
                    <select name="bread" id="bread" v-model="bread">
                        <option value="">Selecione o tipo de Pão</option>
                        <option v-for="bread in breads" :key="bread.id" :value="bread.tipo">{{ bread.tipo }}</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="meat">Tipo da Carne: </label>
                    <select name="meat" id="meat" v-model="meat">
                        <option value="">Selecione o tipo da Carne</option>
                        <option v-for="meat in meats" :key="meat.id" :value="meat.tipo">{{ meat.tipo }}</option>
                    </select>
                </div>
                <div id="toppings-container" class="input-container">
                    <label id="toppings-title" for="toppings">Opcionais: </label>
                    <div class="checkbox-container" v-for="topping in toppingsdata" :key="topping.id" >
                        <input type="checkbox" name="toppings" v-model="toppings" :value="topping.tipo">
                        <span>{{topping.tipo}}</span>
                    </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar Hamburguer">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';

    export default {
    name: "BurguerForm",
    data() {
        return {
            /*dados do servidor */
            breads: null,
            meats: null,
            toppingsdata: null,
            /*dados do forms-enviados */
            name: null,
            bread: null,
            meat: null,
            toppings: [],
            msg: null
        };
    },
    /*para trazer os ingredientes para o data - beckend */
    methods: {
        /*Metodo GetIngredientes = assincrono: significa que ele não bloqueia a execução do restante do código enquanto aguarda a
        resposta da solicitação de rede */
        async getIngredientes() {
            /*Função fetch: para fazer uma solicitação HTTP GET para o endpoint HTTP localhost 3000/ingredientes. A resposta da
            solicitação é armazenada na const req */
            const req = await fetch("http://localhost:3000/ingredientes"); /*do backend */
            /*Função Json: Analisa a resposta da solicitação HTTP e retorna um objeto JavaScript que pode ser usado no restante do
            código */
            /*Await: utilizado com funções assincronas para esperar que uma operação assincrona seja concluida antes de continuar
            a executar o codigo, a função fetch retorna uma promessa que é resolvida com a resposta da solicitação HTTp. O await
            é uasado para esperar que a promessa sej resolvida e em seguida a resposta da solicitação e armazenada na constante
            req, garantindo que po restamte do codigo não seja executado até que a resposta da solicitação esteja
            disponivel */
            const data = await req.json();
            this.breads = data.breads;
            this.meats = data.meats;
            this.toppingsdata = data.toppings;
        },
        /*Esse metodo serve para parar o evento */
        async createBurguer(e) {
            e.preventDefault();
            const data = {
                name: this.name,
                meat: this.meat,
                bread: this.bread,
                toppings: Array.from(this.toppings),
                status: "Solicitado"
            };
            /*O objeto vai precisar virar um texto porque ele será solicitado via request */
            const dataJson = JSON.stringify(data); /*texto com formato json */
            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: dataJson /*o corpo da aplicação envia os dados no formato de texto */
            });
            const res = await req.json();
            /*OBS.: Aqui não se está fazendo tratamento de erro*/

            // colocar mensagem de sistema

            this.msg = `Pedido Nº ${res.id} Realizado com Sucesso. Aguarde e Retire junto ao Caixa.`;

            // limpar msg

            setTimeout(() => this.msg = "", 3000);

            // limpar os campos
            this.name = "";
            this.bread = "";
            this.meat = "";
            this.toppings = "";
        }
    },
    mounted() {
        this.getIngredientes();
    },
    components: { Message }
}

</script>

<style scoped>
    #burguer-form {
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color:#1dbaf7;
        padding: 5px 10px;
        border-left: 4px solid #990000;
    }

    input, select {
        padding: 5px 10px;
        width: 300px;
    }

    #toppings-container {
        flex-direction: row;
        flex-wrap: wrap;
    }

    #toppings-title {
        width: 100%;
        font-style: italic;
    }

    span {
        font-style: italic;
    }

    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }

    .checkbox-container span,
    .checkbox-container input {
        width: auto;
    }

    .checkbox-container span {
        margin-left: 6px;
    }

    .submit-btn {
        background-color: #990000;
        color: #fff;
        font-weight: bold;
        border: 2px solid #990000;
        border-radius: 25px;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .submit-btn:hover {
        background-color: transparent;
        color: #1dbaf7;
    }

</style>