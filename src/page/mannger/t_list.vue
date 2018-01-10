<template>
  <div>
    <h2>健管师列表</h2>
    <Table :columns="columns1" :data="data1"></Table>
    <Modal v-model="teamShow" title="团队详情" @on-ok="ok">
      <div class="item" style="text-align: center">
        <img src="http://iph.href.lu/140x140?text=%E5%81%A5%E7%AE%A1%E5%B8%88%E5%A4%B4%E5%83%8F" alt="健管师头像" title="健管师头像"/>
      </div>
      <div class="item">健管师：<span class="info">张蓉蓉</span></div>
      <div class="item">健管师电话：<span class="info">17789938475</span></div>
      <div class="item">建立时间：<span class="info">2012-12-12</span></div>
      <div class="item">团队：<span class="info">王勉医生工作室</span></div>
      <div class="item Introduction">简介：<span class="info">这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛这个团队比较牛</span></div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import { healthTeacherList } from '../../interface';

  export default {
    name: 't_list',
    data(){
      return {
        teamShow: false,
        columns1: [
          {
            title: '健管师',
            key: 'realName'
          },
          {
            title: '创建时间',
            key: 'createDate'
          },
          {
            title: '性别',
            key: 'gender'
          },
          {
            title: '电话',
            key: 'phone'
          },
          {
            title: '团队',
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
        data1: [],
      }
    },
    created() {
      this.getHTL(1);
    },
    methods: {
      show(i) {
        this.teamShow = true;
      },
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
      getHTL() {
        this.$ajax({
          method: 'GET',
          url:healthTeacherList(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data1 = res.data.data;
        }).catch((error) => {
          this.$message.error('获取健管师列表失败');
        });
      },
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
