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
            {{pageName()}}
          </div>
        </q-toolbar-title>
        <router-link to="/home" class="absolute-center">
          <q-img
            :src="require('../assets/img/vernaillen-logo.png')"
            style="height: 50px; width: 120px"
            transition="slide-down">
            <template v-slot:loading/>
          </q-img>
        </router-link>
        <q-btn dense flat round icon="menu" @click="showMenu = !showMenu" class="lt-sm" />
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
        <q-item to="/home" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item to="/career" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="work" />
          </q-item-section>
          <q-item-section>Career</q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item to="/stack" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="code" />
          </q-item-section>
          <q-item-section>Stack</q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item to="/music" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="music_note" />
          </q-item-section>
          <q-item-section>Music</q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item to="/travel" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="flight_takeoff" />
          </q-item-section>
          <q-item-section>Travel</q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item to="/contact" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="person" />
          </q-item-section>
          <q-item-section>Contact</q-item-section>
        </q-item>
        <q-separator></q-separator>
      </q-list>
      <div class="q-mini-drawer-hide absolute" style="top: 7px; left: -18px">
        <q-btn
          dense
          round
          unelevated
          color="primary"
          icon="chevron_right"
          @click="miniState = true"
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
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
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
      showBreadcrumb: false
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      const toDepth = to.name.length
      const fromDepth = from.name.length
      let transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      if (toDepth === 1 && fromDepth === 6) {
        transitionName = 'slide-left'
      } else if (toDepth === 6 && fromDepth === 1) {
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
      // if in "mini" state and user
      // click on drawer, we switch it to "normal" mode
      if (this.miniState) {
        this.miniState = false

        // notice we have registered an event with capture flag;
        // we need to stop further propagation as this click is
        // intended for switching drawer to "normal" mode only
        e.stopPropagation()
      }
    },
    handleSwipeLeft () {
      if (this.currentPageName.length === 0) {
        this.$router.push({ name: 'xx' })
      } else if (this.currentPageName.length > 5) {
        this.$router.push({ name: 'x' })
      } else {
        this.$router.push({ name: this.currentPageName + 'x' })
      }
    },
    handleSwipeRight () {
      if (this.currentPageName.length < 2) {
        this.$router.push({ name: 'xxxxxx' })
      } else {
        this.$router.push({ name: this.currentPageName.substring(1) })
      }
    },
    pageName () {
      switch (this.currentPageName) {
        case 'xx':
          return 'Career'
        case 'xxx':
          return 'Stack'
        case 'xxxx':
          return 'Music'
        case 'xxxxx':
          return 'Travel'
        case 'xxxxxx':
          return 'Contact'
        default:
          return 'Home'
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
