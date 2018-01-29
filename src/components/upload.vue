<template>
  <Upload :action="uploadImgs()" style="margin: 10px 0" :on-success="handleSuccess">
    <div class="imgContent" v-if="img!=''">
      <img :src='img' width="300" height="200"/>
    </div>
    <br/>
    <Button type="ghost" icon="ios-cloud-upload-outline">{{text}}</Button>
  </Upload>
</template>
<script>
  import { uploadImg } from '../interface';

  export default {
    props: ['type'],
    created(){
      if(this.type == 1) {
        this.text = '选择上传轮播图片';
      }
      if(this.type == 2) {
        this.text = '选择上传医生头像';
      }
      if(this.type == 3) {
        this.text = '选择上传健管师头像';
      }
    },
    data() {
      return {
        text: '',
        img: '',
      }
    },
    methods: {
      uploadImgs() {
        return uploadImg();
      },
      handleSuccess(res, file) {
        this.img =  'http://118.31.38.185' + res.data.url;
        this.$emit('getImgUrl',res.data.id);
      },
    }
  }
</script>

<style scoped>
  .imgContent{
    width: 300px;
    height: 200px;
  }
</style>
