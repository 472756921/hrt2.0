<template>
  <div>
    <h2>滚动公告管理</h2>
    <Button type="primary" style="margin: 10px 0" @click="addAn=true">添加公告</Button>
    <Table :columns="columns1" :data="data1"></Table>
    <Page :total="totalPages" :page-size="30" :current='pageNow' style="margin: 30px auto 10px;text-align: center" @on-change="changPage"></Page>
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
  import { getFlagList, getList, setFlag, delFlag } from '../../interface';

  export default {
    name: 'scroll',
    data () {
      return {
        pageNow: 1,
        totalPages: '',
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
            key: 'addTime'
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
                      this.del(params.index, params.row.id)
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
      this.getList(1, 1);
    },
    watch: {
      classes: 'changeType',
    },
    methods: {
      show(i) {
        this.$Notice.open({
          title: i.row.title,
          desc: i.row.content,
        });
      },
      ok() {
        let mess = confirm('确认设置该条公告滚动显示？');
        if (mess) {
          this.$ajax({
            method: 'GET',
            url:setFlag() + '?id=' + this.adTitle,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.$Message.success('设置成功');
            this.getList(1, 1);
          }).catch((error) => {
            this.$message.error(error.message);
          });
        }
      },
      del(i, id) {
        let mess = confirm('确认删除？删除后，该条公告将不再滚动显示');
        if (mess) {
          this.$ajax({
            method: 'delete',
            url:delFlag() + '?id=' + id,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.data1.splice(i, 1);
            this.$Message.success('删除成功');
          }).catch((error) => {
            this.$message.error(error.message);
          });
        }
      },
      changPage(pageNew) {
        this.getList(pageNew, 1);
      },
      getList(page, type) {
        let URL = getList() + '/' + type + '?size=30&page=' + page;
        if(type == 1) {
          URL = getFlagList() + '?size=30&page=' + page;;
        }
        this.$ajax({
          method: 'GET',
          url:URL,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (type == 1) {
            this.data1 = res.data.data.content;
            this.totalPages = res.data.data.totalPages * 30;
            this.pageNow = page;
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
