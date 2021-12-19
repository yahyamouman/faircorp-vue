<template>
  <b-navbar class="navbar navbar-light bg-light">
      <b-navbar-brand href="#">
        <img src="../assets/logoFaircorpMini.svg" height="30" class="d-inline-block align-top" alt="">
        Faircorp
      </b-navbar-brand>
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="nav-link" href="javascript:void(0);" @click="changeNav('windows')">Windows</b-nav-item>
          <b-nav-item class="nav-link" href="javascript:void(0);" @click="changeNav('rooms')">Rooms</b-nav-item>
          <b-nav-item class="nav-link" href="javascript:void(0);" @click="changeNav('heaters')">Heaters</b-nav-item>
          <b-nav-item class="nav-link" href="javascript:void(0);" @click="changeNav('doors')">Doors</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>


<script>
export default {
  name: 'MainNavigation',
  props: ['title'],
  data: function() {
    return {
      currentNavItem: 'windows'
    }
  },
  methods: {
    changeNav(item) {
      this.currentNavItem = item;
      this.$emit('nav-updated',item);
    },
    isCurrentNav(item) {
      return this.currentNavItem === item;
    }
  }
}
</script>

