$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    const upperLimit = parseInt($('input#upperLimit').val());
    const multiple = parseInt($('input#multiple').val());

    if (!upperLimit) {
      alert("Upper Limit is required");
    } else if (!multiple) {
      alert("Multiple is required");
    } else if (upperLimit <= 0 || multiple <= 0) {
      alert("Positive Integers Only");
    } else if (multiple > upperLimit) {
      alert("Count up by number higher than upper limit");
    } else {
      for (let i = 0; i <= upperLimit; i += multiple) {
        $('div#output').append('<p>' + i + '</p>');
      };
    };
  });
});