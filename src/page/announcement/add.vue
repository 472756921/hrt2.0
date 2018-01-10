<template>
  <div>
    <h2>添加公告</h2>
    <div class="item">标题：<Input v-model="title" style="width: 300px; margin-left: 14px"/></div>
    <!--<div class="item">发布者：<Input v-model="auther" style="width: 300px"/></div>-->
    <div class="item">分类：
      <Select v-model="classes" style="width:300px; margin-left: 10px;z-index: 20000">
        <Option v-for="item in cityList" :value="item.value" :key="item.value" style="z-index: 20000">{{ item.label }}</Option>
      </Select>
    </div>
    <!--<div id="editor"></div>-->
    <editor ref="editor"/>
    <Button type="primary" style="margin: 10px 0" @click="addan">发布公告</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  import editor from '../../components/editor.vue';
  import {saveAn} from '../../interface';

  export default {
    name: 'add',
    components: { editor },
    data() {
      return {
        auther: '管理员',
        title: '',
        classes: '2',
        cityList: [
          {
            value: '2',
            label: '直播公告'
          },
          {
            value: '3',
            label: '公司动态'
          },
          {
            value: '4',
            label: '专家团队'
          },
          {
            value: '5',
            label: '团队活动'
          },
          {
            value: '6',
            label: '团队面诊时间'
          },
          {
            value: '7',
            label: '活动记录'
          },
        ],
      }
    },
    methods: {
      addan() {
        if(this.$refs.editor.getInfo() == '' || this.$refs.editor.getInfo() == null) {
          this.$Message.error('请输入文章内容');
          return false;
        }
        if(this.title == '' || this.title == null) {
          this.$Message.error('请输入文章标题');
          return false;
        }

        let addData = {
          "content": this.$refs.editor.getInfo(),
          "title": this.title,
          "type": this.classes,
        };

        this.$ajax({
          method: 'POST',
          url:saveAn(),
          dataType: 'JSON',
          data: addData,
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data1 = res.data.data;
        }).catch((error) => {
          this.$message.error(error.message);
        });
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
