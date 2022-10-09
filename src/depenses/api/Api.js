import axios from "axios";

const api = axios.create({
    baseURL: 'https://manage-company.app',
})

class Api {
    static userLogin(data) {
        return  api.post('/api/site/login/' , {"username": data.emailValue , "password": data.passValue},{
            // headers:{
            //     'Content-Type':'application/json',
            // }
        })}

    // static getUser(value) {
    //     return api.post('/api/public/users/76/notes/', {note: value})
    // }
    // static deleteNote(noteId){
    //     return api.delete(`api/public/users/76/notes/${noteId}/`)
    // }
    // static  editNote(noteId , value){
    //     return api.patch(`api/public/users/76/notes/${noteId}/`, {note: value})
    // }

}

export default Api;