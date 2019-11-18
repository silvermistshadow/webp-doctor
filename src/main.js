import $ from 'jquery';
import './styles.css';
import { Doctor } from './doctor';

$(document).ready(function() {
  let issueSearch = new Doctor();
  $("#issue-form").submit(function(event) {
    event.preventDefault();
    
  })
});