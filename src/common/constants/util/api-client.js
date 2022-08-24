import API_STATUS from "../api-status";
import { API_ENDPOINTS } from "..";
import { simulateGetUserData_Success } from "./simulate/api-simulate";

const baseUrl = "http://url-here.example";

// NOTE for now it is making fake simulated calls until the apis are created

const apiClient = {
  send: (endPoint, payload) => {
    switch(endPoint) {
      default:
        return {
          status: API_STATUS.ERROR,
          error: 'Endpoint does not exist.',
          data: null,
        }
      case API_ENDPOINTS.user.GET_USER_ACCOUNT_INFO:
        return simulateGetUserData_Success(payload);
    }
  },

}

export default apiClient;