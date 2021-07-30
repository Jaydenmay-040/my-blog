fetch('https://stark-mesa-91102.herokuapp.com/get-blogs/')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://sheltered-earth-99321.herokuapp.com/auth', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"username": "thapelo", "password": "thapelo"})
}).then(res => res.json())
  .then(res => {
            console.log(res);
            myStorage = window.localStorage;
            console.log(res["access_token"]);
            myStorage.setItem("jwt_token", res["access_token"]);
   });
