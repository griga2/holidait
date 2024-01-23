<script setup>

</script>

<template>
    <section>
        <h5>Вход</h5>
        <p>Электронная почта</p>
        <input type="mail"/>
        <p>Пароль</p>
        <input type="password"/>
        <p><v-btn variant="outlined">Войти</v-btn></p>
        <p>У вас нет аккаунта?<button @click="$router.push('/auth/reg')">Зарегистрироваться</button></p>
    </section>
</template>

