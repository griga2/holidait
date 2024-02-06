<script setup>
    import { onMounted } from 'vue';
    import { useGlobalStore } from './store/global.store'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    // access the `store` variable anywhere in the component ✨

    const store = useGlobalStore()

    onMounted(() => {
        console.log('hui smotrit')
        if (!store.getToken()) {
            console.log('hui smotrit na token')
            router.push('/auth/auth')
        } else {
            router.push('/layout')
        }   
    })
</script>

<template>
    
    <v-app
        style="background-color: #D1E3F4;
        overflow:hidden">
            <RouterView></RouterView>
    </v-app>
</template>

<style>

* {
    font-family: 'Evolventa regular';
}

</style>
