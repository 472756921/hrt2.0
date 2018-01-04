<template>
  <div>
    <h2>团队列表</h2>
    <Table :columns="columns1" :data="data1"></Table>
    <Page :total="100" style="margin: 30px auto 10px;text-align: center"></Page>
    <Modal v-model="teamShow" title="团队详情" @on-ok="ok">
      <div class="item">团队名：<span class="info">王勉医生工作室</span></div>
      <div class="item">健管师：<span class="info">张蓉蓉</span></div>
      <div class="item">健管师电话：<span class="info">17789938475</span></div>
      <div class="item">团队人数：<span class="info">294人</span></div>
      <div class="item">团队简介：<span class="info">这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛</span></div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 't_list',
    data(){
      return {
        teamShow: false,
        columns1: [
          {
            title: '团队名',
            key: 'title'
          },
          {
            title: '健管师',
            key: 'date'
          },
          {
            title: '创建时间',
            key: 'date'
          },
          {
            title: '现有人数',
            key: 'date'
          },
          {
            title: '操作',
            key: 'address',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '详情'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.del(params.index)
                    }
                  }
                }, '删除'),
                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.edit(params)
                    }
                  }
                }, '编辑'),
              ]);
            }
          }
        ],
        data1: [
          {
            title: 'John Brown',
            date: '2016-10-03'
          },
          {
            title: 'Jim Green',
            date: '2016-10-01'
          },
        ],
      }
    },
    methods: {
      show(i) {
        this.teamShow = true;
      },
      edit() {},
      del() {},
      ok() {},
    }
  };
</script>

<style scoped>
  .info{
    color: #999;
  }
  .item{
    margin: 6px 0;
  }
</style>
