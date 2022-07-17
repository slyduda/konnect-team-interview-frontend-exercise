<template>
  <header>
    <div class="nav border-b">
      <router-link to="/">
        <img src="@/assets/konnect_logo.png" alt="" class="h-10 py-3" >
      </router-link>
      <div id="rightNav">
        <button class="ml-6">
          <KIcon icon="notificationInbox" size="24"/>
        </button>
        <button class="ml-6">
          <KIcon icon="help" size="28"/>
        </button>
        <button class="h-10 w-10 bg-gray-800 rounded-full ml-6">
          
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
}

body {
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

#userIcon {
  margin-left: 12px;
  width: 40px;
  height: 40px;
  background: gray;
  border-radius: 100%;
}
</style>
