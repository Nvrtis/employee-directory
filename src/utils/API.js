import axios from 'axios';

const url = 'https://randomuser.me/api/'
const searchAmount = '?results=20'
const gender = "&gender="


export default {
  // Retrieve 20 random users
  search: function () {
    return axios.get(url + searchAmount);
  },
  searchByGender: function (query) {
    return axios.get(url + searchAmount + gender + query);
  }
};



// https://randomuser.me/api/?gender=female