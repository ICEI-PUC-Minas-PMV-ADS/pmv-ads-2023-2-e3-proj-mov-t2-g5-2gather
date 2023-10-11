import { REACT_APP_DEV_MODE, REACT_APP_PROD_MODE } from "@env"

const URL = process.env.NODE_ENV === 'development' ? REACT_APP_DEV_MODE : REACT_APP_PROD_MODE;

export const GetRoles = async () => {
    try {
        return await fetch(`${URL}/role/list/`).then(
            response => {
                return response.json()
            },
            error => {
                console.log(error);
                return null;
            }
        );

    } catch (error) {
        console.log(error);
        return null;
    }
};