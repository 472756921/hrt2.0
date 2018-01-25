<template>
  <div>
    <script id="editor" type="text/plain" style="width:980px;height:300px;"></script>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'editor',
    mounted(){
      let ue = UE.getEditor('editor');
    },
    destroyed () {
      UE.delEditor('editor');
    },
    data(){
      return {
        innerData: '',
      }
    },
    methods: {
      getInfo() {
        console.log(UE.getEditor('editor').getContent())
//        return UE.getEditor('editor').getContent();
      },
    },
  };
</script>

<style scoped>

</style>
