<template>
  <div>
    <h2>商品列表</h2>
    <Table :columns="columns1" :data="data1"></Table>
    <Page :total="100" style="margin: 30px auto 10px;text-align: center"></Page>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'c_list',
    data(){
      return {
        teamShow: false,
        columns1: [
          {
            title: '商品名',
            key: 'date'
          },
          {
            title: '创建时间',
            key: 'date'
          },
          {
            title: '价格',
            key: 'date'
          },
          {
            title: '简介',
            key: 'date'
          },
          {
            title: '操作',
            key: 'address',
            render: (h, params) => {
              return h('div', [
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
      edit() {},
      del(i) {
        let mess = confirm('确认删除？');
        if (mess) {
          this.data1.splice(i, 1);
          this.$Notice.success({
            title: '删除成功',
          });
        }
      },
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
