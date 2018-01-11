<template>
  <div>
    <h2>滚动公告管理</h2>
    <Button type="primary" style="margin: 10px 0" @click="addAn=true">添加公告</Button>
    <Table :columns="columns1" :data="data1"></Table>
    <Modal v-model="addAn" title="添加滚动公告" @on-ok="ok">
      <span>公告类型：</span>
      <Select v-model="classes" style="width:300px;">
        <Option v-for="item in cityList" :value="item.value" :key="item.value" style="z-index: 20000">{{ item.label }}</Option>
      </Select>
      <br/>
      <br/>
      <span>公告标题：</span>
      <Select v-model="adTitle" style="width:300px" filterable>
        <Option v-for="item in amlist" :value="item.id" :key="item.id">{{ item.title }}</Option>
      </Select>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getList } from '../../interface';

  export default {
    name: 'scroll',
    data () {
      return {
        adTitle: '',
        classes: '',
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
        data1: [],
        amlist: [],
      }
    },
    created() {
      this.getList(1, 2);
    },
    watch: {
      classes: 'changeType',
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
          this.$Message.success('设置成功');
        }
      },
      del(i) {
        let mess = confirm('确认删除？删除后，该条公告将不再滚动显示');
        if (mess) {
          this.data1.splice(i, 1);
          this.$Message.success('删除成功');
        }
      },
      getList(page, type) {
        this.$ajax({
          method: 'GET',
          url:getList() + '/' + type + '?pageSize=30&page=' + page,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (type == 1) {
            this.data1 = res.data.data.content;
          } else {
            this.amlist = res.data.data.content;
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      changeType(v, ov) {
        this.getList(1, v);
      }
    }
  };
</script>

<style scoped>

</style>
