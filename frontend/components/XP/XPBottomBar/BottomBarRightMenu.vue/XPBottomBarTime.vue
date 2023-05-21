<template>
    <div id='XPBottomBarTime'>
        {{ hours }}:{{ minutes }}
    </div>
</template>

<script lang=ts>
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'XPBottomBarTime',
    setup() {
        const date = ref<Date>(new Date());

        const hours = computed<string>(() => addZero(date.value.getHours()));
        const minutes = computed<string>(() => addZero(date.value.getMinutes()));

        setInterval(() => {
            date.value = new Date()
        }, 1000)

        function addZero(value: number): string {
            if (value < 10) {
                return `0${value}`
            }
            return `${value}`;
        }

        return {
            minutes,
            hours
        }
    }
})
</script>

<style></style>