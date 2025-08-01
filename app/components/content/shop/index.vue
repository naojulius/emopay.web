<template>
    <div class="size-full flex flex-col items-center justify-center select-none relative">
      <div class="w-full flex flex-row items-center justify-center gap-2 relative">
        <div
          ref="emojiContainer"
          class="aspect-square w-52 bg-gray-50 rounded-xl border border-amber-300 relative overflow-visible"
        >
          <div class="text-[8rem] flex items-center justify-center size-full relative z-10">
            <span :class="['select-none', isEmojiTransparent ? 'opacity-30' : 'opacity-100']">{{ emoji }}</span>
          </div>
  
          <div ref="sparkles" class="absolute inset-0 pointer-events-none z-20"></div>
        </div>
      </div>
  
      <div class="py-2 flex flex-col gap-1 min-w-1/2">
        <ButtonShop  @click="onShop" :count="dailyRemainAd"/>
        <ButtonBuy />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  import gsap from "gsap";
  import { openMonetagAd } from '~/types/helpers/monetag.helper';
  import { useAdStore } from '~/stores/ad.store';
import { useEmojiStore } from "~/stores/emoji.store";
import type { EmojiItem } from "~/types/emoji.item.type";
const emojiStore = useEmojiStore();
    const adStore = useAdStore();
    const dailyRemainAd = computed(()=>adStore.dailyRemainAdCount)
  
  const emoji = ref("👻");
  const emojiContainer = ref<HTMLElement | null>(null);
  const sparkles = ref<HTMLElement | null>(null);
  const isEmojiTransparent = ref(true);
  
  // Set of sparkle emojis to randomly pick from
  const sparkleEmojis = ["✨", "💫", "🌟", "⭐", "⚡"];
  const staticEmojis =  ["😀", "😂", "😍", "🤔", "😎", "😭", "😡", "😴", "🥶", "🤯"]
  
  function sparkle() {
    if (!emojiContainer.value || !sparkles.value) return;
  
    const sparkleCount = 20;
    const containerRect = emojiContainer.value.getBoundingClientRect();
  
    // Clear old sparkles
    sparkles.value.innerHTML = "";
  
    for (let i = 0; i < sparkleCount; i++) {
      const sparkleEl = document.createElement("div");
      sparkleEl.style.position = "absolute";
      sparkleEl.style.fontSize = "1.5rem";
      sparkleEl.style.userSelect = "none";
      sparkleEl.style.pointerEvents = "none";
      sparkleEl.style.willChange = "transform, opacity";
  
      // Pick a random sparkle emoji
      sparkleEl.textContent =
        sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
  
      // Start roughly at center with random offset
      sparkleEl.style.left = "50%";
      sparkleEl.style.top = "50%";
      sparkleEl.style.transform = "translate(-50%, -50%) scale(0)";
      sparkles.value.appendChild(sparkleEl);
  
      // Animate sparkle: scale up, move randomly, fade out quickly
      gsap.to(sparkleEl, {
        scale: 1,
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        opacity: 1,
        duration: 0.05 + Math.random() * 0.3,
        ease: "power1.out",
        onComplete() {
          gsap.to(sparkleEl, {
            opacity: 0,
            duration: 0.01,
            delay: 0,
            onComplete() {
              sparkleEl.remove();
            },
          });
        },
      });
    }
  }

  const n = ref(0);
  let intervalId: ReturnType<typeof setInterval> | null = null;


const onShop = () => {
  if (dailyRemainAd.value <= 0) return;
  if (intervalId !== null) return;

  openMonetagAd()
    .then(() => {
      adStore.UpdateDailyRemainAd();
      isEmojiTransparent.value = true;
      intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * staticEmojis.length);
        emoji.value = staticEmojis[randomIndex];
        n.value++;

        if (n.value >= 50) {
          stopShop();
          isEmojiTransparent.value = false;
          var random = getRandomEmoji();
          var d = {
            ukey: Date.now.toString().trim(),
            name: "NEW",
            emoji: random,
            rarity: "common",
            durationHours: 24,
            coinsPerHour: 0.001
          } as EmojiItem;

          emojiStore.AddEmojiFromAds(d)
          emoji.value = random;
        }
      }, 10);
    })
    .catch(() => {
      alert('⚠️ Ad failed or skipped')
    }) 
};

const stopShop = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    n.value = 0;
    sparkle();
  }
};


const commonEmojis = ["😀", "😃", "😄"];
const rareEmojis = ["😎", "🥳"];
const epicEmojis = ["🤩"];
const legendaryEmojis = ["🧙‍♂️"];
const mythicEmojis = ["🦄"];

const emojiPools = [
  { list: commonEmojis, weight: 60 },     // 60%
  { list: rareEmojis, weight: 25 },       // 25%
  { list: epicEmojis, weight: 10 },       // 10%
  { list: legendaryEmojis, weight: 4 },   // 4%
  { list: mythicEmojis, weight: 1 },      // 1%
];

const getRandomEmoji = () => {
  const totalWeight = emojiPools.reduce((sum, pool) => sum + pool.weight, 0);
  const rand = Math.random() * totalWeight;

  let cumulative = 0;
  for (const pool of emojiPools) {
    cumulative += pool.weight;
    if (rand < cumulative) {
      const emojis = pool.list;
      if (emojis.length === 0) break; // fallback to common if list is empty
      const index = Math.floor(Math.random() * emojis.length);
      return emojis[index];
    }
  }

  // Fallback to a random common emoji
  const fallbackIndex = Math.floor(Math.random() * commonEmojis.length);
  return commonEmojis[fallbackIndex];
}    
</script>
  