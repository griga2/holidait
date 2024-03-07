<script setup>

</script>

<template>
    <main style="align-items: center; display: flex; flex-direction: column; justify-content: center;">
    <v-form style="justify-content: center; align-items: center;">
        <button color="#75A3CF" class="button"  @click="$router.push('/auth/auth')"> <span style="padding-left: 15px; color: var(--Text-primary---gray700, #313131);">Войти в кабинет</span>
            <span style="padding-left: 362px;"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.07825 15.5599C4.44232 15.9372 5.04681 15.9371 5.41074 15.5596L11.9818 8.7447C12.2477 8.4689 12.2477 8.03211 11.9818 7.7563L5.41075 0.94135C5.04681 0.563904 4.44233 0.563797 4.07826 0.941114C3.73229 1.29967 3.73221 1.86775 4.07807 2.22641L9.88735 8.2505L4.07807 14.2746C3.7322 14.6332 3.73228 15.2013 4.07825 15.5599Z" fill="#313131"/>
            </svg></span>

        </button>
        <button color="#75A3CF" class="button" style="margin-top: 20px;" @click="$router.push('/auth/reg')"> <span style="padding-left: 15px; color: var(--Text-primary---gray700, #313131);">Зарегистрироваться</span>
            <span style="padding-left: 326px;"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.07825 15.5599C4.44232 15.9372 5.04681 15.9371 5.41074 15.5596L11.9818 8.7447C12.2477 8.4689 12.2477 8.03211 11.9818 7.7563L5.41075 0.94135C5.04681 0.563904 4.44233 0.563797 4.07826 0.941114C3.73229 1.29967 3.73221 1.86775 4.07807 2.22641L9.88735 8.2505L4.07807 14.2746C3.7322 14.6332 3.73228 15.2013 4.07825 15.5599Z" fill="#313131"/>
            </svg></span>
        </button>
    </v-form>
    </main>
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

    padding-left: 15px;
    align-items: center;
    display: flex;
    justify-content: left;
    text-align: center;
    margin: 0 auto;
    padding-left: 0px;
    font-size: 14px;
    display: flex;
    width: 516px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 2px;
    background-color: white;
    transition: border-color 0.3s ease;
    background: var(--Gray-White, #FFF);
    outline: none;
}

</style>