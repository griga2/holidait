<script setup>
import {defineModel, ref} from 'vue'

const props = defineProps({
    width: Number,
    variants: [],
})

const value = defineModel()
const open = ref(true);
console.log(props.width)

</script>

<template>
    <section 
    @click = "() => {
        open = !open;
        console.log('hui')
    }"

    :style="{
            width:`${props.width}px`
        }">
        <input 
            id="main_input"
            v-model="value"
            :style="{
                padding: '0px 5px 0px 10px',
            }"
        >
        <article id="arrow"
        :style="{
            left:`${props.width - 15}px`
        }">
            <svg 
            :class="{
                    rot_arrow:!open,
                    no_rot_arrow:open
                }"
            xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
                <path d="M8 15.7847L8 2.2075C8 1.22656 6.73465 0.832062 6.17718 1.6392L1.40001 8.55589C1.16007 8.90329 1.16417 9.36394 1.41023 9.70702L6.1874 16.3675C6.75382 17.1573 8 16.7566 8 15.7847Z" stroke="#75A3CF" stroke-width="1.5"/>
            </svg>
        </article>
    </section>

    <section 
        v-if="!open"
        id="dropbox_block"
        :style="{
            width:`${props.width}px`
        }">
        <article v-for="varian in variants" class="varic">
            {{ varian?.text || "error" }}
        </article>
    </section>

</template>

<style scoped>

#arrow{
    position: relative;
    z-index: 3;
    top: -30px;
}

#dropbox_block{
    position: relative;
    border-radius: 5px;
    border: 1px solid var(--prymery, #75A3CF);
    top: -20px;
    background: #FFFEFE;
    box-shadow: 2px -3px 16px 3px rgba(0, 0, 0, 0.25);
}

.varic{
    height:42px;
    padding: 10px 10px 10px 10px;
}

.varic:hover{
    background-color:#E3ECF4;
}

.rot_arrow{
    transform: rotate(-90deg);
    transition: all 0.5s;
}

.open_variants{
    transform:scale(1) translateY(80px);
    transition: all 0.5s;
    padding: 0px;
}

.no_rot_arrow{
    transform: rotate();
    transition: all 0.5s;
}

#main_input{
    border-radius: 5px;
    border: 1px solid var(--prymery, #75A3CF);
    height: 42px;
    background: #FFFEFE;
    color: var(--text, #4E7BA7);
    text-align: center;
    font-family: Evolventa;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: start;
    outline: none;  
    padding-left: 5px;
    width: 100%;
}

input:active{
    outline: none;  
    border: 1px solid var(--prymery, #75A3CF);
    inline-size: none;

}

input:hover{
    outline: none;  
    inline-size: none;
    border: 1px solid var(--prymery, #75A3CF);
}

</style>