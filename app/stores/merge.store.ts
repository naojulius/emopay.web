import { defineStore } from 'pinia';
export const useMergeStore = defineStore('mergeStore', () => {
    const emoji = ref(null)
    const tool = ref(null)

    const setMergeEmoji = (emoji: any) =>{
        emoji.value = emoji;
    } 

    const setMergeTool = (tool: any) =>{
        tool.value = tool;
    } 
    
    return { setMergeEmoji,  setMergeTool}
  })