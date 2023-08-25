<script setup lang="ts">
import { reactive, ref,toRaw } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'
import type { FormInstance} from 'element-plus'
// import md5 from 'blueimp-md5';

import { login } from '@/api'


const router = useRouter();
const ruleFormRef = ref<FormInstance>()
const labelPosition: any = ref("right");

const formLabelAlign = reactive({
  name: "",
  pwd: "",
});

const onSubmit = async () => {
  const u_info = toRaw(formLabelAlign);
  // const _name = md5(u_info.name);
  // const _pwd = md5(u_info.pwd);
  const _name = u_info.name;
  const _pwd = u_info.pwd;
  const result = await login({username:_name, password:_pwd});
  if(result){
    ElMessage.success('登录成功')
    router.push({ path: "/home" });
  }else{
    // ElMessage.error('登录失败:')
    console.log(result)
  }
  // console.log(result)
};

// import BgParticles from './BgParticles.vue'
</script>

<template>
  <div>
    <!-- <BgParticles /> -->
    <div class="login-m" >
      <div class="login-t">系统登录</div>
      <div style="margin: 12px 0 32px 0">
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formLabelAlign"
          style="max-width: 300px"
          ref="ruleFormRef"
        >
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input 
              v-model="formLabelAlign.pwd" 
              type="password" 
              placeholder="请输入用户密码"
              @keyup.enter="onSubmit"
            />
          </el-form-item>
        </el-form>
      </div>
      <div style="text-align: center">
        <el-button
          @click="onSubmit"
          style="width: 280px; height: 40px; font-size: 16px" 
          type="primary"
        >
          登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .login-wrap {
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  z-index: 2;
} */
.login-m {
  width: 350px;
  height: 270px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  position: center;
}
.login-t {
  text-align: center;
  font-size: 22px;
  color: #606266;
  padding: 24px 0;
  font-weight: bold;
}
</style>
