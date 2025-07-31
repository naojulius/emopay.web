<template>
    <button :class="['bg-gray-200 p-1 rounded-xl aspect-square h-12 text-4xl cursor-pointer', menuindex == 0 ? '-mt-4' : 'mt-0']">
        🏡
    </button>
</template>
<script lang="ts" setup>
import {useBottomMenuStore} from "~/stores/menu.store"
    const store = useBottomMenuStore();
    const menuindex = computed(() => store.bottomMenuIndex)
</script>