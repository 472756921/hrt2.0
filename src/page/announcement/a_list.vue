<template>
    <div>
      <h2>{{this.title}}公告管理</h2>
      <Table :columns="columns1" :data="data1"></Table>
      <Page :total="100" style="margin: 30px auto 10px;text-align: center"></Page>
    </div>
</template>

<script type="text/ecmascript-6">
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
                  }, '删除滚动'),
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
        getClesses () {
          let clesses = this.$route.params.classes;
          switch (clesses){
            case 'live':
              this.title = '直播';
              break;
            case 'company':
              this.title = '公司';
              break;
            case 'team':
              this.title = '专家团队';
              break;
            case 'culb':
              this.title = '俱乐部活动';
              break;
          }
        },
        newad() {

        },
        show(i) {
          this.$Notice.open({
            title: i.row.title,
            desc: 'Here is the notification description. Here is the notification description. ',
          });
        },
      }
    };
</script>

<style scoped>

</style>
