import store from "@/store/store";
import Axios from "axios";
import {UserDataTransferObject} from "@/api/models/userDataTransferObject";

// Set default config for Axios

const baseURL = 'http://yds-msp/api/';

export function apiAuth(method, data = '') {

    let endpointUrl = baseURL + 'auth/login'

    let dto = UserDataTransferObject.createDataTransferObject(data);

    console.log(dto);

    return Axios[method](endpointUrl, dto)
        .then(function (response) {
            // handle success
            if (response['data'].length == undefined) {
                store.state.user['token'] = response['data'].access_token;
                console.log(response)
            } else {
                // TODO: Throw error if empty?
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}