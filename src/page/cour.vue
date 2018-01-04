<template>
    <div>
      <h2>轮播管理</h2>
      <uplode/>
      <div class="imgContents">
        <div class="imgcontent" v-for="(item, index) in imgList">
          <img :src=item>
          <span @click="delImg(index)"><Icon type="close-circled" class="del"></Icon></span>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import uplode from '../components/upload.vue';

    export default {
      name: 'cour',
      components: { uplode },
      data(){
        return {
          imgList: ["/static/img/1@2x.c23c06c.png", "/static/img/1@2x.c23c06c.png", "/static/img/1@2x.c23c06c.png"],
        }
      },
      methods: {
        delImg(i){
          let mess = confirm('确认删除？');
          if (mess) {
            this.imgList.splice(i, 1);
            this.$Notice.success({
              title: '删除成功',
            });
          }
        }
      }
    };
</script>

<style scoped>
  .imgContents{
    overflow: auto;
  }
  .imgcontent{
    margin-right: 10px;
    position: relative;
    overflow: auto;
    float: left;
  }
  .imgcontent img {
    width: 260px;
  }
  .del{
    right: 6px;
    top: 6px;
    position: absolute;
    font-size: 18px;
    color: #333333;
    cursor: pointer;
  }
  .del:hover {
    color: #eee;
    transition: color .5s;
    -moz-transition: color .5s;	/* Firefox 4 */
    -webkit-transition: color .5s;	/* Safari 和 Chrome */
    -o-transition: color .5s;

    animation: bounceIn 1s;
    -moz-animation: bounceIn 1s;	/* Firefox */
    -webkit-animation: bounceIn 1s;	/* Safari 和 Chrome */
    -o-animation: bounceIn 1s;
  }
</style>
