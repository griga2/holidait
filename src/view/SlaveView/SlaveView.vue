<script setup>
    import SlavesTable from './components/SlavesTable.vue';
    import {useSlavesStore} from './store/index.js'
    import { onMounted,  } from 'vue'
    import {storeToRefs} from 'pinia';

    const store = useSlavesStore();
    const {} = storeToRefs(store)

    onMounted(() => {
      store.getSlaves();
    })
</script>

<template>  
    <header>
            
    </header>
    <main>
      <SlavesTable></SlavesTable>
    </main>
</template>

<style scoped lang="scss">

header{
    height: 100px;
}

.request {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 8px;
}

.content {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  flex: 1;
  border-radius: 10px;
  border: 1px solid #ccc;

  ::v-deep() {
    .table {
      border: none;
    }
  }
}
</style>