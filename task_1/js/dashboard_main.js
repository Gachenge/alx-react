import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  const body = $('body');

  // Create and append paragraphs and a button
  body.append($('<p>Holberton Dashboard</p>'));
  body.append($('<p>Dashboard data for the students</p>'));
  body.append($('<button id="startButton">Click here to get started</button>'));
  body.append($('<p id="count"></p>'));
  body.append($('<p>Copyright - Holberton School</p>'));

  // Function to update the click count
  let clickCount = 0;
  function updateCounter() {
    clickCount += 1;
    $('#count').text(`${clickCount} clicks on the button`);
  }

  // Bind the debounce function to the button click event
  $('#startButton').on('click', _.debounce(updateCounter, 500));
});
