<template>
  <q-layout view="hHh Lpr fFf">

    <q-header class="bg-white text-grey-9 shadow-1">
      <q-toolbar class="">
        <q-btn dense flat round icon="menu" @click="left = !left" class="lt-sm" />
        <q-toolbar-title class="text-center">
          <router-link to="/home">
            <q-img
              :src="require('../assets/img/vernaillen-logo.png')"
              style="height: 50px; width: 120px"
              transition="slide-down">
              <template v-slot:loading/>
            </q-img>
          </router-link>
        </q-toolbar-title>
        <div class="float-right q-py-sm q-px-lg">
          {{currentPageName}}
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left"
              :mini="miniState"
              @click.capture="drawerClick"
              side="left"
              :width="250"
              :breakpoint="500"
              bordered
              show-if-above
              content-class="bg-grey-1">
      <q-toolbar class="lt-sm">
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
        <q-item to="/technologies" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="code" />
          </q-item-section>
          <q-item-section>Technologies</q-item-section>
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
      </q-list>
      <div class="q-mini-drawer-hide absolute" style="top: 7px; right: -18px">
        <q-btn
          dense
          round
          unelevated
          color="primary"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>

    <q-page-container
      v-touch-swipe.mouse.left="handleSwipeLeft"
      v-touch-swipe.mouse.right="handleSwipeRight"
      style="overflow: hidden;">
      <transition
        :name="transitionName"
        mode="out-in">
        <router-view />
      </transition>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>

    <q-footer class="bg-secondary text-grey-3 shadow-up-2 text-center" style="height: 40px">
      <div class="max1200 q-pa-sm">
        © 2019 Vernaillen Consulting
      </div>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      left: true,
      miniState: false,
      prevHeight: 0,
      transitionName: 'slide-left',
      currentPageName: this.$router.currentRoute.name,
      showBreadcrumb: false
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName
      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
      this.transitionName = transitionName || 'slide-left'
      next()
    })
    this.$router.afterEach((to, from, next) => {
      this.currentPageName = this.$router.currentRoute.name
    })
    this.currentPageName = this.$router.currentRoute.name
    this.setShowBreadcrumb(this.currentPageName)
  },
  watch: {
    // whenever question changes, this function will run
    currentPageName: function (newPage, oldPage) {
      this.setShowBreadcrumb(newPage)
    }
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
    setShowBreadcrumb (currentPageName) {
      console.log('currentPageName: ' + currentPageName)
      this.showBreadcrumb = currentPageName !== '' && currentPageName !== 'home'
    },
    handleSwipeLeft ({ evt, ...info }) {
      switch (this.$router.currentRoute.name) {
        case 'home':
          this.$router.push('/career')
          break
        case 'career':
          this.$router.push('/technologies')
          break
        case 'technologies':
          this.$router.push('/music')
          break
        case 'music':
          this.$router.push('/travel')
          break
        case 'travel':
          this.$router.push('/about')
          break
        case 'about':
          this.$router.push('/home')
          break
        default:
          this.$router.push('/home')
      }
    },
    handleSwipeRight ({ evt, ...info }) {
      switch (this.$router.currentRoute.name) {
        case 'home':
          this.$router.push('/about')
          break
        case 'career':
          this.$router.push('/home')
          break
        case 'technologies':
          this.$router.push('/career')
          break
        case 'music':
          this.$router.push('/technologies')
          break
        case 'travel':
          this.$router.push('/music')
          break
        case 'about':
          this.$router.push('/travel')
          break
        default:
          this.$router.push('/home')
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
