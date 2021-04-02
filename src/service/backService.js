import axios from 'axios';

const url = 'http://localhost:8080/';
// const url = '';

function servicePost(path, body, goToCalendario){
    console.log(path, body);
    axios.post(url+path, 
             body,
            //  { headers: {
            //     Authorization: localStorage.getItem("token"),
            //   }}
         )
             .then(function (response) {
                 alert("Success!");
                 goToCalendario();
                 console.log(response.data);
             })
             .catch(function (error) {
                 console.log(error);
             });
}

function serviceGet(path, body){
    console.log(path, body);
    axios.get(url+path, 
             body,
            //  { headers: {
            //     Authorization: localStorage.getItem("token"),
            //   }}
         )
             .then(function (response) {
                alert("Success!");
                 console.log(response.data);
             })
             .catch(function (error) {
                 console.log(error);
             });
}

export {servicePost, serviceGet} ;