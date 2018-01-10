<template>
    <div>
      <h2>{{this.title}}管理</h2>
      <Table :columns="columns1" :data="data1"></Table>
      <Page :total="100" style="margin: 30px auto 10px;text-align: center"></Page>
    </div>
</template>

<script type="text/ecmascript-6">
  import { getList } from '../../interface';

    export default {
      name: 'a_list',
      created () {
        this.getClesses();
      },
      watch: {
        '$route': ['getClesses'],
      },
      data () {
        return {
          addAn: false,
          title: '',
          classes: '1',
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
                        this.del(params.index)
                      }
                    }
                  }, '删除'),
                  h('Button', {
                    props: {
                      type: 'success',
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
          data1: [],
        }
      },
      methods: {
        getClesses () {
          let clesses = this.$route.params.classes;
          switch (clesses){
            case 'live':
              this.title = '直播公告';
              this.classes = 2;
              break;
            case 'company':
              this.title = '公司公告';
              this.classes = 3;
              break;
            case 'team':
              this.title = '专家团队公告';
              this.classes = 4;
              break;
            case 'culb':
              this.title = '团队活动公告';
              this.classes = 5;
              break;
            case 'date':
              this.title = '团队面诊时间公告';
              this.classes = 6;
              break;
            case 'remb':
              this.title = '活动记录';
              this.classes = 7;
              break;
          }
          this.getList(1);
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
        show(i) {
          this.$Notice.open({
            title: i.row.title,
            desc: i.row.content,
          });
        },
        getList(page) {
          this.$ajax({
            method: 'GET',
            url:getList() + '/' + this.classes + '?pageSize=30&page=' + page,
            dataType: 'JSON',
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

<style scoped>

</style>
