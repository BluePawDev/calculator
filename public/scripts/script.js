console.log('js/jq sourced');

$(onReady);

// start of onReady
function onReady() {
  // set txtResult to disabled
  $('#txtResult').attr('disabled', 'disabled');

  // start of cmdClear on-click
  $('#cmdClear').on('click', function() {
    console.log('Clear clicked');
    $('#txtInputOne').val('');
    $('#txtInputTwo').val('');
    $('#txtResult').val(' ');
  }); // end of cmdClear on-click

  // start of cmdDivide on-click
  $('#cmdDivide').on('click', function() {
    console.log('Divide clicked');
    // define obj to POST on divide
    var objToDivide = {
      numOne: $('#txtInputOne').val(),
      numTwo: $('#txtInputTwo').val(),
      actType: 'divide'
    }; // end of obj to divide
    console.log(objToDivide);
    // Ajax POST toDivide definition
    $.ajax({
      type: 'POST',
      url: '/toDivide',
      data: objToDivide,
      // define success
      success: function(response) {
        console.log(response);
        $('#txtResult').val(response.resultDiv);
      } // end of success definition
    }); // end of Ajax POST toDivide
  }); // end of cmdDivide on-click

// start cmdMultiply on-click
  $('#cmdMultiply').on('click', function() {
    console.log('Multiply clicked');
    // define obj to POST on Multiply
    var objToMultiply = {
      numOne: $('#txtInputOne').val(),
      numTwo: $('#txtInputTwo').val(),
      actType: 'multiply'
    }; // end of obj to multiply
    console.log(objToMultiply);
    // Ajax POST toMultiply definition
    $.ajax({
      type: 'POST',
      url: '/toMultiply',
      data: objToMultiply,
      // define success
      success: function(response) {
        console.log(response);
        $('#txtResult').val(response.resultMultiply);
      } // end of success definition
    }); // end of Ajax POST toMultiply
  });

  // start of cmdSubtract on-click
  $('#cmdSubtract').on('click', function() {
    console.log('Subtract clicked');
    // define obj to POST on subtract
    var objToSubtract = {
      numOne: $('#txtInputOne').val(),
      numTwo: $('#txtInputTwo').val(),
      actType: 'subtract'
    }; // end of obj to subtract definition
    console.log(objToSubtract);
    // Ajax POST toSubtract definition
    $.ajax({
      type: 'POST',
      url: '/toSubtract',
      data: objToSubtract,
      // define success
      success: function(response) {
        console.log(response);
        $('#txtResult').val(response.resultSubtract);
      } // end of success definition
    }); // end of Ajax POST toSubtract
  }); // end of cmdSubtract on-click

  // start of cmdAdd on-click
  $('#cmdAdd').on('click', function() {
    console.log('Add clicked');
    // define obj to POST on add
    var objToAdd = {
      numOne: $('#txtInputOne').val(),
      numTwo: $('#txtInputTwo').val(),
      actType: 'add'
    }; // end of obj to add definition
    console.log(objToAdd);
    // Ajax POST toAdd definition
    $.ajax({
      type: 'POST',
      url: '/toAdd',
      data: objToAdd,
      // define success
      success: function(response) {
        console.log(response);
        $('#txtResult').val(response.resultAdd);
      } // end of success definition
    }); // end of Ajax POST toAdd
  }); // end of cmdAdd on-click

} // end of onReady
