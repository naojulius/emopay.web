import { defineStore } from 'pinia';
export const useWalletStore = defineStore('walletStore', () => {
    const coins = ref(0.000)
    
    const AddCoin = (coin: number) => {
        coins.value += coin;
    }

    const SubstractCoin = (coin: number) => {
        coins.value -= coin;
    }
    
    const GetCoin = () =>{
        return coins.value.toFixed(3)
    }
    
    return { 
        GetCoin,
        AddCoin,  
        SubstractCoin}
  })