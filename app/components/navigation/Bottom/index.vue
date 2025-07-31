<template>
   <div class="h-20 p-2 flex justify-center select-none">
     <div class="w-[280px] p-1 h-full bg-amber-50 rounded-lg border-b-3 border-amber-500 flex flex-row gap-2 items-center justify-center">
        <NavigationBottomHome @click="navigate(0)"/>
        <NavigationBottomShop @click="navigate(1)"/>
        <NavigationBottomUpgrade @click="navigate(2)" />
        <NavigationBottomProfile  @click="navigate(3)"/>
     </div>
   </div>
</template>
<script lang="ts" setup>
import {useBottomMenuStore} from "~/stores/menu.store"
    const store = useBottomMenuStore();
    const navigate = (index: number) => {
        store.SetBottomMenuIndex(index);
    }
</script>