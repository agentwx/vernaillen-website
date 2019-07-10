<template>
  <q-page padding>
    <template v-if="pathMatch">
      <q-markdown :src="content"/>
    </template>
    <template v-if="!pathMatch">
      <q-list >
        <q-item to="/blog/new-website" clickable>New Website</q-item>
        <q-item to="/blog/progressive-web-apps" clickable>Progressive Web Apps</q-item>
      </q-list>
    </template>
  </q-page>
</template>

<script>
import NewWebsite from '../content/blogposts/2019-06-26-new-website.md'
import ProgressiveWebApps from '../content/blogposts/2019-06-27-progressive-web-apps.md'

export default {
  name: 'Blog',
  props: {
    pathMatch: String
  },
  computed: {
    content () {
      switch (this.pathMatch) {
        case '/new-website':
          return NewWebsite
        case '/progressive-web-apps':
          return ProgressiveWebApps
        default:
          return ProgressiveWebApps
      }
    }
  }
}
</script>
