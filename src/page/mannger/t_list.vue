<template>
  <div>
    <h2>健管师列表</h2>
    <Table :columns="columns1" :data="data1"></Table>
    <Modal v-model="teamShow" title="团队详情" @on-ok="ok">
      <div class="item" style="text-align: center">
        <img :src=message.icon.url alt="健管师头像" title="健管师头像" width="200"/>
      </div>
      <div class="item">健管师：<span class="info">{{message.name}}</span></div>
      <div class="item">健管师电话：<span class="info">{{message.phone}}</span></div>
      <div class="item">学历：<span class="info">{{message.education}}</span></div>
      <div class="item">建立时间：<span class="info">{{message.createDate}}</span></div>
      <div class="item">团队：<span class="info">{{message.teams}}</span></div>
      <div class="item Introduction">简介：<span class="info">{{message.remarks}}</span></div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import { healthTheacher, deletehealthTheacher } from '../../interface';

  export default {
    name: 't_list',
    data(){
      return {
        teamShow: false,
        columns1: [
          {
            title: '健管师',
            key: 'name'
          },
          {
            title: '创建时间',
            key: 'createDate'
          },
          {
            title: '性别',
            key: 'gender',
            render: (h, p) => {
              if(p.row.gender == 0) {
                return '女'
              } else   if(p.row.gender == 1) {
                return '男'
              } else {
                return '性别不明'
              }
            },
          },
          {
            title: '电话',
            key: 'phone'
          },
          {
            title: '团队',
            key: 'teams',
            render: (h, p) => {
              if (p.row.teams == '') {
                return '暂未分配团队';
              } else {
                return p.row.teams;
              }
            },
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
                      this.show(params)
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
                      console.log(params)
                      this.del(params.index, params.row.id)
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
                      this.edit(params.row)
                    }
                  }
                }, '编辑'),
              ]);
            }
          }
        ],
        data1: [],
        message: {
          icon: {
            url: '',
          },
          education: '',
          gender: '',
          name: '',
          phone: '',
          remarks: '',
          createDate: '',
          teams: '',
        },
      }
    },
    created() {
      this.getHTL(1);
    },
    methods: {
      show(i) {
        this.teamShow = true;
        this.message = i.row;
      },
      edit(p) {
        this.$router.push({ name:'add_m', params:{ editData: p } });},
      del(i, id) {
        let mess = confirm('确认删除？');
        if (mess) {
          this.$ajax({
            method: 'GET',
            url:deletehealthTheacher()+"?id=" + id,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.data1.splice(i, 1);
            this.$Message.success('删除成功');
          }).catch((error) => {
            this.$message.error('删除失败');
          });
        }
      },
      ok() {},
      getHTL() {
        this.$ajax({
          method: 'GET',
          url:healthTheacher(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data1 = res.data.data.content;
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
