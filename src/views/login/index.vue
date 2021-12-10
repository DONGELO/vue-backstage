<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <el-form-item label="" prop="username">
        <span class="svg-containe">
          <svg-icon data_iconName="user" />
        </span>
        <el-input 
        ref="username"
        type="text" 
        v-model="loginForm.username" 
        autocomplete="off" 
        name="username"
        placeholder="Username"
        tabindex="1"
        auto-complete="on"
        />
      </el-form-item>

      <el-form-item label="" prop="password">
        <span class="svg-containe">
          <svg-icon data_iconName="password" />
        </span>
        <el-input 
        :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span @click="showPwd">
          <svg-icon :data_iconName=" passwordType === 'password' ? 'eye' : 'eye-open' " />
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">提交</el-button>

    </el-form>
  </div>
</template>

<script>

import { validUsername } from '@/utils/validate'

export default {
    name: 'Login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!validUsername(value)) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'admin',
          password: '111111'
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        loading: false,
        passwordType: ' ',
        redirect: undefined

      }
    },
     /*-------  监听 ------*/
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    /*-------  方法 ------*/
    methods: {
      showPwd(){
        if(this.passwordType === 'password'){
          this.passwordType = ''
        }else {
          this.passwordType = 'password'
        }
        this.$nextTick( () =>{
          this.$refs.password.focus()
        })
      },
      handleLogin(){
        this.$refs.loginForm.validate( valid => {
          if( valid ){
            this.loading = true
            this.$store.dispatch( '/home', this.loginForm ).then( () => {
              this.$router.push({ path: this.redirect || '/home' } )
              this.loading = false
            }).catch ( () => {
              this.loading = false
            })
          } else {
            console.log( ' error submit!! ' )
            return false
          }
        })
      }
    }
    
}
</script>

<style lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container{
    background-color: $bg;
    min-height: 100%;
    width: 100%;
    overflow: hidden;
    .login-form{
      width: 420px;
      margin: 0 auto;
      padding: 160px 35px 0;
      overflow: hidden;
    }
  }
  .title-container{
    position: relative;
    .title{
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .svg-container{
    padding: 6px 5px 6px 15px;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
</style>
