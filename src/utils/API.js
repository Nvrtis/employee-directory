import axios from 'axios'

// our request for employees
export default {
  randomEmployee: function() {
    return axios.get('https://randomuser.me/api/?results=20')
  }

}