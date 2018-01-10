<template>
    <div>
      <h2>添加团队</h2>
      <div class="item">名称：<Input v-model="name" style="width: 300px; margin-left: 18px"/></div>
      <div class="item">分类：
        <Select v-model="type" style="width:300px; margin-left: 14px;">
          <Option value="1">儿科</Option>
          <Option value="2">心脏科类</Option>
          <Option value="3">妇科类</Option>
        </Select>
      </div>
      <div class="item">健管师：
        <Select v-model="admin" style="width:300px;" filterable>
          <Option value="it.id" v-for="(it, i) in HTL" :key="i">
            <span>{{it.name}}</span>
            <span style="float:right;color:#ccc">{{it.phone}}</span>
          </Option>
        </Select>
      </div>
      <div class="item">医生姓名：<Input v-model="doctorName" style="width: 290px;"/></div>
      <div class="item">医生职称：<Input v-model="zc" style="width: 290px;"/></div>
      <div class="item">
        医生简介：
        <Input v-model="docInt" type="textarea" :rows="4"  />
      </div>
      <div class="item">
        团队简介：
        <Input v-model="teamInt" type="textarea" :rows="4"  />
      </div>
      <uplode :type="2" @getImgUrl="getImgUrl"/>
      <span>建议尺寸 300*200</span>
      <br/>
      <Button type="primary" style="margin: 10px 0" @click="addan">添加团队</Button>
    </div>
</template>

<script type="text/ecmascript-6">
  import uplode from '../../components/upload.vue';
  import { teamAdd, healthTeacherList } from '../../interface';

    export default {
      name: 'add_t',
      components: { uplode },
      data() {
        return {
          type: '1',
          teamInt: '',
          docInt: '',
          doctorName: '',
          admin: '',
          name: '',
          zc: '',
          imgID: '',
          HTL: [],
        }
      },
      created() {
        this.getHTL();
      },
      methods: {
        getHTL() {
          this.$ajax({
            method: 'GET',
            url:healthTeacherList(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.HTL = res.data.data;
          }).catch((error) => {
            this.$message.error('获取健管师列表失败');
          });
        },
        addan() {
          if(!this.check()) {
            return false;
          }

          let data = {
            "name": this.name,
            "teamType":{
              "id": this.type,
            },
            "healthTeacher":{
              "id":1
            },
            "doctorName": this.doctorName,
            "position": this.zc,
            "remarks": this.teamInt,
            "doctorRemarks": this.docInt,
            "icon":{
              "id": this.imgID,
            }
          };

          this.$ajax({
            method: 'POST',
            url:teamAdd(),
            dataType: 'JSON',
            data: data,
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.$Message.success('添加成功');
          }).catch((error) => {
            this.$message.error(error.message);
          });
        },
        check() {
          if( this.name == '' ||  this.type == '' || this.doctorName == '' || this.zc == '' || this.teamInt == '' || this.docInt == '' || this.imgID == '') {
            this.$Message.warning('请完整填写团队信息');
            return false;
          }
        },
        getImgUrl(data) {
          this.imgID = data;
        },
      }
    };
</script>

<style scoped>
  .item{
    margin: 8px 0;
  }
</style>
