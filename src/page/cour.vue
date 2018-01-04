<template>
    <div>
      <h2>轮播管理</h2>
      <div class="imgContents">
        <div class="imgcontent">
          <img src="../img/cour/1@2x.png">
          <Icon type="close-circled" class="del"></Icon>
        </div>
        <div class="imgcontent">
          <img src="../img/cour/2@2x.png">
          <Icon type="close-circled" class="del"></Icon>
        </div>
        <div class="imgcontent">
          <img src="../img/cour/3@2x.png">
          <Icon type="close-circled" class="del"></Icon>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'cour',
    };
</script>

<style scoped>
  .imgContents{
    overflow: auto;
  }
  .imgcontent{
    margin: 10px;
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

    animation: wobble .5s;
    -moz-animation: wobble .5s;	/* Firefox */
    -webkit-animation: wobble .5s;	/* Safari 和 Chrome */
    -o-animation: wobble .5s;
  }
</style>
