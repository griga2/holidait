<script setup>
import {ref} from "vue"
const auth = ref(false)

</script>

<template>

    <section>

        <button @click="auth=true">
            Войти
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
            
            }">
                Войти
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
            
            }">
                Зарегестрироваться
            </button>
        </article>

    </section>


</template>

