<template>
    <div id='XPBottomBarRightMenu'>
        <XPBottomBarTime />
    </div>
</template>

<script lang=ts>
import { computed, defineComponent, ref } from 'vue'
import XPBottomBarTime from '~/components/XP/XPBottomBar/BottomBarRightMenu.vue/XPBottomBarTime.vue';

export default defineComponent({
    name: "XPBottomBarRightMenu",
    components: { XPBottomBarTime }
})
</script>

<style>
#XPBottomBarRightMenu {
    background: linear-gradient(180deg,
            rgba(17, 173, 234, 1) 7%,
            rgba(20, 130, 228, 1) 22%,
            rgba(15, 149, 236, 1) 100%);
    color: white;
    padding: 7px 20px 0px 20px;
    font-size: .9rem;
    border-left: 1px solid rgb(32, 32, 32);
}
</style>