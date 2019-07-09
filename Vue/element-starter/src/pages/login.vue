<template>
  <div>
    <div class="login_page">
      <!-- 触发transition v-show v-if
      router 切换 mounted -->
      <transition name="from-fade" mode="in-out">
        <section class="from_container" v-if="showLogin">
          <div class="manage-tip">
            <span class="title">后台管理系统</span>
          </div>
          <el-form 
          :model="loginForm" 
          :rules="rules"
          ref="loginForm"
          class="loginForm"> 
            <el-form-item>
              <span class="fa-tips">
              <i class="fa fa-user"></i>
              </span>
              <el-input class="area" type="text" placeholder="用户名" v-model="loginForm.username"></el-input>
            </el-form-item>
          </el-form>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  // 表单提交后， 登录状态，vuex
  // 提交过程中，字段报错，v-model 自身的
   data(){
    return {
				loginForm: {
					username: '',
					password: ''
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
				ip:'',
			}
  },
  mounted() {
    this.showLogin = true;
    this.getip()
  },
}
</script>

<style lang='less' scoped>
  .from-fade-enter-active,.from-fade-leave-active{
    transition: all 1s;
  }
  .from-fade-enter,.from-fade-leave-to{
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
