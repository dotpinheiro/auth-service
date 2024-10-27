import { useNavigate } from 'react-router-dom';
import {api} from "../../config/api";
import {notification} from "antd";

export function useAuthService() {
  const navigate = useNavigate();

  async function authenticate(email: string, password: string) {
    try{
      await api.post('/auth', { email, password });
      navigate('/users');
    }catch (e) {
      notification.error({ message: 'Error', description: e.message });
      console.error(e);
    }
  }

  return {
    authenticate
  }
}
