<template>
  <div>
    <div id="myEditor" style="width:1000px;height:240px;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'editor',
    mounted(){
      let um = UM.getEditor('myEditor');
    },
    destroyed () {
      UM.delEditor('myEditor');
    },
    data(){
      return {
        innerData: '',
      }
    },
    methods: {
      getInfo() {
        return UM.getEditor('myEditor').getContent();
      },
    },
  };
</script>

<style scoped>

</style>
