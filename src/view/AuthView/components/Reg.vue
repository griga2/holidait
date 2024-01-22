<script setup>



</script>

<template>
    
    <section>
        <h5>Регистрация</h5>
        <p>Ваше ФИО в полной форме</p>
        <input/>
        <p>Электронная почта</p>
        <input type="mail"/>
        <p>Контактный телефон</p>
        <input/>
        <p>Название компании или ИНН</p>
        <input/>
        <p>Придумайте Пароль</p>
        <input type="password"/>
        <p>Подтвердите Пароль</p>
        <input type="password"/>
        <p><v-btn>Зарегистрироваться</v-btn></p>
        <p>Уже есть аккаунт? <button @click="$router.push('/auth/auth')">Войти</button></p>
    </section>


</template>

<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>