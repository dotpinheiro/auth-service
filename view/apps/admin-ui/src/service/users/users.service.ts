import {api} from "../../config/api";

export function useUserService(){

  async function getUsers(){
    return await api.get('/user');
  }

  async function createUser(user){
    return await api.post('/user', user);
  }

  return {
    getUsers,
    createUser
  }
}
