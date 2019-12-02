import axios from "axios";

export default {
  
  register: function(newUserInfo) {
    return axios.post("/register", newUserInfo);
  },

  login: function(loginData) {
    return axios.post("/login", loginData);
  },

  createTable: function(tableInfo) {
    return axios.post("/newgame", tableInfo);
  },
  logout: function() {
    return axios.get("/logout");
  }
};
