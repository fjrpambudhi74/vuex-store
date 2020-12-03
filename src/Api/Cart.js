import API from './Api'

const END_POINT = 'cart'

export default {
    all(){
        return API.get(END_POINT);
    },

    store(data){
        return API.post(END_POINT, data);
    },

    delete(id){
        return API.delete(`${END_POINT}/${id}`);
    },

    deleteAll(){
        return API.delete(END_POINT);
    }
}