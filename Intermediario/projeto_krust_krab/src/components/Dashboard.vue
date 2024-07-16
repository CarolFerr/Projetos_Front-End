<template>
    <div id="burger-table">
        <Message :msg="msg" v-show="msg"/>
       <div>
        <div id="burger-table-heading">
            <div class="order-id">Nº:</div>
            <div>Cliente:</div>
            <div>Pão:</div>
            <div>Carne:</div>
            <div>Opcionais:</div>
            <div>Ações:</div>
        </div>
       </div>

       <div id="burger-table-rows">
        <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
            <div class="order-number">{{ burger.id }}</div>
            <div>{{burger.name}}</div>
            <div>{{burger.bread}}</div>
            <div>{{burger.meat}}</div>
            <div>
                <ul>
                    <li v-for="(topping, index) in burger.toppings" :key="index">{{topping}}</li>
                </ul>
            </div>

            <div>
                <select name="status" class="status" @change="updateBurguer($event, burger.id)"> <!--@change = evento de change-->
                    <option value="">Status Pedido</option>
                    <option v-for="estado in status" :key="estado.id" :value="estado.tipo" :selected="burger.status == estado.tipo">
                        {{ estado.tipo }}</option>
                </select>
                <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button> <!--id pq esta em um loop de burger-->
            </div>
        </div>
       </div>
    </div>
</template>

<script>
import Message from './Message.vue';
    export default {
        name: "Dashboard",
        data() {
            return {
                burgers: null,
                burgers_id: null,
                status: [],
                msg: null //qno o pedido e realizado, ou seja quando é realizada uma requisição
            }
        },
        components: {
            Message
        },
        methods: {
            async getPedidos () {

                const req = await fetch("http://localhost:3000/burgers");

                const data = await req.json();

                this.burgers = data;


                //status deve estar em tabela dinâmica
                //resgatar os status
                this.getStatus();

            },
            async getStatus() {

                const req = await fetch("http://localhost:3000/status");

                const data = await req.json();

                this.status = data;

            },
            async deleteBurger(id) {
                
                const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                    method: "DELETE" //Modifica o metodo da requisição
                });

                const res = await req.json();

                // colocar mensagem de sistema

                this.msg = `Pedido Removido com Sucesso.`;

                // limpar msg

                setTimeout(() => this.msg = "", 3000);


                this.getPedidos(); // atualização do pedido

            },
            async updateBurguer(event, id){

                const option = event.target.value;

                const dataJson = JSON.stringify({status:option}); //json em string

                // acessa o id e atualiza o status
                const req = await fetch(`http://localhost:3000/burgers/${id}`, { 
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: dataJson
                });

                const res = await req.json();

                // Reutilização de componente "coringa"
                // colocar mensagem de sistema

                this.msg = `O Pedido Nº ${res.id} está/foi ${res.status}. Aguarde e Retire junto ao Caixa.`;

                // limpar msg

                setTimeout(() => this.msg = "", 3000);


                console.log(res); // res = resposta
            }

        },
        mounted() {
            this.getPedidos();
        }
    }
   
</script>

<style scoped>

    #burger-table {
        max-width: 1200px;
        margin: 0 auto;
    }

    #burger-table-heading,
    #burger-table-rows,
    .burger-table-row {
        display: flex;
        flex-wrap: wrap;
    }

    #burger-table-heading {
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #990000;
    }

    #burger-table-heading div,
    .burger-table-row div {
        width: 19%;
    }


    .burger-table-row {
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #ccc;
    }

    #burger-table-heading .order-id,
    .burger-table-row .order-number {
        width: 5%;
    }

    select {
        padding: 12px 6px;
        margin-right: 12px;
        border-radius: 25px;
        background-color:#1dbaf7 ;
    }

    .delete-btn {
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

    .delete-btn:hover {
        background-color: transparent;
        color: #222;
    }


</style>