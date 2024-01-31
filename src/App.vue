<script setup>
    import { onMounted } from 'vue';
    import { useGlobalStore } from './store/global.store'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    // access the `store` variable anywhere in the component ✨

    const store = useGlobalStore()

    onMounted(() => {
       if ((store.getToken() != '' && store.getToken())) {
            console.log('hui smotrit na token')
            // router.push('/auth')
       }
    })
</script>

<template>
    
    <v-app>
        <RouterView></RouterView>
    </v-app>
</template>

<style scoped>

*{
    font-family: 'Evolventa regular';
}

</style>
