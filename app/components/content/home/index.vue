<template>
    <div class="select-none size-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-pink-100 overflow-hidden">
      <div
        ref="emojiContainer"
        class="relative size-full bg-white overflow-hidden"
      >
        <div
          class="absolute text-5xl aspect-square flex items-center justify-center cursor-pointer"
          v-for="(emoji, index) in emojis" :key="index" :ref="el => emojiRefs[index] = el">
          {{ emoji.emoji }}
          <code class="text-sm absolute -bottom-3 font-bold">
            x{{ emoji.count }}
          </code>
        </div>
      </div>

    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import gsap from 'gsap'
import { useEmojiStore } from '~/stores/emoji.store';
import { useWalletStore } from '~/stores/wallet.store';

const emojiStore = useEmojiStore();
const walletStore = useWalletStore();
  
  const emojis = emojiStore.GetCountedAvailableEmojis();
  const emojiRefs = ref<HTMLElement[]>([])
  const emojiContainer = ref<HTMLDivElement | null>(null)
  
  onMounted(() => {
    emojiRefs.value.forEach((el) => {
      animateEmoji(el)
    })
  })
  
  function animateEmoji(el: HTMLElement) {
    const box = emojiContainer.value?.getBoundingClientRect()
    if (!box) return
  
    const size = 50
  
    // Set random start position inside container for each emoji
    const startX = Math.random() * (box.width - size)
    const startY = Math.random() * (box.height - size)
    gsap.set(el, { x: startX, y: startY })
  
    function move() {
      const x = Math.random() * (box.width - size)
      const y = Math.random() * (box.height - size)
      const rotation = (Math.random() - 0.5) * 60 // -30 to +30 degrees
      const scale = 0.8 + Math.random() * 0.4 // scale 0.8 to 1.2
  
      gsap.to(el, {
        x,
        y,
        rotation,
        scale,
        duration: 3 + Math.random() * 3,
        ease: 'sine.inOut',
        onComplete: move,
      })
    }
  
    move()
  }
    let interval: any;

    onMounted(() => {
      interval = setInterval(() => {
        const coinsPerSecond = emojiStore.GetCoinsPerSecond();
        walletStore.AddCoin(coinsPerSecond);
      }, 1000); // every 1 second
    });

    onUnmounted(() => {
      clearInterval(interval);
    });
  </script>
  