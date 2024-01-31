<script setup>
import pinput from '../../../components/pinput.vue';
import { ref } from "vue";

const email = ref('email@mail.com')

</script>

<template>
    <main>
    <section class="block-left" style="position: absolute; top: 0; left: 0;">
        
      <h5 class="reg" style="position: relative; top: 176px;">Регистрация</h5>
      <v-form style="width: 50%; display: flex; flex-direction: column; align-items: start; text-align: start; position: relative; top: 220px;">
        <p class="text">Ваше ФИО в полной форме</p>
        <pinput/>
        <p class="text" >Электронная почта</p>
        <pinput v-model="email"/>
        <p class="text" >Контактный телефон</p>
        <pinput/>
        <p class="text" >Название компании или ИНН</p>
        <pinput/>
        <p class="text">Придумайте Пароль</p>
        <pinput type="password"/>
        <p class="text" >Подтвердите Пароль</p>
        <pinput type ="password"/>
        <v-btn color="#75A3CF" class="button" style="width: 446px; margin-top: 23px;">Зарегистрироваться</v-btn>
        <article style="display: flex; flex-direction: row; text-align: center; margin: auto;">
          <a class="text">Уже есть аккаунт?</a> 
          <p class="next" @click="$router.push('/auth/auth')"><u>Войти</u></p>
        </article>
      </v-form>
         
    </section>
  </main>
    <section class="block-right">

    </section>


</template>

<style scoped>
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

.text{
  margin-top: 5px;
  text-align: left;
  color: var(--Text-primary---gray700, #000000);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
}
.reg{
  color: var(--Text-primary---gray700, #313131);
  text-align: center;
  font-family: Gilroy;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

}
.next{
  color: #75A3CF;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}
</style>