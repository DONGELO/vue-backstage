<template>
  <div id="layout" :class="[ menuStatus ? 'close' : 'open' ]">
      <Heard />
      <Main />
      <Nav />
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import Heard from './components/heard.vue'
import Main from './components/main.vue'
import Nav from './components/nav.vue'
export default {
    name: 'Layout',
    components: {
        Heard,
        Main,
        Nav
    },
    setup (props, { root }) {
        /* 计算属性 */
        const menuStatus = computed( () => {
            return root.$store.state.isCollapse
        })

        return {
            /* 计算属性 */
            menuStatus
        }
    }
}
</script>

<style>

</style>