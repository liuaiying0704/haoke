<template>
  <div>
    <div class="layout">
      <div class="header" v-if="!user">
        <div class="bgc"><img src="@/assets/mybgc.jpg" alt="" /></div>
        <div class="My_info__eOYeg">
          <img src="@/assets/avatar.png" alt="" />
          <div class="box">
            <div class="my_name">游客</div>
            <div class="my_edit">
              <a href="#">
                <button @click="$router.push('./login')">去登录</button></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="headerLogin" v-else>
        <div class="loginImg">
          <img src="@/assets/avatar (1).png" alt="" />
        </div>
        <div class="My_info__eOYeg">
          <img src="@/assets/avatar.png" alt="" />
          <div class="box">
            <div class="myLogin_name">好客_845296</div>
            <van-button class="backLogin" @click="backFn">退出</van-button>
            <div class="myLogin_message">
              <span>编辑个人资料</span><i><van-icon name="play" /></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <van-grid>
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="wap-home-o" text="我的出租" />
        <van-grid-item icon="underway-o" text="看房记录" />
        <van-grid-item icon="coupon-o" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div class="ad"><img src="@/assets/join.png" alt="" /></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      active: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    backFn () {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确定退出？'
        })
        .then(() => {
          // on confirm
          this.$store.commit('setUser', null)
          this.$router.back()
        })
        .catch(() => {
          // on cancel
          console.log('取消')
        })
    }
  }
}
</script>

<style lang="less" scoped>
// 头部未登录
.layout {
  position: relative;
  height: 300px;
  // background-color: pink;
  :deep(.bgc img) {
    width: 375px;
    height: 191px;
  }
  .My_info__eOYeg {
    position: absolute;
    background: #fff;
    width: 280px;
    height: 165px;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    img {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
    }
    .box {
      .my_name {
        margin-top: -30px;
        margin-bottom: 10px;
      }
      .my_edit a {
        font-size: 12px;
        margin-top: 20px;
        button {
          width: 69px;
          height: 30px;
          color: #fff;
          background-color: #21b97a;
          border: transparent;
          border-radius: 10px;
        }
      }
    }
  }
}
// 头部已登录
.headerLogin {
  width: 375px;
  height: 390px;
  // background-color: pink;

  .loginImg {
    text-align: center;
    img {
      width: 375px;
      height: 375px;
    }
  }
  .My_info__eOYeg {
    .myLogin_name {
      margin-top: -25px;
    }
    .backLogin {
      margin-top: 8px;
      width: 54px;
      height: 20px;
      border-radius: 30px;
      color: #fff;
      padding: 2px 15px;
      background: #21b97a;
      font-size: 12px;
      border: #fff;
    }
    .myLogin_message {
      margin-top: 20px;
      font-size: 12px;
      color: #999;
    }
  }
}
// 中间部分
.list {
  box-sizing: border-box;
  width: 100%;
  height: 170px;
  // background-color: pink;
  display: flex;
  padding-top: 20px;
  :deep(.van-grid-item__content) {
    width: 125px;
    height: 65px;
    border: 0 solid transparent;
  }
}
// 广告图
.ad {
  width: 345px;
  height: 85px;
  margin: 10px auto;
  img {
    width: 345px;
    height: 85px;
    position: absolute;
  }
}
</style>
