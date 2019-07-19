<template>
  <div style="background:url('../assets/BackGround.png');border-radius: 4px">
    <el-form ref="form">
    <el-form-item style="margin-right:0;">
      <el-input placeholder="账户名" v-model="UserName" />
    </el-form-item>
    <el-form-item style="margin-top: 15px;margin-right:0;">
      <el-input placeholder="密码" v-model="PassWord" show-password></el-input>
    </el-form-item>
    <el-form-item style="margin-top: 15px;margin-right:0;">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
        </el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6">
          <el-button type="primary" @click="Login()">登陆</el-button>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import ImgUrl from '../assets/BackGround.png'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      UserName: '',
      PassWord: '',
      checked:'',
      bgImg: {
        backgroundImage: "url(" + ImgUrl + ");",
            backgroundRepeat: "no-repeat;",
            backgroundSize: "25px auto;",
            marginTop: "5px;",
      }
     }
    },
    methods: {
      Login() {
        console.log('123')
        if (this.UserName == 'luxiang' && this.PassWord == '1234')
          this.$router.push({ path: '/MainView'})
      }
    },
    mounted() {
     // MessageBox(bgImg.backgroundImage)
    // request({
    //   url: 'api/values',
    //   method: 'get'
    // }).then(response => {
    //   console.log(response)
    //   this.msg = response.data[0]
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
