<template>
  <q-layout view="hHh lpR fFf">
    <q-ajax-bar
      ref="bar"
      position="top"
      color="primary"
      size="3px"
    />

    <q-header class="bg-white text-grey-9 shadow-1">
      <q-toolbar>
        <q-toolbar-title>
          <div class="q-py-sm q-px-md">
            {{currentPageName}}
          </div>
        </q-toolbar-title>
        <router-link to="/home" class="absolute-center" area-label="Go to home">
          <q-img
            :src="require('../assets/img/vernaillen-logo.png')"
            style="height: 50px; width: 120px"
            alt="Wouter Vernaillen\'s logo"
            transition="slide-down">
            <template v-slot:loading/>
          </q-img>
        </router-link>
        <q-btn dense flat round icon="menu" @click="showMenu = !showMenu" alt="Toggle menu" aria-label="Toggle menu" class="lt-sm" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="showMenu"
              :mini="miniState"
              @click.capture="drawerClick"
              side="right"
              :width="250"
              :breakpoint="500"
              bordered
              show-if-above
              content-class="bg-grey-1">
      <q-toolbar class="lt-sm shadow-1">
        <q-toolbar-title class="text-center">
          Menu
        </q-toolbar-title>
      </q-toolbar>
      <q-list >
        <div v-for="(page, index) in pages" :key="index">
          <q-item :to="page.path" clickable v-ripple area-label="Go to {{page.name}}">
            <q-item-section avatar>
              <q-icon color="primary" :name="page.icon" />
            </q-item-section>
            <q-item-section>{{page.name}}</q-item-section>
          </q-item>
          <q-separator></q-separator>
        </div>
      </q-list>
      <div class="q-mini-drawer-hide absolute" style="top: 7px; left: -18px">
        <q-btn
          dense
          round
          unelevated
          color="primary"
          icon="chevron_right"
          @click="miniState = true"
          alt="Collapse menu"
          aria-label="Collapse menu"
        />
      </div>
    </q-drawer>

    <q-page-container
      v-touch-swipe.mouse.left="handleSwipeLeft"
      v-touch-swipe.mouse.right="handleSwipeRight"
      style="overflow: hidden;">
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" alt="Back to top" aria-label="Back to top" />
      </q-page-scroller>
    </q-page-container>

    <q-footer class="bg-secondary text-grey-3 shadow-up-2 text-center q-pa-sm">
      © 2019 Vernaillen Consulting
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      showMenu: true,
      miniState: false,
      prevHeight: 0,
      transitionName: 'slide-left',
      currentPageName: this.$router.currentRoute.name,
      showBreadcrumb: false,
      pages: {
        0: { name: 'Home', path: '/home', icon: 'home' },
        1: { name: 'Career', path: '/career', icon: 'work' },
        2: { name: 'Stack', path: '/stack', icon: 'code' },
        3: { name: 'Blog', path: '/blog', icon: 'newspaper' },
        4: { name: 'Music', path: '/music', icon: 'music_note' },
        5: { name: 'Travel', path: '/travel', icon: 'flight_takeoff' },
        6: { name: 'Contact', path: '/contact', icon: 'mail' }
      }
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      let fromPos = this.getPagePosition(from.name)
      let toPos = this.getPagePosition(to.name)
      let transitionName = toPos < fromPos ? 'slide-right' : 'slide-left'
      if (toPos === 0 && fromPos === 6) {
        transitionName = 'slide-left'
      } else if (toPos === 6 && fromPos === 0) {
        transitionName = 'slide-right'
      }
      this.transitionName = transitionName || 'slide-left'
      next()
    })
    this.$router.afterEach((to, from, next) => {
      this.currentPageName = to.name
    })
    this.currentPageName = this.$router.currentRoute.name
  },
  methods: {
    drawerClick (e) {
      if (this.miniState) {
        this.miniState = false
        e.stopPropagation()
      }
    },
    handleSwipeLeft () {
      let nextPos = 1
      if (this.currentPageName !== '') {
        let currentPos = this.getPagePosition(this.currentPageName)
        nextPos = currentPos + 1
        if (nextPos > 6) {
          nextPos = 0
        }
      }
      this.$router.push(this.pages[nextPos].path)
    },
    handleSwipeRight () {
      let nextPos = 6
      if (this.currentPageName !== '') {
        let currentPos = this.getPagePosition(this.currentPageName)
        nextPos = currentPos - 1
        if (nextPos < 0) {
          nextPos = 6
        }
      }
      this.$router.push(this.pages[nextPos].path)
    },
    getPagePosition (pageName) {
      for (let i = 0; i < 7; i++) {
        if (this.pages[i].name === pageName) {
          return i
        }
      }
    }
  }
}
</script>

<style type="scss">
  .q-tab {
    height: 50px;
    padding: 0;
  }
  .q-item.q-router-link--active,
  .q-item--active {
    background-color: #ddd;
  }
  .q-breadcrumbs {
    padding: 12px 35px;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity, transform;
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0.5;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0.5;
    transform: translate(-2em, 0);
  }
</style>
