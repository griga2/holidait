<script setup>

</script>

<template>
    <div class="background"></div>
    <v-form style="justify-content: center; align-items: center;position: relative; top: 40%;">
        <button color="#75A3CF" class="button"  @click="$router.push('/auth/auth')"> Войти в кабинет </button>
        <button color="#75A3CF" class="button" style="margin-top: 20px;" @click="$router.push('/auth/reg')"> Зарегистрироваться </button>
    </v-form>

</template>

<style scoped>

.background{
    background-image: url("../../../assets/png/Регистрация.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px ;
}
.button{
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    padding-left: 5px;
    font-size: 14px;
    display: flex;
    width: 516px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 2px;
    border: 1px solid var(--Gray-gray150, #75A3CF);
    background: var(--Gray-White, #FFF);
    outline: none;
}   
</style>