import { REACT_APP_DEV_MODE, REACT_APP_PROD_MODE } from "@env"

const URL = process.env.NODE_ENV === 'development' ? REACT_APP_DEV_MODE : REACT_APP_PROD_MODE;

export const SignIn = async ({ email, password }) => {
    try {
        return await fetch(`${URL}/token/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }).then(
            response => {
                return response.json();
            },
            error => {
                console.log(error);
                return null;
            }
        );;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export const Register = async ({ name, email, password, role }) => {
    try {
        return await fetch(`${URL}/user/register/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, role, status:1 })
        }).then(
            response => {
                return response;
            },
            error => {
                console.log(error);
                return null;
            }
        );;

    } catch (error) {
        console.log(error);
        return null;
    }
};
