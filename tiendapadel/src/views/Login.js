import '../css/Login.css';
import React from 'react';

const LoginApp = () => {
    
  const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const obj = {
            email: email,
            password: password
        }
        fetch('https://apitiendadepadel.herokuapp.com/users/login', {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(json => {
                    console.log(json.Token_info.token)
                    localStorage.setItem("token",json.Token_info.token)
                    alert('Bienvenido');
                    window.location.href="./Paletas"})
         .catch(err => alert ('Error de Login'))
      }    

    return (
        <>
<div class="recuadro">
      <div class="recuadro2">
          <div>
                  <h1>Login a Tienda Padel</h1>
          </div>
          <div id="users" class="bg-black text-white">
          </div>

          <form  onSubmit={handleSubmit} class="col-10 col-md-5" >
                <label for="email" class="form-label">email</label>
                <input id="email" name="email" type="text" class="form-control" />
                <label for="password" class="form-label">password</label>
                <input id="password" name="password" type="text" class="form-control" autoComplete="new-password" />
                <input type="submit" value="Login" />
          </form>
          </div>
        </div>
        </>
        );    
};

export default LoginApp;