<script setup>
import axios from 'axios'
</script>

<template> 
  <div class="background-container">
    <form @submit.prevent="submitForm" action="POST">
      <h1  style="text-align:  center; padding: 5px; background-color: #333; color: #d3d3d3; font-weight: 600;font-size: 30px;font-family: Arial, Helvetica, sans-serif;">Job Application Form</h1>
      
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name"  />
  
      <label for="email">Email:</label> 
      <input type="email" id="email" v-model="formData.email"  />

      <label for="phone">Phone Number:</label>
      <input type="number" id="number" v-model="formData.number"  />
  
      <label for="jobTitle">Job Title:</label>
      <input type="text" id="jobTitle" v-model="formData.jobTitle"  />

     
  <div class="allbuttons">

    <button type="submit">Submit</button>

  </div>
    </form>
  </div>
  </template>
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          number:'',  
          jobTitle: '',
        },
      };
    }, 
    
    methods: {
    
  async submitForm() {
    console.log(this.formData)
    axios.post("http://localhost:3000/post", this.formData).then((res)=>{
        console.log(res.data)
        const ans=res.data;
    })
  }
},
  }

  </script>
   <style scoped>

   .background-container {
     /* background-image: url('https://wallpaperaccess.com/full/2994980.jpg'); */
     background-color: #333;
     background-size: cover;
     background-repeat: no-repeat;
     min-height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     position: relative;
   }
   
     form {
       background: rgba(88, 87, 87, 0.15); 
     border-radius: 10px;
     padding: 50px;
     backdrop-filter: blur(10px); 
     box-shadow: 2px 4px 8px rgba(170, 169, 169, 0.1);
     max-width: 400px;
   
     margin: 0 auto;
     
     border: 1px solid #494747;
   
     
   }
   
   h2 {
     text-align: center;
     font-size: 24px;
     background-color: #333;
     margin-bottom: 20px;
     color: #dd5656;
   }
   
   label {
     font-weight: bold;
     /* background-color: #111; */
     color: #fff;
     font-family: Arial, Helvetica, sans-serif;
   }
   
   input[type="text"],
   input[type="email"],
   input[type="number"],
   input[type="file"] {
     
     width: 100%;
     padding: 10px;
     margin: 8px 0;
     border: 1px solid #0a0a0a;
     border-radius: 5px;
     background-color: rgba(160, 160, 160,0.15);
     color: #fff;
     font-size: 20px;
     transition: border-color 0.2s;
   }
   
   .allbuttons{
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 5px;
   }
   
   
   button[type="submit"],button {
     background-color: #007bff;
     color: #fff;
     border: none;
     border-radius: 5px;
     padding: 12px 20px;
     cursor: pointer;
     font-family: Arial, Helvetica, sans-serif;
     font-weight: bold;
     transition: background-color 0.3s;
   }
   
   button[type="submit"]:hover,button:hover {
     background-color: #0056b3;
   }
     </style>