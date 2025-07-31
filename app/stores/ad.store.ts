import { defineStore } from 'pinia';
export const useAdStore = defineStore('adStore', () => {

    const dailyRemainAdCount = ref(5);
    
    const UpdateDailyRemainAd = () => {
        dailyRemainAdCount.value -= 1
    }
    
    return { UpdateDailyRemainAd,  dailyRemainAdCount}
  })