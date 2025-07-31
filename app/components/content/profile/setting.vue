<template>
    <div class="w-full h-full py-4 flex flex-col gap-6">
        <div class="w-full flex flex-col gap-2">
            <code class="font-bold text-gray-400 text-md">
                Themes
            </code>
            <div class="w-full flex flex-col gap-1">
                <div class="h-12 flex flex-row justify-between items-center pr-2">
                   <div class="flex flex-row gap-2">
                        <div class="-mt-1 h-10 w-10 aspect-square rounded-full text-4xl flex items-center justify-center">
                            🎨
                        </div>
                        <div class="h-full text-2xl flex  items-center">Colors</div> 
                   </div>
                   <div class="badge badge-primary cursor-pointer rounded-full w-20">Indingo</div>
                </div>
            </div>
            <div class="w-full flex flex-col gap-1">
                <div class="h-12 flex flex-row justify-between items-center pr-2">
                   <div class="flex flex-row gap-2">
                        <div class="-mt-1 h-10 w-10 aspect-square rounded-full text-4xl flex items-center justify-center">
                            ☀️
                        </div>
                        <div class="h-full text-2xl flex  items-center">Light</div> 
                   </div>
                   <input
                    type="checkbox"
                    checked="checked"
                    class="toggle border-red-600 bg-red-500 checked:border-green-500 checked:bg-green-400 checked:text-white"
                    />
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col gap-2">
            <code class="font-bold text-gray-400 text-md">
                Sounds
            </code>
            <div class="w-full flex flex-col gap-1">
                <div class="h-12 flex flex-row justify-between items-center pr-2">
                   <div class="flex flex-row gap-2">
                        <div class="-mt-1 h-10 w-10 aspect-square rounded-full text-4xl flex items-center justify-center">
                            🔊
                        </div>
                        <div class="h-full text-2xl flex  items-center">SFX</div> 
                   </div>
                   <input
                    type="checkbox"
                    checked="checked"
                    class="toggle border-red-600 bg-red-500 text-white checked:border-green-500 checked:bg-green-400 checked:text-white"
                    />
                </div>
            </div>
            <div class="w-full flex flex-col gap-1">
                <div class="h-12 flex flex-row justify-between items-center pr-2">
                   <div class="flex flex-row gap-2">
                        <div class="-mt-1 h-10 w-10 aspect-square rounded-full text-4xl flex items-center justify-center">
                            🎵
                        </div>
                        <div class="h-full text-2xl flex  items-center">Music</div> 
                   </div>
                   <input
                    type="checkbox"
                    checked="checked"
                    class="toggle border-red-600 bg-red-500 text-white checked:border-green-500 checked:bg-green-400 checked:text-white"
                    />
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col gap-2">
            <code class="font-bold text-gray-400 text-md">
                Misc
            </code>
            <div class="w-full flex flex-col gap-1">
                <div class="h-12 flex flex-row justify-between items-center pr-2">
                   <div class="flex flex-row gap-2">
                        <div class="-mt-1 h-10 w-10 aspect-square rounded-full text-4xl flex items-center justify-center">
                            📜
                        </div>
                        <div class="h-full text-xl flex  items-center">Withdrawal Historics</div> 
                   </div>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
            <div class="w-full flex flex-col gap-1">
                <div class="h-12 flex flex-row justify-between items-center pr-2">
                   <div class="flex flex-row gap-2">
                        <div class="-mt-1 h-10 w-10 aspect-square rounded-full text-4xl flex items-center justify-center">
                            📜
                        </div>
                        <div class="h-full text-xl flex  items-center">Transfer Historics</div> 
                   </div>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>