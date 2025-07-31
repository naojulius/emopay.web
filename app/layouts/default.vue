<template>
    <section class="w-full h-full flex flex-col select-none">
        <NavigationTop />
        <slot />
        <NavigationBottom />
    </section>
    <Modal />
</template>
