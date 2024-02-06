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
        <section class="block-left" style="position: absolute; top: 0; left: 0;">    
        <h5 class="vhod" style="position: relative; top: 176px;">Вход</h5>
        <v-form style="width: 50%; display: flex; flex-direction: column; align-items: start; text-align: start; position: relative; top: 220px;">
        <p class="text">Электронная почта или телефон</p>
        <p_input 
        v-model="login"
        />
        <p class="text">Пароль</p>
        <p_input 
        v-model="password"
        />
        <v-btn color="#75A3CF" class="button" style="width: 100%; margin-top: 68px;"
            @click="() => {
                if (store.Login()) {
                    $router.push('/layout')
                }}"> Войти </v-btn>
        <article class="text" style="display: flex; flex-direction: row; text-align: center; margin: auto;">
        <a>У вас нет аккаунта?</a>
        <p class="next" @click="$router.push('/auth/reg')"><u>Зарегистрироваться</u></p>
        </article>
        </v-form>
        </section>

</main>
    <section class="block-right">
    <div>
    <v-img
    :width="600"
    aspect-ratio="1"
    cover
    src="./../../assets/registration"></v-img></div>
    </section>

    
</template>

<style scoped>
*{
    padding:0px;
    margin:0px;
}

.block-left{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:50%;
    height:100%;
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
font-weight: 500;
line-height: normal;
}
.text{
    margin-top: 94px;
    text-align: left;
    color: var(--Text-primary---gray700, #313131);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
}

.button{
    display: flex;
width: 446px;
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
</style>