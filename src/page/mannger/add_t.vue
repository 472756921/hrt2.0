<template>
    <div>
      <h2>添加健管师</h2>
      <div class="item">姓名：<Input v-model="name" style="width: 300px;"/></div>
      <div class="item">电话：<Input v-model="phone" style="width: 300px;"/></div>
      <div class="item">学历：<Input v-model="xl" style="width: 300px;"/></div>
      <div class="item">身份证号码：<Input v-model="idNumber " style="width: 258px;"/></div>
      性别：
      <RadioGroup v-model="sex">
        <Radio label="1">
          <Icon type="female"></Icon>
          <span>汉纸</span>
        </Radio>
        <Radio label="0">
          <Icon type="male"></Icon>
          <span>妹纸</span>
        </Radio>
      </RadioGroup>
      <div class="item">
       简介：
        <Input v-model="teamInt" type="textarea" :rows="4"  />
      </div>
      <uplode :type="3" @getImgUrl="getImgUrl"/>
      <Button type="primary" style="margin: 10px 0" @click="addan">添加</Button>
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
          phone: '',
          teamInt: '',
          xl: '',
          name: '',
          sex: 1,
          icon: '',
          idNumber: '',
        }
      },
      methods: {

        getImgUrl(data) {
          this.icon = data;
        },

        addan() {
          let data = {
            remarks: this.teamInt,
            name: this.name,
            phone: this.phone,
            education: this.xl,
            gender: this.sex,
            idNumber: this.idNumber,
            icon: {
              id: this.icon,
            },
          }

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
