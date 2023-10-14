fetch('https://api.github.com/users')
.then((rsponse)=>rsponse.json())
.then((rsponse)=>console.log(rsponse))
.catch((error)=>console.log(error))