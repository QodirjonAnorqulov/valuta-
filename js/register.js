let first = document.querySelector('.first')
let second = document.querySelector('.second')
let cancelbtn = document.querySelector('.signupbtn')


async function getToken (user){
   let res = await fetch ('https://pressa-exem.herokuapp.com/register',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(user)
    })
    let response = await res.json()
 if (response.token && response.token != null && first.value != "" && second.value != "") {
    window.localStorage.setItem('token', response.token)
    window.location.replace('./index.html')
 }
    }
    cancelbtn.addEventListener('click', (e)=>{
  e.preventDefault()
  const user = {
    username: first.value,
    password: second.value,
  }
  getToken(user)
    })





// Получить модель
var modal = document.getElementById('id01');

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
