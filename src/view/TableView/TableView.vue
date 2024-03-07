<script setup>
import { storeToRefs } from 'pinia';
import Table from './components/Table.vue'
import { useTableStore } from './store';
import { onMounted } from  'vue'

const store = useTableStore()
const {
    loader
} = storeToRefs(store)

onMounted( async () => {
    loader.value = true;
    await store.updateTable();
    loader.value = false;
})

</script>

<template>
    <main>
        <header>
            <section style="border-radius: 0px 15px 15px 0px; padding-left: 10px;">
                <article @click="$router.back()">
                        Н
                </article>
                <article>
                       
                </article>
                <article>
                        
                </article>
            </section>  
            <section>

            </section>
        </header>
        <Table v-if="!loader">
        
        </Table>
        <section v-else style="width: 100%; height: 30vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <span class="loader"></span>
        </section>
    </main>
   
</template>

<style scoped>

main{
    height: 100vh;
}

header article{
    background-color: #FFFFFF;
    height: 40px;
    width: 40px;
    margin-right: 6px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
}

header section{
    background-color: #DCE6EF;  
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 10px;
}

header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
}
    
.loader {
    width: 100px;
    height: 100px;  
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite    
  }
  .loader::before , .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #FFF;
    animation: prixClipFix 2s linear infinite ;
  }
  .loader::after{
    transform: rotate3d(90, 90, 0, 180deg );
    border-color: #1ba0ff;
  }

  @keyframes rotate {
    0%   {transform: rotate(0deg)}
    100%   {transform: rotate(360deg)}
  }

  @keyframes prixClipFix {
      0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
      50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
      75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
  }

</style>

