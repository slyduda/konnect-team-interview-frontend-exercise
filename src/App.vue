<template>
  <header>
    <div class="nav">
      <router-link to="/">
        <img src="@/assets/konnect_logo.png" alt="" class="logo" >
      </router-link>
      <div id="rightNav">
        <button class="nav-button">
          <KIcon icon="notificationInbox" size="24"/>
        </button>
        <button class="nav-button">
          <KIcon icon="help" size="28"/>
        </button>
        <button id="userIcon">
          
        </button>
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
  font-size: 10px;
}

body {
  font-family: Arial, sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.2;
  margin: 0 auto;
}

ul {
    padding: 0;
    list-style-type: none;
}


header {
  position: sticky;
  top: 0px;
}

.nav {
  background: white;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 4rem;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 700;
    color: blue;

    &.router-link-exact-active {
      color: green;
    }
  }
}

button {
  background: none;
  cursor: pointer;
} 

#rightNav {
  display: flex;
}

.nav-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 20px;
  padding: 8px;
}

#userIcon {
  margin-left: 12px;
  width: 40px;
  height: 40px;
  background: gray;
  border-radius: 100%;
}
</style>
