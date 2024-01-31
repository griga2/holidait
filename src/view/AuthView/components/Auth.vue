<script setup>

</script>

<template>
    <section>
        <h5 class="vhod">Вход</h5>
        <p class="text">Электронная почта или телефон</p>
        
        <v-responsive
        class="baseinput">
        <v-text-field 
        label="email@mail.com"
        type="email"></v-text-field>
        </v-responsive>

        <p class="text">Пароль</p>
        <v-responsive
        class="baseinput">
        <v-text-field
        type="password"></v-text-field>
        </v-responsive>

        <p class="font"><v-btn color="#75A3CF" class="button">
        Войти
        </v-btn></p>
        <p class="font">У вас нет аккаунта?<button @click="$router.push('/auth/reg')"><p class="next">Зарегистрироваться</p></button></p>
    </section>
</template>

<style>
.font{
    font-family: Gilroy;
}
.baseinput{
    border-radius: 2px;
    border: 1px solid #E53835;
    background: var(--Red-R50, #FFFAFA);
    display: flex;
    width: 446px;
    height: 42px;
    padding: 0px 12px 0px 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.vhod{
    color: var(--Text-primary---gray700, #313131);
text-align: center;
font-family: Gilroy;
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.text{
    color: var(--Text-primary---gray700, #313131);
font-family: Gilroy;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
justify-content: center;
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
font-family: Gilroy;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 150%;
}
</style>