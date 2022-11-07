<script lang="ts" setup>
const props = defineProps({
  modelValue: Boolean,
  text: {
    type: String,
    required: true,
  },
  disabled: Boolean,
})
const emit = defineEmits(['update:modelValue'])
const checked = useVModel(props, 'modelValue', emit)
</script>

<template>
  <button
    class="
      w-12 h-6 inline-flex
      rounded-full border-2 border-transparent
      focus:ring-1 ring-offset-1 ring-blue-600
      transition-colors ease-in-out duration-200
    "
    :class="checked
      ? 'bg-green-700'
      : 'bg-gray-600'
    "
    role="switch"
    :aria-label="text"
    :aria-checked="checked"
    :disabled="disabled"
    @click="checked = !checked"
  >
    <span class="sr-only">{{ text }}</span>
    <span
      aria-hidden="true"
      class="h-5 w-5 rounded-full bg-white transition ease-in-out duration-200"
      :class="checked
        ? 'right-0 ml-auto'
        : 'left-0 mr-auto'
      "
    />
  </button>
</template>
