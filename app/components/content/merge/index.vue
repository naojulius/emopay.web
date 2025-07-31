<template>
    <div class="size-full flex flex-col items-center justify-center select-none">
        <div class="w-full flex flex-row items-center justify-center gap-2">
               <div class="aspect-square w-32 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-300" @click="onClickEmoji">
                   <div class="text-[5rem] flex items-center justify-center">
                        -
                   </div>
               </div> 
                <div class="relative">
                    <code class="text-6xl">
                        +
                    </code>
                </div>
               <div class="aspect-square w-32 bg-gray-200 rounded-xl">
                <div class="text-[5rem] flex items-center justify-center">
                    -
                   </div>
               </div> 
        </div>
        <div class="p-5">
            <Button />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useModalStore } from '~/stores/modal.store';
import { useMergeStore } from '~/stores/merge.store';

const modal = useModalStore();
const merge = useMergeStore();

const onClickEmoji = () =>{
    modal.show('select-emoji');
}
</script>