import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_DEV_MODE, REACT_APP_PROD_MODE } from "@env"

const API_URL = process.env.NODE_ENV === 'development' ? REACT_APP_DEV_MODE : REACT_APP_PROD_MODE;

export const SignIn = async ({ email, password }) => {
    try {
        const response = await fetch(`${API_URL}/token/`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(result));
        }
        return result;
    } catch (error) {
        alert('Usuário ou senha inválidos!')
        throw new Error(error.message);
    }
}

export const Register = async ({ name, phone, email, password, idRole }) => {
    try {
        const response = await fetch(`${API_URL}/user/register/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone, email, password, idRole, status:1 })
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(result));
        }
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const InactivateUserScreen = async (userId, reason) => {
    try {
      const token = await AsyncStorage.getItem('access'); 
      const data = { status: 0, reason }; // Status 0 para inativar
      const response = await sendAuthenticatedRequest(`/user/update/${userId}/admin/`, 'PATCH', data);

      if (response.ok) {
        return true; // para inativação bem-sucedida
      } else {
        return false; // para inativação falha
      }
    } catch (error) {
      console.log(error);
      return false; // para erro durante a inativação
    }
};
  

export const tokenRefresh = async () => {
    try {
        const refresh = await AsyncStorage.getItem('refresh');
        const response = await fetch(`${API_URL}/token/refresh/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh })
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(result));
        }
        const token = result['access']
        if(token){
            AsyncStorage.setItem('access', token);
        }
        return token;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getAccessToken = async () => {
    return await AsyncStorage.getItem('access');
};

export const logout = () => {
    AsyncStorage.clear()
};

export const sendAuthenticatedRequest = async (url, method = 'GET', data = null) => {
    try {
        let access = await getAccessToken();

        const requestOptions = {
            method: method,
            headers: {
                'Authorization': `Bearer ${access}`,
                'Content-Type': 'application/json'
            }
        };

        if (data) {
            requestOptions.body = JSON.stringify(data);
        }

        let response = await fetch(`${API_URL}${url}`, requestOptions);

        if (response.status === 401 || response.status === 403) {
            let newAccessToken = await tokenRefresh();
            AsyncStorage.setItem('access', newAccessToken);
            requestOptions.headers['Authorization'] = `Bearer ${newAccessToken}`;
            response = await fetch(`${API_URL}${url}`, requestOptions);
        }

        const result = await response.json();

        if (!response.ok) {
            throw new Error(JSON.stringify(result));
        }

        return result;
    } catch (error) {
        logout();
        throw new Error(error.message);
    }
};