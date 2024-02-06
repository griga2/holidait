<script setup>
    import { onMounted } from 'vue';
    import { useGlobalStore } from './store/global.store'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    // access the `store` variable anywhere in the component ✨

    const store = useGlobalStore()

    onMounted(() => {
       if (!store.getToken()) {
            console.log('hui smotrit na token')
            router.push('/auth/auth')
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


<style scoped>

* {
    font-family: 'Evolventa regular';
}

</style>
