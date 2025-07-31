import { defineStore } from 'pinia';
export const useModalStore = defineStore('modalStore', () => {
    const isModalEmojiSelection = ref(false)
    
    const show = (modal: string) => {
        isModalEmojiSelection.value = false

        switch (modal){
            case "select-emoji":
                console.log("=================>")
                isModalEmojiSelection.value = true
                break;
        }
    } 

    const hide = () =>{
        isModalEmojiSelection.value = false
    }
    
    return {
        show,
        hide 
    }

  })