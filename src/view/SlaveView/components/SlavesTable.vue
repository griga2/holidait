<script setup>
    import ResizableTable from '../../../components/ResizableTable.vue'
    import { ref } from 'vue' 

    const fields = ref([
    {
    key: 'id',
    checked: true,
    label: 'ID',
    isRowHeader: true,
    width: 40
  },
  {
    key: 'name',
    checked: true,
    label: 'Имя',
    width: 100
  },
  {
    key: 'role',
    checked: true,
    label: 'Должность',
    width: 100
  },
])
</script>

<template>
    <header>
        
    </header>
    <main>
        <ResizableTable :fields="fields" :items="items" @on_row_click="onRowClickTable">
            <template #head_id>
            <div class="table-head">
               
            </div>
            </template>

            <template #body_id="{ item }">
            <div :class="{

            }"></div>
            <div @click.stop class="table-checkbox-block">
                
            </div>
            </template>

            <template #body_name="{item}">
              <span>{{item.name}}</span>
            </template>

            <template #body_role="{item}">
              <span>{{item.role}}</span>
            </template>
        </ResizableTable>
    </main>
</template>

<style scoped lang="scss">
::v-deep() {
  th {
    border-top: none;
  }
}

.table-head {
  display: flex;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
}

.table-checkbox-block {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  min-height: 50px;
}

.table-contragent {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 60px;
}

.table-status {
  width: 2px;
  height: 12px;
  border-radius: 0px 3px 3px 0px;
  background: var(--green-400, #31c48d);
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.table-type-block {
  display: flex;
  gap: 5px;

  &__item {
    background-color: #f3f4f6;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 6px;
  }
}

.table-navbar {
  position: absolute;
  bottom: 62px;
  right: 0px;
  left: 0px;

  &__btn {
    border-radius: var(--rounded-lg, 8px);
    background: var(--gray-700, #374151);
    border: none;

    color: var(--white, #fff);
    font-family: 'Golos Text VF';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
  }
}

main{
    margin-top: 0px;
    padding: 22px;
    height: calc(100% - 22px - 100px);
}


header{
    height: 46px;
}
</style>