<template>
  <div id="heard-warp">
    <div class="pull-left header-icon heard-menu">
      <!-- 打开与收起 -->
      <div class="pull-left " @click="navMenuState" >
        <svg-icon :data_iconName="menu-close" />
      </div>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <span class="no-redirect">首页</span>
          <a href="/"></a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="pull-right header-icon">
        <div class="user-info pull-left">
            <img src="../../../assets/face.jpg" alt="">
            管理员
        </div>
        <div class="header-icon pull-left">
            <svg-icon data_iconName="sign-out" />
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'layout-heard',
  setup (props, { root }) {
    const menuIcon = ref(false)
    /* methods 方法 */
    const navMenuState = () => {
      root.$store.commit('SET_COLLAPSE')
    }
    return {
      menuIcon,
      /* methods 方法 */
      navMenuState
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/config.scss';
  .open{
    #heard-warp{left: $navMenu;}
  }
  .close{
    #heard-warp{left: $navMenuMin;}
  }
  #heard-warp{
    position: fixed;
    top: 0;
    right: 0;
    height: $layoutHeader;
    background-color: white;
    line-height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    @include webkit(transition, all .3s ease 0s);
  }
  .heard-menu{
    display: flex;
    align-items: center;
    .svg-icon{
      font-size: 18px;
      margin-right: 10px;
    }
  }
  .user-info{
      height: 100%;
      padding: 0 32px;
      border-right: 1px solid #ededed;
      font-size: 14px;
      display: flex;
      align-items: center;
      img{
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 10px;
      }
  }
  .header-icon{
      padding: 0 10px;
      svg{
          margin-bottom: -8px;
          font-size: 18px;
          cursor: pointer;
      }
  }
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
</style>