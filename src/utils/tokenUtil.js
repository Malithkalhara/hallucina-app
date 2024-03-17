import { ApiClient } from "./ApiClient";

export const refreshToken = async () => {
    await ApiClient.post("/user/refresh",{
        refreshToken: localStorage.getItem("refreshToken"),
    })
        .then((response) => {
            console.log("New token:", response.data.accessToken);
            localStorage.setItem("token", response.data.accessToken);
        })
        .catch((error) => {
            console.log("Error refreshing token:", error.message);
        });
}
