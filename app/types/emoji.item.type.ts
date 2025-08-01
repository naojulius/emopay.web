export type EmojiItem = {
    ukey: string,
    name: string
    emoji: string
    rarity: string
    durationHours: number
    coinsPerHour: number
}

export type CountedEmojiItem = EmojiItem & { count: number }
  