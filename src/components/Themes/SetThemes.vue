<template>
<el-row>
  <el-col :span="4">
    <el-card>
      <div style="padding: 14px; background: linear-gradient(-125deg, #57bdbf, #2f9de2);">
        <span>渐变色背景</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" @cilck="SetBackGroundColor('linear-gradient(-125deg, #57bdbf, #2f9de2)')">确认选择</el-button>
        </div>
      </div>
    </el-card>
    </el-col>

  <el-col :span="4">
  <el-card>
      <div style="padding: 14px; background: linear-gradient(-125deg, #ff7d7d, #fb2c95);">
        <span>渐变色背景</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" @click="SetBackGroundColor('linear-gradient(-125deg, #ff7d7d, #fb2c95)')">确认选择</el-button>
        </div>
      </div>
    </el-card>
  </el-col>

    <el-col :span="4">
  <el-card>
      <div style="padding: 14px; background: linear-gradient(-113deg, #c543d8, #925cc3);">
        <span>渐变色背景</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" @click="SetBackGroundColor('linear-gradient(-113deg, #c543d8, #925cc3)')">确认选择</el-button>
        </div>
      </div>
    </el-card>
  </el-col>

    <el-col :span="4">
  <el-card>
      <div style="padding: 14px;  background: linear-gradient(-141deg, #ecca1b, #f39526);">
        <span>渐变色背景</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" @clisk="SetBackGroundColor('linear-gradient(-141deg, #ecca1b, #f39526)')">确认选择</el-button>
        </div>
      </div>
    </el-card>
  </el-col>

    <el-col :span="4">
  <el-card>
      <div style="padding: 14px;  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)">
        <span>渐变色背景</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" @clisk="SetBackGroundColor('linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)')">确认选择</el-button>
        </div>
      </div>
    </el-card>
  </el-col>

   <el-col :span="4">
  <el-card>
      <div style="padding: 14px;  background: white;">
        <span>纯白色背景</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" @clisk="SetBackGroundColor('white')">确认选择</el-button>
        </div>
      </div>
    </el-card>
  </el-col>

   <el-col :span="4">
  <el-card>
      <div style="padding: 14px;  background: black;">
        <span>纯黑色背景</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" @clisk="SetBackGroundColor('black')">确认选择</el-button>
        </div>
      </div>
    </el-card>
  </el-col>

  <el-col :span="4">
  <el-card>
      <div style="padding: 14px;  background: wheat;">
        <span>纯橙色背景</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button"  @clisk="SetBackGroundColor('wheat')">确认选择</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
  <el-col :span="4">
  <el-card>
      <div style="padding: 14px;  background: gray;">
        <span>纯灰色背景</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" @clisk="SetBackGroundColor('gray')">确认选择</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
    SetBackGroundColor(BackgroundValue){
      console.log(BackgroundValue);
       this.$store.commit('setBackGroundColor',BackgroundValue);
        console.log(11111111111111111);
         console.log(this.$store.state.BackGroundColor);
    }
  }
}
</script>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>