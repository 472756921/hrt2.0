<template>
  <div class="header" id="demo">
    <div class="textInfo">
      <img src="../img/icon/logo.png" width="70"/>
      <h1>哈瑞特管理系统</h1>
      <div class="inputContent">
        <Input v-model="un" class="input" size="large" placeholder="请输入账号"/>
        <Input v-model="pwd" class="input" type="password" size="large" placeholder="请输入密码"/>
      </div>
      <Button type="ghost" icon="checkmark-circled" class="loginBtn" @click="login">登录</Button>
    </div>
    <canvas id="canvas"></canvas>

  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'login',
    data() {
      return {
        un: '',
        pwd: '',
      }
    },
    mounted () {
      var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,

        hue = 217,
        stars = [],
        count = 0,
        maxStars = 800;//星星数量

      var canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d');
      canvas2.width = 100;
      canvas2.height = 100;
      var half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
      gradient2.addColorStop(0.025, '#CCC');
      gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
      gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
      gradient2.addColorStop(1, 'transparent');

      ctx2.fillStyle = gradient2;
      ctx2.beginPath();
      ctx2.arc(half, half, half, 0, Math.PI * 2);
      ctx2.fill();

// End cache

      function random(min, max) {
        if (arguments.length < 2) {
          max = min;
          min = 0;
        }

        if (min > max) {
          var hold = max;
          max = min;
          min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function maxOrbit(x, y) {
        var max = Math.max(x, y),
          diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
        //星星移动范围，值越大范围越小，
      }

      var Star = function() {

        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / 8;
        //星星大小
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 300000;
        //星星移动速度
        this.alpha = random(2, 10) / 10;

        count++;
        stars[count] = this;
      }

      Star.prototype.draw = function() {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
      }

      for (var i = 0; i < maxStars; i++) {
        new Star();
      }

      function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.5; //尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter';
        for (var i = 1, l = stars.length; i < l; i++) {
          stars[i].draw();
        };

        window.requestAnimationFrame(animation);
      }

      animation();
    },
    methods: {
      login() {
        this.$router.push({path: '/cour'});
      },
    }
  };
</script>

<style scoped>
  .textInfo{
    position: absolute;
    width: 800px;
    height: 500px;
    top: calc((100% - 500px) / 2 - 30px);
    left: calc((100% - 800px) / 2);
    text-align: center;
    color: #ffffff;
  }
  .inputContent{
    width: 400px;
    margin: 20px auto 0;
  }
  .input{
    margin: 6px 0;
    outline: none;
  }
  .loginBtn{
    color: #ffffff;
    font-size: 14px;
    margin-top: 30px;
  }
</style>
