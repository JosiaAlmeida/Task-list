<template>
  <div>
    <div class="container">
      <info-task />
      <qtTask :qta="index" />
      <div class="row">
        <div class="d-flex justify-content-center">
          <div class="col-md-4">
            <div>
              <input
                type="text"
                class="form-control"
                placeholder="Qual é a tarefa de hoje?"
                autocomplete="off"
                v-model="mensagem"
                maxlength="36"
                max="36"
              />
            </div>
          </div>
          <div class="col-md-2">
            <button
              @click="addTask"
              class="btn btn-blue text-white"
              :disabled="!this.mensagem"
            >
              Adicionar
            </button>
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
import qtTask from "@/components/qtTask.vue";
import infoTask from "@/components/infoTask.vue";
export default {
  name: "cardTask",
  components: {
    outputTask,
    qtTask,
    infoTask,
  },
  data() {
    return {
      task: [],
      mensagem: "",
      isEditing: false,
    };
  },

  methods: {
    addTask() {
      this.task.push({ mensagem: this.mensagem, state: false });
      this.mensagem = "";
      this.saveTask();
    },

    deleteTask(index) {
      this.task.splice(index, 1);
      this.saveTask();
    },

    saveTask() {
      const parsed = JSON.stringify(this.task);
      localStorage.setItem("task", parsed);
    },
  },

  mounted() {
    window.onbeforeunload = function () {
      return "Are you sure of this action? You will lose all the data from your list.";
    };

    if (localStorage.mensagem) {
      this.mensagem = localStorage.mensagem;
    }
    if (localStorage.index >= 0) {
      this.index = localStorage.index;
    }

    if (localStorage.getItem("task")) {
      try {
        this.task = JSON.parse(localStorage.getItem("task"));
      } catch (e) {
        localStorage.eliminar("task");
      }
    }
  },

  watch: {
    mensagem(newMensagem) {
      localStorage.mensagem = newMensagem;
    },

    index(newIndex) {
      localStorage.index = newIndex;
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
}
.btn-blue {
  background: rgb(9, 17, 33);
}

.png {
  width: 50%;
  height: 100%;
}
</style>
