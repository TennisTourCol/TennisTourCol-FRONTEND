import axios from 'axios';

const url = 'http://localhost:8080/';
// const url = '';

function servicePost(path, body, method){
    console.log(path, body);
    axios.post(url+path, 
             body,
            //  { headers: {
            //     Authorization: localStorage.getItem("token"),
            //   }}
         )
             .then(function (response) {
                 alert(response.data.message);
                 method();
                 console.log(response.data);
             })
             .catch(function (error) {
                 console.log(error);
             });
}

function serviceGet(path, body, method){
    console.log(path, body);
    axios.get(url+path, 
             body,
            //  { headers: {
            //     Authorization: localStorage.getItem("token"),
            //   }}
         )
             .then(function (response) {
                // alert("Success!");
                var rt = JSON.parse(response.data.body)
                console.log(rt.results);
                method(rt.results)
             })
             .catch(function (error) {
                 console.log(error);
             });
}

export {servicePost, serviceGet} ;