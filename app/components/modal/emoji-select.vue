<template>
    <div class="h-screen w-screen p-2 flex items-center justify-center select-none">
      <div class="min-h-1/2 w-96 bg-white rounded-lg shadow-lg border-t-4 border-amber-500 relative">
            <h1 class="text-center p-2 text-lg font-semibold">
                Choose emoji
            </h1>
            <div class="h-full w-full flex flex-row justify-start flex-wrap gap-2 px-4">
                <div
                    v-for="(emoji, index) in emojis"
                    :key="index"
                    class="w-28 aspect-square cursor-pointer"
                >
                    <div class="text-6xl flex items-center justify-center bg-amber-100 border-2 rounded-lg h-full w-full">
                    {{ emoji }}
                    </div>
                </div>
                </div>
            <div class="w-12 aspect-square absolute -top-4 right-0 text-2xl flex items-center justify-center bg-red-100 rounded-full ring-2 ring-red-500 cursor-pointer">
                ❌ 
            </div>
      </div>
    </div>
  </template>

<script lang="ts" setup>
    const emojis = ['😄', '😅', '😂', '😊', '😍', '😎', '🤪', '🤩']
</script>