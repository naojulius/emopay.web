export type EmojiItem = {
    name: string
    emoji: string
    rarity: string
    durationHours: number
    coinsPerHour: number
}

export type CountedEmojiItem = EmojiItem & { count: number }
  