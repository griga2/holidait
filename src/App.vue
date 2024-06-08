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
        } else {
            router.push('/auth/auth')
        }   
    })
</script>

<template>
        <main  
            style="background-color: #C0D2E6;
            overflow:hidden">
            <RouterView></RouterView>
        </main>
</template>


<style>

* {
    font-family: 'Evolventa regular';
}

* ::-webkit-scrollbar {
  width: 10px;
  background-color: none;
  opacity: 0px;
}

/* Track */
* ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
* ::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
* ::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
    