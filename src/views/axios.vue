<template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from '@/utils/axios';

export default defineComponent({
  setup() {
    axios.get('/users/XPoet')
    .then((res) => {
      console.log('res:', res)
    })
    .catch((err) => {
      console.error('err', err);
    })
  }
})

</script>

<style lang="scss" scoped>

</style>
