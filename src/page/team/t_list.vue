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
      <div class="item">建立时间：<span class="info">2012-12-12</span></div>
      <div class="item">团队类型：<span class="info">心血管</span></div>
      <div class="item Introduction">团队简介：<span class="info">这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛</span></div>
      <div class="item Introduction">医生简介：<span class="info">这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛</span></div>
      <div class="item">
        <img src="http://iph.href.lu/140x140?text=%E5%8C%BB%E7%94%9F%E5%A4%B4%E5%83%8F" title="医生头像" alt="医生头像"/>
        <img src="http://iph.href.lu/140x140?text=%E5%81%A5%E7%AE%A1%E5%B8%88%E5%A4%B4%E5%83%8F" alt="健管师头像" title="健管师头像"/>
      </div>
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
            title: '类型',
            key: 'type'
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
            date: '2016-10-03',
            type: '心血管',
          },
          {
            title: 'Jim Green',
            date: '2016-10-01',
            type: '心血管',
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
  .Introduction{
    background: #eee;
    padding: 10px;
  }
</style>
