import {api} from "../../config/api";

export function useRbacService(){
  async function getPermissions(){
    return await api.get('/rbac/permissions');
  }

  async function getRoles(){
    return await api.get('/rbac/roles');
  }

  async function createRole(role){
    return await api.post('/rbac/roles', role);
  }

  async function createPermission(permission){
    return await api.post('/rbac/permissions', permission);
  }

  return {
    getPermissions,
    getRoles,
    createRole,
    createPermission
  }
}
