
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
      <h1>Login to VideoVerse</h1>
      <input type="text" name="username" v-model="input.username" placeholder="Username" />
      <br>
      <br>
      <input type="password" name="password" v-model="input.password" placeholder="Password" />
      <br>
      <br>


      <button type="button"><a href="/main">Login </a></button>
    </div>
  </div>
  <footer class="footer ">
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
  name: 'Login',
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
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
    height: 56px;
  }
  .footer {
    position: fixed;
    top: 0;
    left: 0;
    width: 10%;
    background-color: #232323;
    box-shadow: 0 1px 0 rgba(22, 8, 43, 0.1);
  }
  
  footer .footer_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
  }
</style>  