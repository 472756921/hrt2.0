<template>
  <div>
    <h2>添加文章</h2>
    <div class="item">标题：<Input v-model="title" style="width: 300px; margin-left: 14px"/></div>
    <div class="item">发布者：<Input v-model="auther" style="width: 300px"/></div>
    <div class="item">分类：
      <Select v-model="classes" style="width:300px; margin-left: 10px;z-index: 20000">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="item" v-if="classes=='团队活动'">团队：
      <Select v-model="teamName" style="width:300px; margin-left: 10px;z-index: 20000">
        <Option value="王勉图团队">王勉图团队</Option>
        <Option value="张勉图团队">张勉图团队</Option>
        <Option value="罗勉图团队">罗勉图团队</Option>
      </Select>
    </div>
    <editor/>
    <Button type="primary" style="margin: 10px 0" @click="addan">发布文章</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  import editor from '../components/editor.vue';

  export default {
    name: 'newarticle',
    components: { editor },
    data() {
      return {
        auther: '管理员',
        teamName: '',
        title: '',
        classes: '',
        cityList: [
          {
            value: '团队活动',
            label: '团队活动'
          },
          {
            value: '患者家园',
            label: '患者家园'
          },
        ],
      }
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
