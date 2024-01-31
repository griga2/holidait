<script setup>


</script>

<template>
    
    <section>
        
      <h5 class="reg">Регистрация</h5>
      
        <p class="text">Ваше ФИО в полной форме</p>
        <v-responsive class="baseinput"><v-text-field></v-text-field></v-responsive>
        <p class="text">Электронная почта</p>
        <v-responsive class="baseinput">
        <v-text-field 
        label="email@mail.com"
        type="email"></v-text-field></v-responsive>
        <p class="text">Контактный телефон</p>
        <v-responsive class="baseinput"><v-text-field></v-text-field></v-responsive>
        <p class="text">Название компании или ИНН</p>
        <v-responsive class="baseinput"><v-text-field></v-text-field></v-responsive>
        <p class="text">Придумайте Пароль</p>
        <v-responsive class="baseinput" ><v-text-field type="password"
          ></v-text-field></v-responsive>
        <p class="text">Подтвердите Пароль</p>
        <v-responsive class="baseinput"><v-text-field type ="password"></v-text-field></v-responsive>
        <p class="text"><v-col cols="auto">
        <p><v-btn color="#75A3CF" class="button">Зарегистрироваться</v-btn></p>
      </v-col></p>
        <p>Уже есть аккаунт? <button @click="$router.push('/auth/auth')"><p class="next">Войти</p></button></p>
      
    </section>


</template>

<style scoped>
.baseinput{
  width: 446px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid var(--Gray-gray150, #E1E1E1);
  background: var(--Gray-White, #FFF);
}
.text{
  color: var(--Text-primary---gray700, #313131);
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  Top: 277px;
  Left: 284px
}
.reg{
  color: var(--Text-primary---gray700, #313131);
  text-align: center;
  font-family: Gilroy;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  top: 176px;
  left: 439px;
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