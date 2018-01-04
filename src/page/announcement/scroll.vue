<template>
  <div>
    <h2>滚动公告管理</h2>
    <Button type="primary" style="margin: 10px 0" @click="addAn=true">添加公告</Button>
    <Table :columns="columns1" :data="data1"></Table>
    <Modal v-model="addAn" title="添加滚动公告" @on-ok="ok">
      <span>公告标题：</span>
      <Select v-model="adTitle" style="width:200px" filterable>
        <Option v-for="item in amlist" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'scroll',
    data () {
      return {
        adTitle: '',
        addAn: false,
        columns1: [
          {
            title: '标题',
            key: 'title'
          },
          {
            title: '发布时间',
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
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params)
                    }
                  }
                }, '预览'),
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
        amlist: [
          {
          value: 'New York',
          label: 'New York'
         },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
        ],
      }
    },
    methods: {
      show(i) {
        this.$Notice.open({
          title: i.row.title,
          desc: 'Here is the notification description. Here is the notification description. ',
        });
      },
      ok() {
        let mess = confirm('确认设置该条公告滚动显示？');
        if (mess) {
          this.data1.push( {
            title: 'new Message',
            date: '2018-01-04'
          })
          this.$Notice.success({
            title: '设置成功',
          });
        }
      },
      del(i) {
        let mess = confirm('确认删除？删除后，该条公告将不再滚动显示');
        if (mess) {
          this.data1.splice(i, 1);
          this.$Notice.success({
            title: '删除成功',
          });
        }
      },
    }
  };
</script>

<style scoped>

</style>
