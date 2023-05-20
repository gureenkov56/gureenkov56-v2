<template>
  <div>
    <Tutorial />
    <XPBottomBar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import XPBottomBar from '@/components/XP/XPBottomBar/XPBottomBar.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: { XPBottomBar },
})
</script>

<style>
@import url('@/styles/windowsXP/windowsXP.scss');
</style>
