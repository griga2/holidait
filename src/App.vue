<script setup>
    import { onMounted } from 'vue';
    import { useGlobalStore } from './store/global.store'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const store = useGlobalStore()

    onMounted(async() => {
        console.log(await store.getToken(), "token ")
        if ((await store.getToken())) {
            console.log('hui smotrit na token')
            // router.push('/layout')
        } else {
            router.push('/auth/auth')
        }   
    })
</script>

<template>
        <main  
            style="background-color: #D1E3F4;
            overflow:hidden">
            <RouterView></RouterView>
        </main>

</template>


<style scoped>

* {
    font-family: 'Evolventa regular';
}

</style>
