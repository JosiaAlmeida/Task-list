<template>
  <div>
    <div class="d-flex justify-content-end mt-1">
      <a target="__blank" href="https://my-portfolio-hernanysimao.vercel.app/"
        ><img class="png" src="@/assets/icon.png" alt="" />
      </a>
      <div v-show="view" class="alert alert-dark" role="alert">
        O estado das suas tarefas são temporários, não actualize a página.
      </div>
      <button @click="viewTask" class="btn">
        <img src="@/assets/icon4.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "infoTask",
  data() {
    return {
      view: false,
    };
  },
  methods: {
    viewTask() {
      this.view = true;
      setTimeout(() => {
        this.view = false;
      }, 4000);
    },
  },
};
</script>
  
<style scoped>
.btn {
  border: none;
}

.png {
  width: 50px;
  height: 50px;
}
</style>