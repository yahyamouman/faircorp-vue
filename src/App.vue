<template>
  <div id="app">
    <main-navigation @nav-updated="updateNav" :title="title"></main-navigation>
    <main class="container">
      <section class="main-content mx-auto">
        <windows-list v-if="isCurrentNav('windows')"></windows-list>
        <doors-list v-if="isCurrentNav('doors')"></doors-list>
        <rooms-list v-if="isCurrentNav('rooms')"></rooms-list>
        <heaters-list v-if="isCurrentNav('heaters')"></heaters-list>
      </section>
    </main>
  </div>
</template>

<script>
import MainNavigation from './components/MainNavigation.vue';
import WindowsList from './components/WindowsList.vue';
import DoorsList from './components/DoorsList.vue';
import RoomsList from './components/RoomsList.vue';
import HeatersList from './components/HeatersList.vue';

export default {
  name: 'App',
  components: {
    MainNavigation,
    WindowsList,
    DoorsList,
    RoomsList,
    HeatersList,

  },
  data: function() {
    return {
      title: 'Faircorp',
      currentNavItem: 'windows'
    }
  },
  methods: {
    updateNav(item) {
      this.currentNavItem = item;
    },
    isCurrentNav(item) {
      return this.currentNavItem === item;
    }
  },
  created: function() {
    document.title = this.title
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
