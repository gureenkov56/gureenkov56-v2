<template>
    <div id='XPBottomBarTabs'>
        <div class="tab active">
            <img src="@/static/images/windowsXP/XPIcons/xp-folder-icon.png" alt="folder-icon">
            <span>test</span>
        </div>
        <div class="tab">
            <img src="@/static/images/windowsXP/XPIcons/xp-folder-icon.png" alt="folder-icon">
            <span>test</span>
        </div>
    </div>
</template>

<script lang=ts>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'XPBottomBarTabs',
    setup() {
        const tabs = [
            {
                title: 'test',
                isActive: false,
                icon: 'xp-folder-icon.png'
            },
            {
                title: 'test2',
                isActive: true,
                icon: 'xp-folder-icon.png'
            }
        ]

        return {
            tabs
        }
    }
})
</script>

<style lang="scss">
@import url('~/styles/windowsXP/XPBottomBarTabs.scss');
</style>