import { defineStore } from 'pinia';
export const useBottomMenuStore = defineStore('bottomMenuStore', () => {
    const bottomMenuIndex = ref(0)

    const SetBottomMenuIndex = (index: number) =>{
        bottomMenuIndex.value = index;
    } 
    
    return { SetBottomMenuIndex,  bottomMenuIndex}
  })