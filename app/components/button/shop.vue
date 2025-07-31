<template>
    <button class="btn btn-wide btn-warning rounded-xl border-b-0 active:border-b-3 transition-all duration-200">
        📢 Shop with ad <code class="font-bold">x{{ props.count }}</code>
    </button>
</template>
<script lang="ts" setup>
const props = defineProps({
  count: {
    required: true,
    type: Number,
  },
})
</script>