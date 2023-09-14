<script setup>
import Job from './components/Job.vue';
import UserList from "./components/UserLists.vue";
import UserDetails from "./components/userdetails.vue";
</script>

<template>
  <Job/>
  <div>
    <user-list :user-list="users" @show-details="showDetails"></user-list>
    <user-details v-if="selectedUser" :user="selectedUser" @close-details="closeDetails"></user-details>
  </div>
</template>

<style>
.user-details {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
}

.modal {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.modal-content {
  color: #fff;
}
button{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
margin: auto;
}
button:hover {
  background-color: #2a2828;
  color: #bbbbbb;
}
</style>  


<script>

export default {
  components: {
    UserList,
    UserDetails,
  },
  data() {
    return {
      users: [
      {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      jobTitle: 'Software Engineer',
    },  
      ],
      selectedUser: null,
    };
  },
  methods: {
    showDetails(user) {
      this.selectedUser = user;
    },
    closeDetails() {
      this.selectedUser = null;
    },
  },
};
</script>

