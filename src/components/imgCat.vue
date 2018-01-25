<template>
    <div class="imageCat">
      <Button class="getMessage"  @click="getMessage" type="primary" icon="images">图片上传</Button>
      <input type="file" id="fileElem" multiple accept="image/*" style="display:none" @change="handleFiles()">
      <br/>
      <br/>
      <div class="content" id="content">
        <img :src="img" width="100%" ondragstart="return false;" id="imgAc"/>
        <div id="over"></div>
        <div id="kk">
          <img :src="img" width="600px" style="-webkit-user-drag: none;" ondragstart="return false;" id="iamgeShow"/>
        </div>
      </div>
      <div class="rightList">
        <div>预览效果</div>
        <div class="sendShow">
          <img :src="img" width="600px" style="-webkit-user-drag: none;" ondragstart="return false;" id="sendImgShow"/>
        </div>
        <br/>
        <Button type="success" @click="upload">确认上传</Button>
      </div>
    </div>
</template>

<script>
    export default {
      name: "img-cat",
      data() {
        return {
          img: '',
        }
      },
      mounted(e) {
        let content = document.getElementById('content');
        let imgAc = document.getElementById('imgAc');
        let iamgeShow = document.getElementById('iamgeShow');
        let sendImgShow = document.getElementById('sendImgShow');
        let dv = document.getElementById('kk');

        imgAc.onload = function(){
          this.maxH = imgAc.offsetHeight
          this.maxW = imgAc.offsetWidth
        };

        this.isDown = false;

        dv.onmousedown = this.onmousedown(e);

        dv.onmousemove = this.onmousemove(e);

        dv.onmouseup = function() {
          //开关关闭
          isDown = false;
        }
        content.onmousewheel = function(event) {
          let b = imgAc.offsetWidth/imgAc.offsetHeight;
          if (event.wheelDelta > 0) {
            iamgeShow.style.height = imgAc.offsetHeight + 15 + 'px'
            iamgeShow.style.width = imgAc.offsetWidth + 15*b + 'px'
            sendImgShow.style.height = imgAc.offsetHeight + 15 + 'px'
            sendImgShow.style.width = imgAc.offsetWidth + 15*b + 'px'
            imgAc.style.height = imgAc.offsetHeight + 15 + 'px'
            imgAc.style.width = imgAc.offsetWidth + 15*b + 'px'
            maxH = imgAc.offsetHeight
            maxW = imgAc.offsetWidth
          } else if (event.wheelDelta < 0) {
            if (imgAc.offsetHeight < 210 || imgAc.offsetWidth < 310) {
              return false
            }
            iamgeShow.style.height = imgAc.offsetHeight - 15 + 'px'
            iamgeShow.style.width = imgAc.offsetWidth - 15*b + 'px'
            sendImgShow.style.height = imgAc.offsetHeight - 15 + 'px'
            sendImgShow.style.width = imgAc.offsetWidth - 15*b + 'px'
            imgAc.style.height = imgAc.offsetHeight - 15 + 'px'
            imgAc.style.width = imgAc.offsetWidth - 15*b + 'px'
            maxH = imgAc.offsetHeight
            maxW = imgAc.offsetWidth
          } else {
            return;
          }
        };
      },
      methods: {
        onmousedown(e) {
          this.x = e.clientX;
          this.y = e.clientY;
          this.l = dv.offsetLeft;
          this.t = dv.offsetTop;
          this.isDown = true;
        },
        onmousemove(e) {
          if (this.isDown == false) {
            return;
          }
          this.chang(e)
        },
        chang(e) {
          let nx = e.clientX;
          let ny = e.clientY;
          //计算移动后的左偏移量和顶部的偏移量
          var nl = nx - (x - l);
          var nt = ny - (y - t);

          if (nl > 0 && nl < 300 && nl < maxW-300) {
            dv.style.left = nl + 'px';
            iamgeShow.style.marginLeft =  -nl + 'px';
            sendImgShow.style.marginLeft =  -nl + 'px';
          }
          if (nt > 0 &&  nt < maxH - 200 && nt < 300) {
            dv.style.top = nt + 'px';
            iamgeShow.style.marginTop =  -nt + 'px';
            sendImgShow.style.marginTop =  -nt + 'px';
          }
        },
        upload() {
        },
        getMessage() {
          document.getElementById('fileElem').click();
        },
        handleFiles() {
          let file = document.getElementById('fileElem');
          let reader = new FileReader();
          reader.readAsDataURL(file.files[0]);
          reader.onload = (e) => {
            this.img = e.target.result;
          }
        },
      },
    }
</script>

<style scoped>
  .imageCat{
    overflow: auto;
  }
  .imageCat .content {
    float: left;
    position: relative;
    width: 600px;
    height: 500px;
    overflow: hidden;
    border-radius: 10px;
  }
  .imageCat #over{
    width: 600px;
    height: 500px;
    background: #000;
    position: absolute;
    top: 0;
    opacity: .7;
  }
  .imageCat .content #kk {
    position: absolute;
    border-radius: 10px;
    top: 0;
    width: 300px;
    height: 200px;
    overflow: hidden;
    cursor: move;
  }
  .imageCat .sendShow{
    border-radius: 4px;
    width: 300px;
    height: 200px;
    margin-top: 10px;
    overflow: hidden;
  }
  .imageCat .rightList{
    margin-left: 40px;
    overflow: auto;
    float: left;
  }
</style>
