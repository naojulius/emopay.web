<template>
    <section class="w-full h-full flex flex-col">
        <NavigationTop />
        <slot />
        <NavigationBottom />
    </section>
    <Modal />
</template>