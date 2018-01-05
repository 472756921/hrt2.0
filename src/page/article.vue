<template>
  <div>
    <h2>{{this.title}}</h2>
    <Table :columns="columns1" :data="data1"></Table>
    <Page :total="100" style="margin: 30px auto 10px;text-align: center"></Page>


    <Modal v-model="articleFlg" title="文章预览" width="50%">
      <h2 class="center">文章标题</h2>
      <div class="center" style="color: #999">作者 & 2012-12-12</div>
      <div class="text">
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      </div>
    </Modal>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'article',
    created () {
      this.getClesses();
    },
    watch: {
      '$route': ['getClesses'],
    },
    data () {
      return {
        articleFlg: false,
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
            title: '作者',
            key: 'auther'
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
      getClesses () {
        let type = this.$route.params.type;
        switch (type){
          case 'home':
            this.title = '患者家园';
            break;
          case 'ac':
            this.title = '活动记录';
            break;
        }
      },
      del(i) {
        let mess = confirm('确认删除？');
        if (mess) {
          this.data1.splice(i, 1);
          this.$Notice.success({
            title: '删除成功',
          });
        }
      },
      edit(i) {
      },
      show(i) {
        this.articleFlg = true;
      },
    }
  };
</script>

<style scoped>
.center{
  text-align: center;
}
.text{
  word-wrap:break-word;
  background: #eee;
  padding: 10px;
}
</style>
