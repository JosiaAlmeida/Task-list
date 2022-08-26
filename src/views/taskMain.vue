<template>
  <div class="bg-main">
    <cardTask />
  </div>
</template>

<script>

import cardTask from "@/components/cardTask.vue"
export default {
     name: "taskMain",
      components: {
      cardTask
        
      }
}
</script>

<style scoped>
.bg-main{
  background: url();
}

</style>