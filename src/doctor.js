require('dotenv').config();
import $ from 'jquery';
const Handlebars = require("handlebars");

const apiKey = process.env.API_KEY;

export class Doctor {
  constructor() {
    this.medicalIssue;
    this.doctorName = [];
    this.practiceList = [];
  }
  async searchIssue() {
    let that = this;
    let issue = this.medicalIssue;
    let illnessSearch = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        }
        else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    illnessSearch.then(function(response) {
      let data = JSON.parse(response);
      var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
      document.getElementById('doctor-list').innerHTML = template(data);
      return true;

    }, function(error) {
      $(".showErrors").text(`There was an error somewhere in here: ${error}`);
      console.error(error);
      return false;
    });
  }
}