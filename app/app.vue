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
  script.setAttribute('data-zone', '9304204');
  script.setAttribute('data-sdk', 'show_9304204');
  document.body.appendChild(script);
});
</script>
