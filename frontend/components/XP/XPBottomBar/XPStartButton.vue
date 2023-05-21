<template>
    <button id="StartButton" @click="$emit('click')">
        <img src="~/static/images/windowsXP/XPIcons/xp-start-btn-icon.png" alt="start">
        <span>start</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'XPStartButton'
})
</script>

<style scoped>
@import url('~/styles/windowsXP/XPStartButton.scss');
</style>