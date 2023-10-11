<script setup>
// import {defineProps, defineEmit} from vue

const props = defineProps({
    status:String,
    error:Boolean,
    is_dayoff:Boolean,
})

</script>

<template>
    <main style="
    width: 42px;
    height: 42px;
    margin: 2px;
    ">
    <div style="
    position: relative;
    /* top: -42px; */
    left: 0px;
    z-index: -1;">
        <article v-if='status==="empty"'>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="6" fill="#FFFEFE"/>
            </svg>
        </article>
        <article v-else-if='status==="box_start"'>
            <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg" 
            style="position: relative;
            top: -7px;
            left: -6px;">
            <rect x="7" y="7" width="40" height="41" rx="6" fill="#FFFEFE"/>
            <path d="M38.3916 8.97472L8.11578 40.5389C5.06688 43.7175 7.3197 49 11.7242 49H25.2472H42C44.7614 49 47 46.7614 47 44V12.4358C47 7.93093 41.51 5.7236 38.3916 8.97472Z" fill="#FFE1A8"/>
            </svg>
        </article>
        <article  v-else-if='status==="box"'>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="6" fill="#FFE1A8"/>
            </svg>
        </article>
        <article  v-else-if='status==="box_holi"'>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="41.4264" y="41.9019" width="41.397" height="41.9018" rx="6" transform="rotate(179.989 41.4264 41.9019)" fill="#9AB0FE"/>
            <path d="M8.84145 40.3211L39.8096 8.96313C43.0688 5.66291 40.7589 0.0215841 36.1488 0.0224772L5.17462 0.0284775C2.31676 0.0290312 0.000454279 2.37449 0.00101466 5.26721L0.00708821 36.6191C0.00799218 41.2855 5.58225 43.6213 8.84145 40.3211Z" fill="#FFE1A8"/>
            </svg>

        </article>  
        <article  v-else-if='status==="holi"'>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="6" fill="#9AB0FE"/>
            </svg>
        </article>
        <article  v-else-if='status==="holi_finish"'>
            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="41.8542" height="42" rx="6" fill="#FFFEFE"/>
            <path d="M8.4989 39.6746L40.2496 8.5718C43.4495 5.43719 41.2301 8.28779e-06 36.7507 8.66736e-06L22.6785 9.85981e-06L5 1.13578e-05C2.23858 1.15918e-05 3.50201e-06 2.23859 3.75108e-06 5.00001L6.55634e-06 36.1028C6.95587e-06 40.5325 5.3345 42.7744 8.4989 39.6746Z" fill="#9AB0FE"/>
            </svg>
        </article>
        <article  v-else-if='status==="holi_start"'>
            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="41.8542" height="42" rx="6" fill="#FFFEFE"/>
            <path d="M8.4989 39.6746L40.2496 8.5718C43.4495 5.43719 41.2301 8.28779e-06 36.7507 8.66736e-06L22.6785 9.85981e-06L5 1.13578e-05C2.23858 1.15918e-05 3.50201e-06 2.23859 3.75108e-06 5.00001L6.55634e-06 36.1028C6.95587e-06 40.5325 5.3345 42.7744 8.4989 39.6746Z" fill="#9AB0FE"/>
            </svg>
        </article>
    </div>
    <div style="
        position: relative;
        top: -43px;
        left: 17px;">
        <article v-if='is_dayoff'
        >
            
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0550874 1.022L24.9247 26.0592L24.9945 12.6822L25.0246 6.91944L24.7933 4.36486L23.7828 2.37846L22.2768 1.39107L20.2738 0.904619L17.7739 0.919134L11.774 0.953967L0.0550874 1.022Z" fill="#FF7A7A"/>
            </svg>

            
        </article>
    </div>
    </main>
</template>

<style scoped>
article{
    height: 42px;
    width: 42px;
}
</style>

//Q78YFBLHJA9