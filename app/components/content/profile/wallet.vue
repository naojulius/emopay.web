<template>
    <div class="p-4 flex flex-col gap-5">
            <code class="text-3xl text-center">$MOJI {{coin}} </code>
            <div class="w-full flex gap-6">
                <div class="inline-flex gap-2 flex flex-col items-center justify-center">
                    <button class="btn btn-circle text-5xl overflow-hidden">
                        🔄
                    </button>
                    <code>
                        Exchange
                    </code>
                </div>

                <div class="inline-flex gap-2 flex flex-col items-center justify-between">
                    <button class="btn btn-circle text-5xl overflow-hidden">
                        💸
                    </button>
                    <code>
                        withdraw
                    </code>
                </div>

                <div class="inline-flex gap-2 flex-col items-center justify-center">
                    <button class="btn btn-circle text-5xl overflow-hidden">
                        🛍️
                    </button>
                    <code>
                        shop
                    </code>
                </div>

                <div class="inline-flex gap-2 flex-col items-center justify-center">
                    <button class="btn btn-circle text-5xl overflow-hidden">
                        🎁
                    </button>
                    <code>
                        claim
                    </code>
                </div>
            </div>
    </div>
</template>
<script lang="ts" setup>
import { useWalletStore } from '~/stores/wallet.store';

const walletStore = useWalletStore();
const coin = computed(()=>walletStore.GetCoin())
</script>