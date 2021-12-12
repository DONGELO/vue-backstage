<template>
  <div id="main-warp">
    <div class="mian-content">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../../styles/config.scss';
  .open{
    #main-warp{left: $navMenu;}
  }
  .close{
    #main-warp{left: $navMenuMin;}
  }
  #main-warp{
    height: 100vh;
    position: fixed;
    top: $layoutHeader;
    bottom: 0;
    right: 0;
    @include webkit(transition, all .3s ease 0s);
  }
  .mian-content{
    width: 100%;
    height: 100%;
    padding-right: 60px;
    padding-bottom: 110px;
    transition: all 0.3s ease 0s;
    box-sizing: border-box;
    margin: 30px;
  }
  .content{
    width: 100%;
    height: 100%;
    padding: 30px 30px 0 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: white;
    border-radius: 6px;
  }
</style>