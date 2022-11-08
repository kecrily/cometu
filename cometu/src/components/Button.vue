<script lang="ts" setup>
defineProps({
  disabled: Boolean,
})
</script>

<template>
  <button
    class="
      inline-flex text-center items-center
      text-white text-xl rounded-md
      h-10 px-4
      focus-visible:ring-1 ring-offset-2 ring-blue-600
    "
    :class="disabled
      ? 'bg-blue-900 !cursor-not-allowed'
      : 'bg-blue-600 hover:bg-blue-500 @dark:bg-blue-700 hover:@dark:bg-blue-600'"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
    <slot />
  </button>
</template>
