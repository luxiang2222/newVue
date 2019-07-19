<template>
  <div id="mainRouter" :style="'background:'+this.$store.state.BackGroundColor">
    <el-container>
      <el-header style="background-color:#409EFF;border-radius:0.7em 0.7em 0em 0em">
        <div style="height:100%;width:100%;">
            <div style="float:left;color:white;margin-left:5px;vertical-align:central;display:inline">配置激活日志系统</div>
            <div style="float:right;margin-right:5px;color:white;font-family:PingFang SC;font-size:5px;display:inline">当前登陆：{{LoginName}}| <el-button size="mini" round type="danger">退出登陆</el-button></div>
        </div>
      </el-header>
      <el-container style="min-height:800px;">
        <el-aside width="200px" style="margin-top: 15px">
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                        </template>
                        <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="/LogManger">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="/SetThemes">
                            <i class="el-icon-setting"></i>
                             <span slot="title">设置背景</span>
                        </el-menu-item>
                        </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
             <el-container>
         <el-footer style="background-color:#409EFF;border-radius:0em 0em 0.7em 0.7em">
           <div style="height:100%;width:100%;margin-right: 3px;">
               <li style="text-align:right;vertical-align:central; font-family:PingFang SC;font-weight:bold;font-size:5px">当前版本号：1.1.0</li>
               <li style="text-align:right;vertical-align:central;font-family:PingFang SC;font-weight:bold;font-size:5px">时间：{{DateNow|formatDate}}</li>
                <li style="text-align:right;vertical-align:central;font-family:PingFang SC;font-weight:bold;font-size:5px">说明：该页面目前支持核查日志的查询，技术支持.netcore api+vue</li>
            </div>
          </el-footer>
           </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: true,
        LoginName:'陆祥',
        DateNow: Date.parse(new Date()),
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
     filters:
      {
        formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
        }
    },
    mounted() {
          this.DateNow=Date.parse(new Date());
          console.log(this.$store.state.BackGroundColor);
    }
  }
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  #mainRouter{
    min-height:950px;
    font-family: "PingFang SC";
  }
</style>
