<template>
  <q-page padding>
    <template v-if="pathMatch">
      <q-markdown :src="content"/>
      <q-btn to="/blog" icon="arrow_left">
        Blog overview
      </q-btn>
    </template>
    <template v-if="!pathMatch">
      <q-list>
        <div v-for="(post, index) in blogPosts" :key="index">
          <q-item
            :to="'/blog' + post.path"
            :area-label="'Go to blog post ' + post.name"
            clickable
          >
            {{ post.name }} ({{ post.date }})
          </q-item>
        </div>
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
  data () {
    return {
      blogPosts: {
        0: { name: 'New Website', date: '01 June 2019', path: '/new-website', component: NewWebsite, thumbnail: '' },
        1: { name: 'Progressive Web Apps', date: '11 July 2019', path: '/progressive-web-apps', component: ProgressiveWebApps, thumbnail: '' }
      }
    }
  },
  computed: {
    content () {
      for (let i = 0; i < 2; i++) {
        if (this.blogPosts[i].path === this.pathMatch) {
          this.$store.commit('common/currentBlogPostName', this.blogPosts[i].name)
          return this.blogPosts[i].component
        }
      }
      return NewWebsite
    }
  }
}
</script>
