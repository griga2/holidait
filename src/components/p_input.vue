<script setup>
  import { defineProps, defineModel} from 'vue'

  const props = defineProps({
    label: {
      type: String,
      default:"",
    },
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default:"",
    },
  });
  const model = defineModel();
</script>

<template>
    <main class="input-wrap">
        <p>{{ label }}</p>
        <input
        :type="props.type" style="width: 100%; outline: none;" :model="model"/>
    </main>
</template>

<style scoped>

.input-wrap:active{
    outline: none;  
    border: 1px solid var(--prymery, #75A3CF);
    inline-size: none;
}

.input-wrap:hover{
    outline: none;  
    inline-size: none;
    border: 1px solid var(--prymery, #75A3CF);
}
.input-wrap{
  padding-left: 5px;
  font-size: 14px;
  display: flex;
  width: 446px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid var(--Gray-gray150, #75A3CF);
  background: var(--Gray-White, #FFF);
  outline: none;  
}

</style>