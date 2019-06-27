<template>
  <q-page
    padding
    transition="slide-left">
    <q-markdown :src="content" />
  </q-page>
</template>

<script>
import content from '../content/travel.md'

export default {
  name: 'Travel',
  data () {
    return {
      content: content
    }
  }
}
</script>

<style scoped>

</style>
