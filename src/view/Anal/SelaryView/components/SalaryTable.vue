<script setup>
    import ResizableTable from '../../../../components/ResizableTable.vue'
    import { onMounted, ref } from 'vue' 
    import { useSelaryAnalStore } from '../store/index.js'
    import { storeToRefs } from 'pinia';

    const store = useSelaryAnalStore();
    const {anal, date} = storeToRefs(store)
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
        label: 'Сотрудник',
        width: 100
      },
      {
        key: 'work_time',
        checked: true,
        label: 'Рабочих часов',
        width: 100
      },
      {
        key: 'selary',
        checked: true,
        label: 'ЗП',
        width: 100
      },
      {
        key: 'nobay_selary',
        checked: true,
        label: 'неоплаченное ЗП',
        width: 100
      },
    ])

    onMounted(async () => {
      await store.getToken()
      await store.getAnal();
    })
</script>

<template>
  <header>
    <VueDatePicker 
      style="width: 110px;" 
      v-model="date"
      range 
      placeholder="Select Time"
    ></VueDatePicker>

    <button @click="
      store.getAnal();
    ">Обновить</button>
  </header>
     <main>
        <ResizableTable :fields="fields" :items="anal" @on_row_click="onRowClickTable">
            <template #head_id>
              
            <div class="table-head">
               
            </div>
            </template>

            <template #body_id="{ item }">
              <section v-if="item.type!='head'">

                <div :class="{

                }"></div>
                <div @click.stop class="table-checkbox-block">
                    
                </div>
              </section>
              <section v-else>

              </section>
            </template>

            <template #body_name="{item}">  
              <section v-if="item.type!='head'">
                <span>{{item.slave.name}}</span>
              </section>
              <section v-else>
                Итого
              </section>
            </template>

            <template #body_work_time="{item}">  
              <section v-if="item.type!='head'">
                <span>{{item.work_time.toFixed(2)}}</span>
              </section>
              <section v-else>
                <span>{{item.work_time.toFixed(2)}}</span>
              </section>
            </template>
            
            <template #body_selary="{item}">  
              <section v-if="item.type!='head'">
                <span>{{item.selary_sum.toFixed(2)}}</span>
              </section>
              <section v-else>
                <span>{{item.selary_sum.toFixed(2)}}</span>
              </section>
            </template>

            <template #body_nobay_selary="{item}">
              <section v-if="item.type!='head'">
                <!-- <span>{{item.slave?.role}}</span> -->
                 0
              </section>
              <section v-else>
                <!-- <span>{{item.selary_sum}}</span> -->
                 0
              </section>
            </template>
        </ResizableTable>
    </main>
</template>

<style scoped lang="scss">

header{
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 24px;
  margin-bottom: 0px;
  margin-top: 0px;
}

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