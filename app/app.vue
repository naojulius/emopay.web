<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
onMounted(() => {
  const script = document.createElement('script');
  script.src = '//libtl.com/sdk.js';
  script.defer = true;
  script.setAttribute('data-zone', '9655067');
  script.setAttribute('data-sdk', 'show_9655067');
  document.body.appendChild(script);
});
</script>
