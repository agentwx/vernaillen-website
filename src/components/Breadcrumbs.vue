<template>
  <div padding>
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" to="/home" />
      <q-breadcrumbs-el :label="$store.state.common.currentPageName" />
    </q-breadcrumbs>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
