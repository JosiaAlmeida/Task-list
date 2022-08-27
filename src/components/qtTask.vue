<template>
  <div class="container">
   <div class="row">
       <div class="col-md-6">
        <h4 class="text-white text-center mt-3">TaskList Online</h4>
       </div>
       <div class="col-md-6">
        <h4 class="text-white text-center mt-3 mb-4">{{qta}} /Task</h4>
       </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'qtTask',
  props: {
    qta: { type: String, default: "0"}
  }

}
</script>

<style scoped>
 
 .on{
  color: green;
 }
 .off{
  color: red;
 }
</style>