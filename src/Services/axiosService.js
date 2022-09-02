import APIRequest from './axios.config';
//  El nombre APIRequest es un nombre que yo elijo

export function getDateFromApi(){
    return APIRequest.get('/data',{     // https://randomuser.me/api/
        validateStatus (status)
        {
            return status < 500; // resuelve solo si el estatus code es menor a 500
        }

    });
    // APIRequest.post('/login');
}

