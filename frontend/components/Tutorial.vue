<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <h1>NUXT успешно запущен</h1>

    <h2>Данные получены от сервера:</h2>
    <ul>
      <li 
        v-for="(item, idx) in list"
        :key="idx"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'Tutorial',
  setup() {
    const list = ref([])

    onMounted(() => {
      axios
        .get('/api/list')
        .then((res) => (list.value = res.data))
      // fetch('/list')
      //   .then(data => data.json())
      //   .then(data => list.value = data);
    })

    return {
      list,
    }
  },
})
</script>
