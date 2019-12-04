import $ from 'jquery';
import './styles.css';
import { Doctor } from './doctor';

$(document).ready(function() {
  let issueSearch = new Doctor();
  $("#issue-form").submit(function(event) {
    event.preventDefault();
    issueSearch.medicalIssue = $('#issue-input').val();
    let issueAsync = issueSearch.searchIssue().then(function() {
      setTimeout(console.info('done'), 500);
    })
  })
});