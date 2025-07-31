import { defineStore } from 'pinia';
import type { CountedEmojiItem, EmojiItem } from '~/types/emoji.item.type';
export const useEmojiStore = defineStore('emojiStore', () => {
    const Emojis  = ref<EmojiItem[]>([
        {
            name: "Smile",
            emoji: "🙂",
            rarity: "common",
            durationHours: 24,
            coinsPerHour: 0.001
          },
          {
            name: "Cool",
            emoji: "😎",
            rarity: "rare",
            durationHours: 24,
            coinsPerHour: 0.002
          },
          {
            name: "Robot",
            emoji: "🤖",
            rarity: "legendary",
            durationHours: 48,
            coinsPerHour: 0.01
          },
          {
            name: "Smile",
            emoji: "🙂",
            rarity: "common",
            durationHours: 24,
            coinsPerHour: 0.001
          },
          {
            name: "Smile",
            emoji: "🙂",
            rarity: "common",
            durationHours: 24,
            coinsPerHour: 0.001
          },
          
    ])

    const GetCountedAvailableEmojis = () =>{
        const map = new Map<string, CountedEmojiItem>()

        for (const item of Emojis.value) {
          const key = JSON.stringify(item) // you can also customize the key to use only name+emoji
          if (!map.has(key)) {
            map.set(key, { ...item, count: 1 })
          } else {
            const existing = map.get(key)!
            existing.count++
          }
        }
      
        return Array.from(map.values())
    } 

    const GetCoinsPerSecond = () => {
        // 1 hour = 3600 seconds
        return Emojis.value.reduce((total, emoji) => {
          return total + (emoji.coinsPerHour / 3600);
        }, 0);
      }

    const GetAvailableEmojis = () =>{
        return Emojis
    } 
    
    return { GetAvailableEmojis, GetCountedAvailableEmojis, GetCoinsPerSecond }
  })