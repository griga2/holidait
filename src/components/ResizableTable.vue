<script lang="ts">
import { defineComponent } from 'vue'
interface IField {
  key: string
  checked?: boolean
  label: string
  isRowHeader?: boolean
  width: number
}

export default defineComponent({
  name: 'ResizableTable',

  props: {
    fields: {
      type: Array<IField>,
      default: () => []
    },

    items: {
      type: Array<any>,
      default: () => []
    },

    empty_table_text: {
      type: String,
      default: 'Ни чего не найдено!'
    },

    index_active_row: {
      type: Number,
      default: null
    },

    color_active_row: {
      type: String,
      default: '#EAFEB3'
    },

    is_bottom_row: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      indexActiveRow: null
    }
  },

  watch: {
    index_active_row(newIndex) {
      this.indexActiveRow = newIndex
    }
  },

  methods: {
    onRowClick(item: any, index:number) {
      this.$emit('on_row_click', item, index)
    }
  }
})
</script>

<template>
  <section class="table">
    <table>
      <thead>
        <tr>
          <th
            v-for="(field, index) in fields"
            :style="`width: ${field.width}px; max-width: ${field.width}px;`"
            :key="index"
          >
            <slot :name="'head_' + field.key" :value="field.key" :index="index" :item="field">
              {{ field.label }}
            </slot>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="items.length === 0">
          <td class="empty-table-text" :colspan="fields.length">{{ empty_table_text }}</td>
        </tr>

        <tr
          v-else
          v-for="(tr, tr_index) of items"
          :id="tr.id as string"
          :key="tr_index"
          @click="onRowClick(tr, tr_index)"
          class="row-table"
          :style="{
            'background-color': index_active_row === tr_index ? color_active_row : ''
          }"
        >
          <td
            v-for="(field, index) in fields"
            :style="`width: ${field.width}px; max-width: ${field.width}px;`"
            :key="index"
          >
            <slot :name="'body_' + field.key" :value="tr[field.key]" :item="tr" :index="tr_index">
              {{ tr[field.key] }}
            </slot>
          </td>
        </tr>
        <tr v-if="is_bottom_row">
          <td :colspan="fields.length" class="bottom-row-td">
            <slot name="bottom_row"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped lang="scss">
.table {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.empty-table-text {
  text-align: center;
  border-bottom: none;
  height: 50px;
}

.row-table {
  cursor: pointer;
}

table {
  border-spacing: 0;
  // border: 1px solid #ccc;
  // border-radius: 10px;
}

th {
  border: 0.5px solid #ccc;
  padding: 8px;
  // width: 50px;
  // min-width: 50px;
  height: 50px;
  min-height: 50px;
  position: sticky;
  top: 0px;
  // background-color: var(--gray-100, #f3f4f6);
  background-color: #fff;

  color: var(--gray-500, #6b7280);
  font-family: 'Golos Text VF';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  text-align: left;
  z-index: 1;
}

th:first-of-type {
  border-top-left-radius: 10px;
}
th:last-of-type {
  border-top-right-radius: 10px;
}

tr:hover {
  background: var(--gray-100, #f3f4f6);
}


td {
  padding: 8px;
  border-bottom: 0.5px solid #ccc;
  // width: 50px;
  // min-width: 50px;

  color: var(--gray-500, #6b7280);
  font-family: 'Golos Text VF';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
td:first-of-type {
  position: relative;
  padding: 0px;
}

.bottom-row-td {
  height: 55px; 
  border-bottom-left-radius: 10px; 
  border-bottom-right-radius: 10px;
}
</style>
