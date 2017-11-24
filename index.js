const token = '9513726d32cc1d37b0a8c014aeaf2a8743782d1b'
fetch('https://api.github.com/user/repos', {
   headers: {
     Authorization: `token ${token}`
   }
}).then(res => res.json()).then(json => console.log(json));