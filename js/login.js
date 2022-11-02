
let userEl = document.getElementById('user')
let passEl = document.getElementById('pass')
let btnEl = document.getElementById('btn')
let checkboxEl= document.getElementById("checkbox")
let error=document.querySelector(".error")


async function getLogin(user){
  let res =  await fetch('https://pressa-exem.herokuapp.com/login',{
        method:'post',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(user)
    })
  let  response = await res.json()
  console.log(response)
    if(response.token && response.token != null && userEl.value != "" && passEl.value !="" && checkboxEl.value !=""){
      window.localStorage.setItem('token',response.token)
      window.location.replace('./index.html')
    }else{
      error.style.display = 'block'
          }
}

btnEl.addEventListener('click',()=>{
    const user ={
        username:userEl.value,
        password:passEl.value,
        gender:checkboxEl.value 
    }
    getLogin(user)
})


