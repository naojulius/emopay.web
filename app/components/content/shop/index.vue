<template>
    <div class="size-full flex flex-col items-center justify-center select-none relative">
      <div class="w-full flex flex-row items-center justify-center gap-2 relative">
        <div
          ref="emojiContainer"
          class="aspect-square w-52 bg-gray-50 rounded-xl border border-amber-300 relative overflow-visible"
        >
          <div class="text-[8rem] flex items-center justify-center size-full relative z-10">
            <span class="opacity-30 select-none">{{ emoji }}</span>
          </div>
  
          <!-- Sparkles container -->
          <div ref="sparkles" class="absolute inset-0 pointer-events-none"></div>
        </div>
      </div>
  
      <div class="py-2 flex flex-col gap-1 min-w-1/2">
        <ButtonShop />
        <ButtonBuy />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  import gsap from "gsap";
  
  const emoji = "👻";
  const emojiContainer = ref<HTMLElement | null>(null);
  const sparkles = ref<HTMLElement | null>(null);
  
  // Set of sparkle emojis to randomly pick from
  const sparkleEmojis = ["✨", "💫", "🌟", "⭐", "⚡"];
  
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
        duration: 0.1 + Math.random() * 0.3,
        ease: "power1.out",
        onComplete() {
          gsap.to(sparkleEl, {
            opacity: 0,
            duration: 0.05,
            delay: 0.1,
            onComplete() {
              sparkleEl.remove();
            },
          });
        },
      });
    }
  }
  </script>
  