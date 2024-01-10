<script setup>
import {ref} from "vue"
const auth = ref(false)

</script>

<template>

    <main>
    <section>

        <button @click="auth=true">
            пойти нахуй
        </button>
        
        <button @click="auth=false">
            Зарегестироваться
        </button>
    </section>
    <section v-if="auth">
        <article>
            <a>Электронная почта</a>
            <input type="mail"/>
            <a>Пароль</a>
            <input type="password"/>
            <a>Востанновить доступ</a>
            <button @click="() => {
                $router.push('/table')
            }">
                пойти нахуй
            </button>
        </article>

    </section>
    <section v-else>
        <article>
            <a>Электронная почта</a>
            <input type="mail"/>
            <a>Пароль</a>
            <input type="password"/>
            <a>Востанновить доступ</a>
            <button @click="() => {
                $router.push('/table')
            }">
                Зарегестрироваться
            </button>
        </article>

    </section>
</main>

</template>

<style scoped>

main{
    width: 100%;
    height: 100%;
    text-align: center;
    border: 2px solid black;
    padding: 20px;
    border-radius: 0px;
    font-family: system-ui;
    color: #a9a9c9;
    position: absolute;
    margin: auto;
}
</style>