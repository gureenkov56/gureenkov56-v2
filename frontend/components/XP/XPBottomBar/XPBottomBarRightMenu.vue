<template>
    <div id='XPBottomBarRightMenu'>
        {{ hours }}:{{ minutes }}
    </div>
</template>

<script lang=ts>
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'XPBottomBarRightMenu',
    setup() {
        const date = ref<Date>(new Date());

        const hours = computed(() => date.value.getHours());
        const minutes = computed(() => date.value.getMinutes());

        setInterval(() => {
            date.value = new Date()
        }, 1000)

        return {
            minutes,
            hours
        }
    }
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