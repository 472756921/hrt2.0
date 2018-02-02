<template>
    <div>
      <h2 v-if="status==0">添加健管师</h2>
      <h2 v-if="status==1">修改健管师</h2>
      <div class="item">姓名：<Input v-model="name" style="width: 300px;"/></div>
      <div class="item">电话：<Input v-model="phone" style="width: 300px;"/></div>
      <div class="item">学历：<Input v-model="xl" style="width: 300px;"/></div>
      <div class="item" v-if="status==0">身份证号码：<Input v-model="idNumber " style="width: 258px;"/></div>
      性别：
      <RadioGroup v-model="sex">
        <Radio label="1">
          <Icon type="female" style="font-size: 16px; color:lightskyblue;"></Icon>
          <span>汉纸</span>
        </Radio>
        <Radio label="0">
          <Icon type="male" style="font-size: 16px; color:deeppink;"></Icon>
          <span>妹纸</span>
        </Radio>
      </RadioGroup>
      <div class="item">
       简介：
        <Input v-model="teamInt" type="textarea" :rows="4"  />
      </div>
      <div>当前头像：</div>
      <img :src="editData.icon.url" width="300" height="200" v-if="status==1&&imgNochange"/>
      <uplode :type="3" @getImgUrl="getImgUrl"/>
      <span>建议尺寸 300*200</span><br/>
      <Button type="primary" style="margin: 10px 0" @click="addan"  v-if="status==1">修改健管师</Button>
      <Button type="primary" style="margin: 10px 0" @click="addan"  v-if="status==0">添加健管师</Button>
    </div>
</template>

<script type="text/ecmascript-6">
  import uplode from '../../components/upload.vue';
  import { newhealthTheacher } from '../../interface';

    export default {
      name: 'add_t',
      components: { uplode },
      data() {
        return {
          imgNochange: true,
          phone: '',
          teamInt: '',
          xl: '',
          name: '',
          sex: 1,
          icon: '',
          idNumber: '',
          tID: '',
          status: 0,  //0  create    1  edit
          editData: '',
        }
      },
      created() {
        if (this.$route.params.editData != null) {
          this.status = 1;
          this.editData = this.$route.params.editData;
          this.name = this.editData.name;
          this.phone = this.editData.phone;
          this.xl = this.editData.education;
          this.sex = this.editData.gender;
          this.icon = this.editData.icon;
          this.tID = this.editData.id;
          this.teamInt = this.editData.remarks;
        }
      },
      methods: {
        getImgUrl(data) {
          this.icon = data;
          this.imgNochange = false;
        },
        addan() {
          let data = this.getDateStatus();
          this.$ajax({
            method: 'POST',
            url:newhealthTheacher(),
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
          if( this.name == '' ||  this.teamInt == '' || this.phone == '' || this.xl == '' || this.sex == '' || this.idNumber == '' || this.icon == '') {
            this.$Message.warning('请完整填写健管师信息');
            return false;
          } else {
            return true;
          }
        },
        getDateStatus() {
          let dataSave = {
            remarks: this.teamInt,
            name: this.name,
            phone: this.phone,
            education: this.xl,
            gender: this.sex,
            idNumber: this.idNumber,
            icon: {
              id: this.icon,
            },
          };
          let dataEdit = {
            remarks: this.teamInt,
            name: this.name,
            phone: this.phone,
            education: this.xl,
            gender: this.sex,
            icon: {
              id: this.icon,
            },
            id: this.tID,
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
