import { defineStore } from 'pinia';
import type { CountedEmojiItem, EmojiItem } from '~/types/emoji.item.type';
export const useEmojiStore = defineStore('emojiStore', () => {
    const Emojis  = ref<EmojiItem[]>([
      {
        ukey: 'hFyd586Dd',
        name: "Smile",
        emoji: "🙂",
        rarity: "common",
        durationHours: 24,
        coinsPerHour: 0.001,
      },
      {
        ukey: 'kLqv349Xs',
        name: "Cool",
        emoji: "😎",
        rarity: "rare",
        durationHours: 24,
        coinsPerHour: 0.002,
      },
      {
        ukey: 'rTzj872Pm',
        name: "Robot",
        emoji: "🤖",
        rarity: "legendary",
        durationHours: 48,
        coinsPerHour: 0.01,
      },
      {
        ukey: 'mNcY159Qw',
        name: "Smile",
        emoji: "🙂",
        rarity: "common",
        durationHours: 24,
        coinsPerHour: 0.001,
      },
      {
        ukey: 'xGjB603Wr',
        name: "Smile",
        emoji: "🙂",
        rarity: "common",
        durationHours: 24,
        coinsPerHour: 0.001,
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

    const AddEmojiFromAds = (emoji: any) => {
      Emojis.value.push(emoji)
    }
    
    return { GetAvailableEmojis, GetCountedAvailableEmojis, GetCoinsPerSecond, AddEmojiFromAds }
  })