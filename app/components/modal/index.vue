<template>
    <section class="h-screen w-screen z-50 absolute top-0 bg-[#00000080]" v-if="state">
        <ModalEmojiSelect />
    </section>
</template>
<script lang="ts" setup>
import { useModalStore } from '~/stores/modal.store';

const modal = useModalStore();
const state = computed(()=>modal.isModalEmojiSelection)
</script>