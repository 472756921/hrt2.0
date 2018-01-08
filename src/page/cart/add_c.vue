<template>
    <div>
      <h2>添加商品</h2>
      <div class="item">名称：<Input v-model="name" style="width: 300px;"/></div>
      <div class="item">价格：<Input v-model="phone" style="width: 300px;"/></div>
      <div class="item">
       简介：
        <Input v-model="teamInt" type="textarea" :rows="4"  />
      </div>
      <Button type="primary" style="margin: 10px 0" @click="addan">添加</Button>
    </div>
</template>

<script type="text/ecmascript-6">
  import uplode from '../../components/upload.vue';

    export default {
      name: 'add_c',
      components: { uplode },
      data() {
        return {
          phone: '',
          teamInt: '',
          xl: '',
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
