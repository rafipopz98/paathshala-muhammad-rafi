<template>
    <div class="user-details">
      <div class="modal">
        <div class="modal-content">
          <h1>{{ user.name }}</h1>
          <h4>{{ user.email }}</h4>
          <p>{{ user.number }}</p>
          <p>{{ user.jobTitle }}</p>
          <button @click="closeUserDetails">X</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['user'],
    methods: {
      closeUserDetails() {
        this.$emit('close-details'); 
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-content{
    gap: 20px;
  }
  h1,h4,p,button{
    padding: 5px;
  }
</style>