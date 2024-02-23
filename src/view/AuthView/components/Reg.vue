<script setup>
import p_input from '../../../components/p_input.vue';
import { ref } from "vue";
import {useAuthStore} from "../store";
import { storeToRefs } from "pinia";
const store = useAuthStore();

const {
        fio,
        mail,
        phone,
        password,
        company,
    } = storeToRefs(store);
    
const email = ref('email@mail.com')


</script>

<template>
    <main>
    <section class="block_left">
      <h5 class="reg" style="position: absolute; top: 20%;">Регистрация</h5>
      <form style="display: flex; flex-direction: column; justify-content: space-between;">
        <article>
          <p class="text" >Ваше ФИО в полной форме</p>
          <p_input v-model="fio"/>
        </article>
        <article>
          <p class="text" >Электронная почта</p>
          <p_input v-model="mail"/>
        </article>
        <article>
          <p class="text" >Контактный телефон</p>
        <p_input v-model="phone"/>
        </article>
        <article>
          <p class="text" >Название компании или ИНН</p>
          <p_input v-model="company"/>
        </article>
        <article>
          <p class="text">Придумайте Пароль</p>
          <p_input type="password" v-model="password"/>
        </article>
        <article>
          <p class="text" >Подтвердите Пароль</p>
          <p_input type ="password" v-model="password"/>
        </article>
       
        <v-btn color="#75A3CF" class="button" style="width: 446px; margin-top: 23px;">Зарегистрироваться</v-btn>
        <article style="display: flex; flex-direction: row; text-align: center; margin: auto;">
          <a class="text">Уже есть аккаунт?</a> 
          <p class="next" @click="$router.push('/auth/auth')"><u>Войти</u></p>
        </article>
      </form>
         
    </section>
    <section class="block_right">
      block-right
    </section>
  </main>
  
</template>

<style scoped>

.block_right{
    -webkit-box-shadow: -11px 2px 20px 8px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -11px 2px 20px 8px rgba(34, 60, 80, 0.2);
    box-shadow: -11px 2px 20px 8px rgba(34, 60, 80, 0.2);
}

form article{
  margin-bottom: 10px;
}

p{
  margin-bottom: -3px;
  color: #2E4E69;
}
.reg{
    color: var(--Text-primary---gray700, #313131);
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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

.block_left{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:50%;
    height:100%;
}
.block_right{
    width: 50%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.text{
  margin-top: 5px;
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-family: 'Evolventa regular';
  font-weight: 400;
  line-height: 16px; /* 114.286% */
}

p{
  margin-bottom: -2px;
}
.next{
  color: #75A3CF;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}
</style>