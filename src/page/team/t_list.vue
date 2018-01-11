<template>
  <div>
    <h2>团队列表</h2>
    <Table :columns="columns1" :data="data1"></Table>
    <Page :total="100" style="margin: 30px auto 10px;text-align: center"></Page>
    <Modal v-model="teamShow" title="团队详情" @on-ok="ok">
      <div class="item">团队名：<span class="info">{{showMessages.name}}</span></div>
      <div class="item">建立时间：<span class="info">{{showMessages.createDate}}</span></div>
      <div class="item">健管师：<span class="info">{{showMessages.healthName}}</span></div>
      <div class="item">健管师电话：<span class="info">{{showMessages.healthPhone}}</span></div>
      <div class="item">团队人数：<span class="info">{{showMessages.num}}</span></div>
      <div class="item">团队类型：<span class="info">{{showMessages.teamType.name}}</span></div>
      <div class="item Introduction">医生简介：<span class="info">{{showMessages.doctorRemarks}}</span></div>
      <div class="item Introduction">团队简介：<span class="info">{{showMessages.remarks}}</span></div>
      <div class="item">
        <img :src= showMessages.image title="医生头像" alt="医生头像"/>
        <img :src= showMessages.healthTeacherImg.url alt="健管师头像" title="健管师头像"/>
      </div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import { teamList, teamdetail, teamdelete } from '../../interface';

  export default {
    name: 't_list',
    data(){
      return {
        teamShow: false,
        columns1: [
          {
            title: '团队名',
            key: 'name'
          },
          {
            title: '健管师',
            key: 'healthName'
          },
          {
            title: '创建时间',
            key: 'createDate'
          },
          {
            title: '类型',
            key: 'teamType',
            render: (h, p) => {
              if (p.row.teamType != undefined ){
                return p.row.teamType.name;
              }
            }
          },
          {
            title: '现有人数',
            key: 'num',
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
                      this.show(params.row.id)
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
                      this.edit(params)
                    }
                  }
                }, '编辑'),
              ]);
            }
          }
        ],
        data1: [],
        showMessages: 	{
          createDate:'',
          doctorRemarks:'',
          healthName:'',
          healthPhone:'',
          healthTeacherId:'',
          healthTeacherImg:{
            id:'',
            url:''
          },
          id:'',
          image:'',
          name:'',
          num:'',
          remarks:'',
          teamType:{
            id:1,
            name:'',
            status:''
          }
        },
      }
    },
    created() {
      this.getData(1);
    },
    methods: {
      getData(page) {
        this.$ajax({
          method: 'GET',
          url:teamList() + '?pageSize=30&page=' + page,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data1 = res.data.data.content;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      show(i) {
        this.teamShow = true;
        this.getTeamMessage(i);
      },
      getTeamMessage(id) {
        this.$ajax({
          method: 'GET',
          url:teamdetail() + '?id=' + id,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.showMessages = res.data.data;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
      edit(p) {
        this.$router.push({ name:'add_t', params:{ editData: p.row } });
      },
      del(i, id) {
        let mess = confirm('确认删除？');
        if (mess) {
          this.$ajax({
            method: 'GET',
            url:teamdelete() +"?id=" + id,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.data1.splice(i, 1);
            this.$Message.success('删除成功');
          }).catch((error) => {
            this.$Message.error(error.message);
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
