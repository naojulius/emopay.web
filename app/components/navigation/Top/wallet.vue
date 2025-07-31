<template>
    <button class="btn rounded-xl px-2 flex items-center justify-center">
        <code class="text-2xl flex items-center justify-center">
            <code class="text-lg font-semibold">
                {{ coin }}
            </code> 
            💰
        </code>
    </button>
</template>
<script lang="ts" setup>
import { useWalletStore } from '~/stores/wallet.store';

const walletStore = useWalletStore();
const coin = computed(()=>walletStore.GetCoin())
</script>