import axios from 'axios';

export function executeHttpGet(url, onSuccess, onFailure){
    axios.get(url)
        .then(function(response){
            onSuccess(url,response);
        })
        .catch(function(response){
            onFailure(url, response);
        });
}

export default function executeHttpPost(url, apiCallParams, onSuccess, onFailure){
    axios.post(url, apiCallParams, {headers:{"contentType":"application/json; charset=UTF-8"}})
        .then(function(response){
            onSuccess(url,response);
        })
        .catch(function(response){
            onFailure(url, response);
        });
}