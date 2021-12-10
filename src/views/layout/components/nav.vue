<template>
  <div id="nva-warp">
    <h2 class="logo"><img src="../../../assets/face.jpg" alt=""></h2>
    <el-menu
      default-active="2"
      v-model="isCollapse"
      class="el-menu-vertical-demo"
      background-color="transparent" 
      text-color="white"
      :collapse="isCollapse"
      router
      >
      <template v-for="(item, index) in routers ">
        <el-submenu v-if="!item.hidden" :index="index + '' " :key="item.id">
          <!-- 一级菜单 -->
          <template slot="title">
            <svg-icon :data_iconName="item.meta.icon" />
            <span>{{item.meta.name}}</span>
          </template>
          <!-- 子菜单 -->
          <el-menu-item :index="subItem.path" v-for="subItem in item.children" :key="subItem.id" >{{subItem.meta.name}}</el-menu-item>
        </el-submenu>
      </template>

    </el-menu>
  </div>
</template>

<script>
import { computed, reactive, } from '@vue/composition-api'
export default {
  name: 'layout-heard',
  setup (props, { root }) {
    /* reactive */
    const routers = reactive(root.$router.options.routes)
    /* 计算属性 */
    const isCollapse = computed( () => {
      return root.$store.state.isCollapse
    })
      return {
        /* reactive */
        routers, 
        /* 计算属性 */
        isCollapse,
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/config.scss';
  #nva-warp{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: $navMenu;
    background-color: #344a5f;
  }
  .logo{
      text-align: center;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      img{
          margin: 0 auto;
          width: 64px;
          height: 64px;
          border-radius: 32px;
      }
  }
  .svg-icon{
    font-size: 12px;
    color: #f4f4f5;
    margin-right: 6px;
  }
</style>