<template>
  <div>
    <h2>添加文章</h2>
    <div class="item">标题：<Input v-model="title" style="width: 300px; margin-left: 14px"/></div>
    <div class="item">发布者：<Input v-model="auther" style="width: 300px"/></div>
    <div class="item">分类：
      <Select v-model="classes" style="width:300px; margin-left: 10px;z-index: 20000">
        <Option v-for="item in cityList" :value="item.value" :key="item.value" style="z-index: 20000">{{ item.label }}</Option>
      </Select>
    </div>
    <div id="editor"></div>
    <Button type="primary" style="margin: 10px 0" @click="addan">发布文章</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'newarticle',
    data() {
      return {
        auther: '管理员',
        title: '',
        classes: '',
        cityList: [
          {
            value: '公司活动',
            label: '公司活动'
          },
          {
            value: '患者家园',
            label: '患者家园'
          },
        ],
      }
    },
    mounted(){
      let E = window.wangEditor
      let editor = new E('#editor')
      // 或者 var editor = new E( document.getElementById('editor') )
      editor.create()
    },
    methods: {
      addan() {

      },
    }
  };
</script>
<style>
  .item .ivu-select-dropdown{
    z-index: 100000;
  }
</style>
<style scoped>
  .item{
    margin: 8px 0;
  }
</style>
