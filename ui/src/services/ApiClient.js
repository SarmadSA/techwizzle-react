import axios from 'axios';
import {consolePrint} from '../helpers/debugger';

export function executeHttpGet(url, onSuccess, onFailure){
    consolePrint("Sending GET request to: " + url);
    axios.get(url)
        .then(function(response){
            consolePrint("Request successful");
            consolePrint("Response from server is: ");
            consolePrint(response);
            onSuccess(url, response);
        })
        .catch(function(response){
            consolePrint("Request Fail");
            consolePrint("Response from server is: ");
            consolePrint(response);
            onFailure(url, response);
        });
}

export function executeHttpPost(url, apiCallParams, onSuccess, onFailure){
    consolePrint("Sending POST request to: " + url);
    consolePrint("Payload: ");
    consolePrint(apiCallParams);
    axios.post(url, apiCallParams, {headers:{"contentType":"application/json; charset=UTF-8"}})
        .then(function(response){
            consolePrint("Request successful");
            consolePrint("Response from server is: ");
            consolePrint(response);
            onSuccess(url, response);
        })
        .catch(function(response){
            consolePrint("Request Fail");
            consolePrint("Response from server is: ");
            consolePrint(response);
            onFailure(url, response);
        });
}