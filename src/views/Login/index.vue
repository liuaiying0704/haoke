<template>
  <div>
    <!-- navbar -->
    <van-nav-bar title="账号登陆" left-arrow @click-left="onClickLeft" />
    <!-- form  -->
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin-top: 30px">
        <van-button
          block
          type="info"
          native-type="submit"
          class="btn"
          @click="$router.push('/')"
          >提交</van-button
        >
      </div>

      <p style="font-size: 14px" class="myp" @click="$router.push('/regist')">
        还没注册账号，去注册~
      </p>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async onSubmit () {
      this.$toast.loading({
        message: '加载中',
        forbidClick: true
      })
      try {
        const res = await login(this.username, this.password)
        console.log(res)
        // token
        this.$store.commit('setUser', res.data.body)

        this.$toast.success('登陆成功')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机号验证码错误')
        } else {
          this.$toast.fail('手机号验证码错误')
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
/* #21b97a 白色字体   左箭头  input   按钮 账号:hzhmqd密码:123456*/
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
  margin-bottom: 20px;
}
:deep(.van-nav-bar__title) {
  color: #fff;
  font-size: 18px;
}
:deep(.van-nav-bar__arrow) {
  color: #fff;
  font-size: 18px;
}
:deep(.van-button--info) {
  color: #fff;
  height: 50px;
  background-color: #1cb676;
  border: 0.02667rem solid #1cb676;
}
.form {
  padding-left: 15px;
  padding-right: 15px;
  .van-cell {
    height: 60px;
    font-size: 16px;
    color: rgb(34, 32, 32);
    border-bottom: 0.02667rem solid #eee;

    :deep(.van-cell__value) {
      line-height: 60px;
    }
  }
}
.btn {
  font-size: 18px;
  // margin: 0 20px;
}
.myp {
  text-align: center;
  margin-top: 30px;
}
</style>
