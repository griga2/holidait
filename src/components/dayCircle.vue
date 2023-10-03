<script setup>
import {defineProps, defineEmit} from vue

const props = defineProps({
    status:{
        default:"empty",
    },
    error:{
        default: false,
    }
})


const emit = defineEmit(['rightClick','leftClick'])

</script>

<template>
    <main style="
    ">
    <article v-if='sytle==="empty"'>
        
    </article>
    <article v-if='sytle==="box_start"'>

    </article>
    <article v-if='sytle==="box"'></article>
    <article v-if='sytle==="box_holi"'>

    </article>
    <article v-if='sytle==="holi"'>

    </article>
    <article v-if='sytle==="holi_finish"'>

    </article>

    </main>
</template>

<style scoped>
article{
    height: 42px;
    width: 42px;
}
</style>

//Q78YFBLHJA9