$(document).ready(function() {
  $("form").submit(function(event) {
    var question1Input1 = document.getElementById("gridRadios1A");
    var question1Input2 = document.getElementById("gridRadios1B");
    var question1Input3 = document.getElementById("gridRadios1C");
    var question2Input1 = document.getElementById("gridRadios2A");
    var question2Input2 = document.getElementById("gridRadios2B");
    var question2Input3 = document.getElementById("gridRadios2C");
    var question3Input1 = document.getElementById("gridRadios3A");
    var question3Input2 = document.getElementById("gridRadios3B");
    var question3Input3 = document.getElementById("gridRadios3C");
    var question4Input1 = document.getElementById("gridRadios4A");
    var question4Input2 = document.getElementById("gridRadios4B");
    var question4Input3 = document.getElementById("gridRadios4C");
    var question5Input1 = document.getElementById("gridRadios5A");
    var question5Input2 = document.getElementById("gridRadios5B");
    var question5Input3 = document.getElementById("gridRadios5C");

    if ((question1Input1).checked && (question2Input1).checked && (question3Input1).checked && (question4Input1).checked && (question5Input1).checked) {
      $('#css-design').show();
    }

    event.preventDefault();

  });

});
