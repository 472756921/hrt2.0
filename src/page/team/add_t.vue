<template>
    <div>
      <h2>添加团队</h2>
      <div class="item">名称：<Input v-model="name" style="width: 300px; margin-left: 18px"/></div>
      <div class="item">分类：
        <Select v-model="type" style="width:300px; margin-left: 14px;">
          <Option value="1">儿科</Option>
          <Option value="2">心脏科类</Option>
          <Option value="3">妇科类</Option>
        </Select>
      </div>
      <div class="item">健管师：
        <Select v-model="admin" style="width:300px;" filterable>
          <Option value="1">
            <span>张蓉蓉1</span>
            <span style="float:right;color:#ccc">17748372657</span>
          </Option>
          <Option value="2">
            <span>张蓉蓉2</span>
            <span style="float:right;color:#ccc">17483645528</span>
          </Option>
          <Option value="3">
            <span>张蓉蓉3</span>
            <span style="float:right;color:#ccc">17485868476</span>
          </Option>
        </Select>
      </div>
      <div class="item">医生职称：<Input v-model="name" style="width: 290px;"/></div>
      <div class="item">
        医生简介：
        <Input v-model="docInt" type="textarea" :rows="4"  />
      </div>
      <div class="item">
        团队简介：
        <Input v-model="teamInt" type="textarea" :rows="4"  />
      </div>
      <uplode :type="2"/>
      <uplode :type="3"/>
      <Button type="primary" style="margin: 10px 0" @click="addan">添加团队</Button>
    </div>
</template>

<script type="text/ecmascript-6">
  import uplode from '../../components/upload.vue';

    export default {
      name: 'add_t',
      components: { uplode },
      data() {
        return {
          type: '',
          teamInt: '',
          docInt: '',
          admin: '',
          name: '',
        }
      },
      methods: {
        addan() {},
      }
    };
</script>

<style scoped>
  .item{
    margin: 8px 0;
  }
</style>
