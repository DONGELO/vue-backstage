<template>
  <div id="layout" :class="[ menuStatus ? 'close' : 'open' ]">
      <Heard />
      <Main />
      <Nav />
  </div>
</template>

<script>
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
        /* metheods 方法 */
        const menuStatus = () => {
            return root.$store.state.isCollapse
        }

        return {
            /* metheods 方法 */
            menuStatus
        }
    }
}
</script>

<style>

</style>