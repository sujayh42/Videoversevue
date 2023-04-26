
<template>
  <header class="header">
        <div class="header_container">
          <div class="none"> </div>
          
  
          <div class="user">
            <div class="icon">
              <i class="fa-solid fa-video"></i>
              <i class="fa-solid fa-grip"></i>
              <i class="fa-solid fa-bell"></i>
            </div>
        
            <div class="img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkXcvlHhC-kjtdmdFGVsdUVrzpwwMHw5Y6A&usqp=CAU" width="50px" alt="">
            </div>
          </div>
  
          <div class="toggle">
            <i class="fa-solid fa-bars" id="header-toggle"></i>
          </div>
        </div>
      </header>
  
      <div id="main">
    <div id="login">
      <h2>Login to VideoVerse</h2>
      <form @submit.prevent="submitForm">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
        <br>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
        <br>
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
  <footer class="er ">
        <div class="header_container">
          <div class="none"> </div>
          
  
       
  
          <div class="toggle">
            <i class="fa-solid fa-bars" id="header-toggle"></i>
          </div>
        </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    submitForm() {
     
      if (this.username === 'sit' && this.password === 'lhbc') {
        
        this.$router.push('/main')
      } else {
        
        this.errorMessage = 'Invalid username or password'
      }
    }
  }
}
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}

#main {
  font-family: 'Poppins', sans-serif;
  padding: 16px 16px 0;
  margin: 56px 0 0 0;
  font-size: 16px;
  color: #58555e;
  background: 
  #4e4d4d;
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #232323;
    box-shadow: 0 1px 0 rgba(22, 8, 43, 0.1);
  }
  
  header .header_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }
  .footer {
    position: fixed;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
    background-color: #232323;
    box-shadow: 0 1px 0 rgba(22, 8, 43, 0.1);
  }
  
  footer .footer_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }
</style>  
