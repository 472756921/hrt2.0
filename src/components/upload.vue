<template>
  <Upload action="//jsonplaceholder.typicode.com/posts/" style="margin: 10px 0">
    <Button type="ghost" icon="ios-cloud-upload-outline">{{text}}</Button>
  </Upload>
</template>
<script>
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
      }
    }
  }
</script>
