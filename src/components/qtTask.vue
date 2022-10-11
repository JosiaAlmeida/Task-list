<template>
  <div class="d-flex justify-content-between mt-3 mb-4">
    <div>
      <h4 class="text-white text-center">TaskList Online</h4>
    </div>
    <div>
      <h4 class="text-white text-center">{{ qta }} / Tarefas</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "qtTask",
  props: {
    qta: { type: String, default: "0" },
  },
};
</script>

<style scoped>
.on {
  color: green;
}
.off {
  color: red;
}
</style>