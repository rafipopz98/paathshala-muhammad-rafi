<template id="alll">
  <h1 style="color: aliceblue; padding: 10px;">User details</h1>
  
  <div  class="user-list">
    <div v-for="user in userList" :key="user.id" @click="showUserDetails(user)">
      <div class="user-card">
        <h1>{{ user.name }}</h1>
        <h4>{{ user.email }}</h4>
      </div>
    </div>
  </div>


<div id="toast" v-if="showToast"> {{ toastMessage }}</div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    userList: Array,
  },
  data(){
    return{
        user:[],
    }
  },
  methods: {
    showUserDetails(user) {
      this.$emit('show-details', user);
    },
  },
};
</script>

<style scoped>
.user-list {
    padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
h1{
  padding: 5px;
  text-align: center;
}
.user-card {
  /* background-color: #f5f5f5; */
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  text-align: center;
  width: 240px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user-card h1 ,h1{
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 10px;
  color: #333;
}

.user-card h4 {
  font-size: 1rem;
  margin: 0;
  color: #666;
}

.user-card p {
  margin: 0;
  color: #444; /* Additional user details color */
}

.user-card:hover {
  background-color: #e0e0e0;
}
</style>
