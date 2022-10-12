<template>
  <div class="mb-4 bg-black bg-opacity-25">
    <div :class="state ? 'verdadeiro' : 'falso'" class="bg-b bg-whitebg-white">
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center w-custom">
          <h6>{{ taskinfo }}</h6>
        </div>

          </button>
          <button @click="$emit('eliminar')" class="space btn btn-danger">
            <img class="png" src="@/assets/icon3.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "outputTask",
  data() {
    return {
     
    }
  },
  props: {
    taskinfo: { type: String, default: "" },
    state: { type: Boolean, default: false },
  }, 
   
      
};
</script>

<style scoped>
.png {
  width: 20px;
}
.bg-b {
  color: #fff;
  padding: 10px 5px 0px 20px;
  border-radius: 5px;
}

.falso {
  border-left: 3px solid rgb(143, 4, 4);
}

.verdadeiro {
  border-left: 3px solid rgb(0, 255, 13);
}

.space {
  margin-right: 5px;
}
@media screen and (max-width: 768px) {
  .mb-mobile-2 {
    margin-bottom: 5px;
  }
}
</style>