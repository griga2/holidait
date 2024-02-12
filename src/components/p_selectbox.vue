    <script setup>
    import {defineModel, ref} from 'vue'

    const props = defineProps({
        width: Number,
        variants: Array,
        value: Object,
        finder: Boolean,
    })

    const emit = defineEmits(['change_variant',''])

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
                :value="props?.value?.text || null"
                :style="{
                    padding: '0px 0px 0px 25px',
                }"
            >
            <article id="arrow"
            :style="{
                left:`${props.width - 15}px`
            }">
                <svg 
                
                style="
                    position: absolute;
                    z-index: 4;
                    top: 2px;"
                
                :style="{
                    left: ((props.width - 22) * -1 )+ 'px'
                }"
                width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7415 15.4843L12.5507 11.2762C13.6283 10.0396 14.2186 8.48359 14.2186 6.86374C14.2186 3.07913 11.0293 0 7.10932 0C3.1893 0 0 3.07913 0 6.86374C0 10.6484 3.1893 13.7275 7.10932 13.7275C8.58095 13.7275 9.98334 13.299 11.1823 12.4854L15.405 16.7255C15.5815 16.9024 15.8189 17 16.0732 17C16.314 17 16.5425 16.9114 16.7159 16.7502C17.0843 16.4079 17.0961 15.8403 16.7415 15.4843ZM7.10932 1.79054C10.0068 1.79054 12.364 4.06632 12.364 6.86374C12.364 9.66117 10.0068 11.9369 7.10932 11.9369C4.21181 11.9369 1.85461 9.66117 1.85461 6.86374C1.85461 4.06632 4.21181 1.79054 7.10932 1.79054Z" fill="#75A3CF"/>
                </svg>

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
            <article
            @click="() => {
                $emit('change_variant',varian)
                open = false;
            }"
             v-for="varian in variants" class="varic">
                {{ varian?.text || "error" }}
            </article>
        </section>

    </template>

    <style scoped>

    * {
        font-family: 'Evolventa regular';
        font-size: 14px;
        color: #1D4267;

    }


    #arrow{
        position: relative;
        z-index: 3;
        top: -30px;
    }

    #dropbox_block{
        position: absolute;
        border-radius: 5px;
        border: 1px solid var(--prymery, #75A3CF);
        top: 48px;
        background: #FFFEFE;
        z-index: 12;
        box-shadow: 2px -3px 16px 3px rgba(0, 0, 0, 0.25);
    }

    .varic{
        height:38px;
        display: flex;
        text-align: center;
        justify-content: start;
        align-items: center;
        padding: 0px 10px;
    }

    .varic:hover{
        background-color:#E3ECF4;
        border-radius: 5px;

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
        height: 38px;
        background: #FFFEFE;
        text-align: center;
        font-family: 'Evolventa regular';
        font-size: 14px;
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