import React , { Component } from "react";
import API from "../../utils/API";

class Container extends Component {
    state = {
        result: {},
        search: ""
      };

      componentDidMount() {
        this.search();
      }

    search() {
        API.search()
        .then(res => { console.log(res) })
        .catch(err => console.log(err));
      }

    render() {
        return (
          <div className="container">
            <p className="content">lorem</p>
          </div>
        );
    }
  }

export default Container;