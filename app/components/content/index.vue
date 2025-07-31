<template>
    <div class="size-full h-[82vh] overflow-hidden">
        <ContentHome :class="[menuindex == 0 ? '' : 'hidden']" />
        <ContentShop :class="[menuindex == 1 ? '' : 'hidden']" />
        <ContentMerge :class="[menuindex == 2 ? '' : 'hidden']" />
        <ContentProfile :class="[menuindex == 3 ? '' : 'hidden']" />
    </div>
</template>

<script lang="ts" setup>
import {useBottomMenuStore} from "~/stores/menu.store"
    const store = useBottomMenuStore();
    const menuindex = computed(() => store.bottomMenuIndex)
</script>