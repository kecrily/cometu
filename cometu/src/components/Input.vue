<script lang="ts" setup>
const props = defineProps({
  modelValue: String,
  disabled: Boolean,
  placeholder: String,
})
const emit = defineEmits(['update:modelValue'])
const text = useVModel(props, 'modelValue', emit)
</script>

<template>
  <input
    v-model="text" :disabled="disabled"
    class="px-2 rounded-md focus:border-blue-500 border-2 outline-none"
    :class="{ 'text-gray-600': disabled }"
    :placeholder="'Input Here' || placeholder"
  >
</template>
