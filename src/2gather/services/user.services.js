import { sendAuthenticatedRequest } from "./auth.services.js";

export const GetUserList = async () => {
  try {
    const result = await sendAuthenticatedRequest("/user/list/", "GET");
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const UpdateUserStatus = async ({ userId, reason }) => {
  try {
    const data = { status: 0 };
    const result = await sendAuthenticatedRequest(
      `/user/update/${userId}/admin/`,
      "PATCH",
      data
    );
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const UpdateUserDetails = async ({ userId, name, email, idRole }) => {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_DEV_API_URL 
      : process.env.REACT_APP_PROD_API_URL; 
  const data = { name, email, idRole };
  try {
    const response = await sendAuthenticatedRequest(
      `${API_URL}/user/update/${userId}/admin/`,
      "PATCH",
      data
    );
    const result = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(result));
    }
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};