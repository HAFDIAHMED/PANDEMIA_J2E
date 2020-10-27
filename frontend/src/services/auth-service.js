import axios from "axios";
const API_URL = "http://localhost:8080/api/auth";
class AuthService {
  login(email, password) {
    return axios.post("http://localhost:8080/api/auth/signin", {"email":email,"password":password})
                .then(response => {
                        if (response.data.accessToken) {
                            console.log(JSON.stringify(response.data));
                            localStorage.setItem("user", JSON.stringify(response.data));
                            this.props.history.push(`/dashboard`);
                        }
                        return response.data;
                      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email,name,password,addresse,categorie,telephone) {
    return axios.post(API_URL + "add", {email,name,password,addresse,categorie,telephone});
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
