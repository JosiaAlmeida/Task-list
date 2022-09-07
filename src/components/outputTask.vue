<template>
  <div class="mb-4 bg-black bg-opacity-25">
    <div :class="state ? 'verdadeiro' : 'falso'" class="bg-b bg-whitebg-white">
      <div class="row ">
        <div class="col-md-8">
          <h6>{{ taskinfo }}</h6>
        </div>
        <div class="col-md-4 mb-2 left">
          <button @click="$emit('done')" class="space btn btn-success">
             <img @click="done" class="png" src="@/assets/icon2.png" alt=""> 
          </button>
          <button @click="$emit('eliminar')" class="btn btn-danger">
            <img class="png" src="@/assets/icon3.png" alt=""> 
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

.png{
  width: 20px;
}
.bg-b {
  color: #fff;
  padding: 10px 5px 0px 20px;
  border-radius: 2px;
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

 
 
</style>