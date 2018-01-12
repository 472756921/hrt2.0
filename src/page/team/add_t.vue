<template>
    <div>
      <h2 v-if="status==1">修改团队</h2>
      <h2 v-if="status==0">添加团队</h2>
      <div class="item">名称：<Input v-model="name" style="width: 289px; margin-left: 28px"/></div>
      <div class="item">分类：
        <Select v-model="type" style="width: 289px; margin-left: 24px;">
          <Option value="1">儿科</Option>
          <Option value="2">心脏科类</Option>
          <Option value="3">妇科类</Option>
        </Select>
      </div>
      <div class="item">健管师：
        <Select v-model="admin" style="width: 289px; margin-left: 10px" filterable ref="adminName" :placeholder="this.editData.healthName">
          <Option :value="it.id" v-for="(it, i) in HTL" :key="i">
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
      <div>当前头像：</div>
      <img :src="editData.image.url" width="300" height="200" v-if="status==1&&imgNochange"/>
      <uplode :type="2" @getImgUrl="getImgUrl"/>
      <span>建议尺寸 300*200</span>
      <br/>
      <Button type="primary" style="margin: 10px 0" @click="addan"  v-if="status==1">修改团队</Button>
      <Button type="primary" style="margin: 10px 0" @click="addan"  v-if="status==0">添加团队</Button>
    </div>
</template>

<script type="text/ecmascript-6">
  import uplode from '../../components/upload.vue';
  import { teamAdd, healthTeacherList, teamedit } from '../../interface';

    export default {
      name: 'add_t',
      components: { uplode },
      data() {
        return {
          status: 0,    //0  create    1  edit
          type: '1',
          teamInt: '',
          docInt: '',
          doctorName: '',
          admin: '',
          name: '',
          zc: '',
          imgID: '',
          HTL: [],
          editData: '',
          teamID: '',
          imgNochange: true,
        }
      },
      created() {
        this.getHTL();
        if (this.$route.params.editData != null) {
          this.editData = this.$route.params.editData;
          this.status = 1;
          this.docInt = this.editData.doctorRemarks;
          this.teamInt = this.editData.remarks;
          this.admin = this.editData.healthTeacherId;
          this.doctorName = this.editData.doctorName;
          this.zc = this.editData.position;
          this.teamInt = this.editData.remarks;
          this.docInt = this.editData.doctorRemarks;
          this.name = this.editData.name;
          this.teamID = this.editData.id;
          this.imgID = this.editData.image.id;
        }
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
          let data = this.getDateStatus();
          let URL = teamAdd();
          if (this.status == 1) {
            URL = teamedit();
          }
          this.$ajax({
            method: 'POST',
            url: URL,
            dataType: 'JSON',
            data: data,
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (this.status == 0) {
              if(res.data.msg == '成功') {
                this.$Message.success('添加成功');
              } else {
                this.$message.error('网络延迟，请稍后再试');
              }
            } else {
              if(res.data.msg == '成功') {
                this.$Message.success('修改成功');
              } else {
                this.$message.error('网络延迟，请稍后再试');
              }
            }
          }).catch((error) => {
            this.$message.error(error.message);
          });
        },
        check() {
          if( this.name == '' ||  this.type == '' || this.doctorName == '' || this.zc == '' || this.teamInt == '' || this.docInt == '' || this.imgID == '' || this.imgID == null) {
            this.$Message.warning('请完整填写团队信息');
            return false;
          } else {
            return true;
          }
        },
        getImgUrl(data) {
          this.imgID = data;
          this.imgNochange = false;
        },
        getDateStatus() {
          let dataSave = {
            "name": this.name,
            "teamType":{
              "id": this.type,
            },
            "healthTeacher":{
              "id": this.admin,
            },
            "doctorName": this.doctorName,
            "position": this.zc,
            "remarks": this.teamInt,
            "doctorRemarks": this.docInt,
            "icon":{
              "id": this.imgID,
            }
          };
          let dataEdit = {
            "id" : this.teamID,
            "name": this.name,
            "teamType":{
              "id": this.type,
            },
            "healthTeacher":{
              "id":this.admin,
            },
            "doctorName": this.doctorName,
            "position": this.zc,
            "remarks": this.teamInt,
            "doctorRemarks": this.docInt,
            "icon":{
              "id": this.imgID,
            }
          };
          if (this.status == 0) {
            return dataSave;
          } else if (this.status == 1) {
            return dataEdit;
          } else {
            return 'no';
          }
        },
      }
    };
</script>

<style scoped>
  .item{
    margin: 8px 0;
  }
</style>
