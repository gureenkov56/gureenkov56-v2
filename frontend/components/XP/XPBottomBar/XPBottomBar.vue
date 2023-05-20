<template>
  <div id="XPBottomBar">
    <XPStartButton />
    <XPBottomBarTabs />
    <XPBottomBarRightMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import XPStartButton from './XPStartButton.vue';
import XPBottomBarRightMenu from './XPBottomBarRightMenu.vue';
import XPBottomBarTabs from './XPBottomBarTabs.vue'


export default defineComponent({
  name: "XPXPBottomBar",
  components: {
    XPStartButton,
    XPBottomBarRightMenu,
    XPBottomBarTabs
  }
})
</script>

<style>
#XPBottomBar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 35px;
  background: linear-gradient(180deg,
      rgba(80, 126, 237, 1) 7%,
      rgba(31, 88, 193, 1) 22%,
      rgb(69, 120, 230) 100%);

  display: flex;
  gap: 10px;
}
</style>