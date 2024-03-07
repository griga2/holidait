<script setup>
import p_input from "../../../components/p_input.vue";
import {useAuthStore} from "../store";
import { storeToRefs } from "pinia";
import { ref } from 'vue'
const store = useAuthStore();

const {
        login,
        password,
    } = storeToRefs(store);

const pass = ref('')

</script>

<template>
    <main>

   
            <section class="block-left">    
                <h4 class="vhod" style="position: absolute; top: 20%;">Вход</h4>
                <form id="vhod_rorm">
                    <article>
                        <p class="text">Электронная почта или телефон</p>
                        <p_input v-model="login"/>
                    </article>
                    
                    <article>
                        <p class="text">Пароль</p>
                        <p_input v-model="password"/>
                    </article>
                  
                    <article style="width: 100%; ">
                        <v-btn color="#75A3CF" class="button"
                        @click="async () => {
                            // console.log(await store.Login());
                            const rez = await store.Login();
                            if (rez == 201) {
                                $router.push('/main');
                            } else if (rez == 401) {
                                //обработка
                            } else {

                            }
                        }"> 
                        Войти
                        </v-btn>
                        <article class="button_text">
                            <span>У вас нет аккаунта?</span>
                            <span  class="next" @click="$router.push('/auth/reg')">Зарегистрироваться</span>
                        </article>
                    </article>
                </form>
            </section>
            <section class="block-right">

            </section>

        </main>
</template>

<style scoped>

.block-right{
    -webkit-box-shadow: -11px 2px 20px 8px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -11px 2px 20px 8px rgba(34, 60, 80, 0.2);
    box-shadow: -11px 2px 20px 8px rgba(34, 60, 80, 0.2);
}

main{
    display: flex;
    flex-direction: row ;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
}

.button_text{
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center
}

*{
    padding:0px;
    margin:0px;
}

#vhod_rorm{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 30%;
    text-align: left;
}

.block-left{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:50%;
    height:100vh;
    justify-content: center;
}

.block-right{
    width: 50%;
    height:100%;

}
.vhod{
    color: var(--Text-primary---gray700, #313131);
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.text{
    text-align: left;
    color: var(--Text-primary---gray700, #313131);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
}

.button{
    display: flex;
    width: 100%;
    padding: 0px 22px;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 2px;
    background: #75A3CF;
}

.next{
    color: #75A3CF;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}

p{
    width: 100%;
}

</style>