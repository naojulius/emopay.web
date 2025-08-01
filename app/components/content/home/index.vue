<template>
  <div class="select-none size-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-pink-100 overflow-hidden">
    <div
      ref="emojiContainer"
      class="relative size-full bg-white overflow-hidden bg-red-100"
    >
      <div
        class="absolute text-5xl aspect-square flex items-center justify-center cursor-pointer"
        v-for="(emoji, index) in emojis"
        :key="emoji.ukey"
        :ref="el => setEmojiRef(el as any, emoji.ukey)"
      >
        {{ emoji.emoji }}
        <code class="text-sm absolute -bottom-3 font-bold">
          x{{ emoji.count }}
        </code>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed, nextTick, watch } from 'vue'
import gsap from 'gsap'
import { useEmojiStore } from '~/stores/emoji.store'
import { useWalletStore } from '~/stores/wallet.store'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const emojiStore = useEmojiStore()
const walletStore = useWalletStore()

const emojis = computed(() => emojiStore.GetCountedAvailableEmojis())
const emojiRefs = ref<Map<string, HTMLElement>>(new Map())
const emojiContainer = ref<HTMLDivElement | null>(null)
const animatedKeys = ref(new Set<string>())


watch(
  () => emojis.value.map(e => e.ukey),
  async () => {
    await nextTick()

    for (const emoji of emojis.value) {
      const el = emojiRefs.value.get(emoji.ukey)
      if (el && !animatedKeys.value.has(emoji.ukey)) {
        animateEmoji(el, true)
        animatedKeys.value.add(emoji.ukey)
        console.log(emoji)
      }
    }
  },
  { immediate: true }
)


function setEmojiRef(el: HTMLElement | null, ukey: string) {
  if (el) {
    emojiRefs.value.set(ukey, el)
    animateEmoji(el)
  } else {
    emojiRefs.value.delete(ukey)
  }
}

function animateEmoji(el: HTMLElement, isOld = true) {
  const box = emojiContainer.value?.getBoundingClientRect()
  if (!box) return

  const size = 50
  const centerX = box.width / 2 - size / 2
  const centerY = box.height / 2 - size / 2

  gsap.set(el, {
    x: centerX,
    y: centerY,
    opacity: 0,
    scale: 0.8,
  })

  gsap.to(el, {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  })

  const path = generateRandomPath(centerX, centerY, box.width, box.height)

  if (!isOld){
    console.log("Path =>", path)
  }
  
  gsap.to(el, {
    motionPath: {
      path,
      autoRotate: false,
    },
    scale: 1,
    duration: 50,
    repeat: -1,
    yoyo: true,
  })
}

function generateRandomPath(startX: number, startY: number, width: number, height: number) {
  const points = []
  const steps = 5 + Math.floor(Math.random() * 3)

  for (let i = 0; i < steps; i++) {
    points.push({
      x: Math.random() * (width - 50),
      y: Math.random() * (height - 50),
    })
  }

  return points
}

let interval: any
onMounted(() => {
  interval = setInterval(() => {
    const coinsPerSecond = emojiStore.GetCoinsPerSecond()
    walletStore.AddCoin(coinsPerSecond)
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})

</script>
