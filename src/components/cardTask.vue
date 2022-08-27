<template>
  <div class="bg-main">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-center">
          <div class="col-md-4 mt-5">
            <div>
              <input
                type="text"
                class="form-control"
                placeholder="Qual a tarefa de hoje?"
                autocomplete="off"
                v-model="mensagem"
                maxlength="36"
              />
            </div>
          </div>
          <div class="col-md-2 mt-5">
            <button @click="addTask" class="btn btn-blue text-white" :disabled ="!this.mensagem">Enviar</button>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="d-flex justify-content-center">
          <div class="col-md-6">
            <output-task
              @done="item.state = true"
              :state="item.state"
              @eliminar="deleteTask(i)"
              :taskinfo="item.mensagem"
              v-for="(item, i) in task"
              :key="i"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import outputTask from "@/components/outputTask.vue";
export default {
  name: "cardTask",
  components: {
    outputTask,
  },
  data() {
    return {
      task: [],
      mensagem: "",
    };
  },

  methods: {
    addTask() {
      this.task.push({ mensagem: this.mensagem, state: false });
      this.mensagem = "";
    },

    deleteTask(index) {
      this.task.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.btn-blue {
  background: rgb(9, 17, 33);
}

 
</style>
