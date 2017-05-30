$(onReady);

// start of onReady
function onReady() {
  // set txtResult to disabled
  $('#txtResult').attr('disabled', 'disabled');

  // start of cmdClear on-click
  $('#cmdClear').on('click', function() {
    // console.log('Clear clicked');
    $('#txtInputOne').val('');
    $('#txtInputTwo').val('');
    $('#txtResult').val(' ');
  }); // end of cmdClear on-click

  // start of cmdDivide on-click
  $('#cmdDivide').on('click', function() {
    if ($('#txtInputOne').val() === '' || $('#txtInputTwo').val() === '') {
      alert('Please supply a value in both inputs');
    } // end of if evaluation
    else {
      // define obj to POST on divide
      var objToDivide = {
        numOne: $('#txtInputOne').val(),
        numTwo: $('#txtInputTwo').val(),
        actType: 'divide'
      }; // end of obj to divide
      // Ajax POST toDivide definition
      $.ajax({
        type: 'POST',
        url: '/toDivide',
        data: objToDivide,
        // define success
        success: function(response) {
          $('#txtResult').val(response.resultDiv);
        } // end of success definition
      }); // end of Ajax POST toDivide
    } // end of else
  }); // end of cmdDivide on-click

  // start cmdMultiply on-click
  $('#cmdMultiply').on('click', function() {
    if ($('#txtInputOne').val() === '' || $('#txtInputTwo').val() === '') {
      alert('Please supply a value in both inputs');
    } // end of if evaluation
    else {
      // define obj to POST on Multiply
      var objToMultiply = {
        numOne: $('#txtInputOne').val(),
        numTwo: $('#txtInputTwo').val(),
        actType: 'multiply'
      }; // end of obj to multiply
      // Ajax POST toMultiply definition
      $.ajax({
        type: 'POST',
        url: '/toMultiply',
        data: objToMultiply,
        // define success
        success: function(response) {
          $('#txtResult').val(response.resultMultiply);
        } // end of success definition
      }); // end of Ajax POST toMultiply
    }
  });

  // start of cmdSubtract on-click
  $('#cmdSubtract').on('click', function() {
    if ($('#txtInputOne').val() === '' || $('#txtInputTwo').val() === '') {
      alert('Please supply a value in both inputs');
    } // end of if evaluation
    else {
      // define obj to POST on subtract
      var objToSubtract = {
        numOne: $('#txtInputOne').val(),
        numTwo: $('#txtInputTwo').val(),
        actType: 'subtract'
      }; // end definition of obj to subtract
      // Ajax POST toSubtract definition
      $.ajax({
        type: 'POST',
        url: '/toSubtract',
        data: objToSubtract,
        // define success
        success: function(response) {
          $('#txtResult').val(response.resultSubtract);
        } // end of success definition
      }); // end of Ajax POST toSubtract definition
    } // end of else
  }); // end of cmdSubtract on-click

  // start of cmdAdd on-click
  $('#cmdAdd').on('click', function() {
    if ($('#txtInputOne').val() === '' || $('#txtInputTwo').val() === '') {
      alert('Please supply a value in both inputs');
    } // end of if evaluation
    else {
      // start definition of obj to POST on add
      var objToAdd = {
        numOne: $('#txtInputOne').val(),
        numTwo: $('#txtInputTwo').val(),
        actType: 'add'
      }; // end definition of obj to POST on add
      // Ajax POST toAdd definition
      $.ajax({
        type: 'POST',
        url: '/toAdd',
        data: objToAdd,
        // define success
        success: function(response) {
          $('#txtResult').val(response.resultAdd);
        } // end of success definition
      }); // end of Ajax POST toAdd
    } // end of else
  }); // end of cmdAdd on-click

  /*** FULL CALCULATOR: START ***/
  var value = '';
  var valueOne = '';
  var valueTwo = '';
  var operation = '';

  $('#cmd7').on('click', function() {
    value += '7';
    return $('#txtInputOneA').val(value);
  });

  $('#cmd8').on('click', function() {
    value += '8';
    return $('#txtInputOneA').val(value);
  });

  $('#cmd9').on('click', function() {
    value += '9';
    return $('#txtInputOneA').val(value);
  });

  $('#cmd4').on('click', function() {
    value += '4';
    return $('#txtInputOneA').val(value);
  });

  $('#cmd5').on('click', function() {
    value += '5';
    return $('#txtInputOneA').val(value);
  });

  $('#cmd6').on('click', function() {
    value += '6';
    return $('#txtInputOneA').val(value);
  });

  $('#cmd1').on('click', function() {
    value += '1';
    return $('#txtInputOneA').val(value);
  });

  $('#cmd2').on('click', function() {
    value += '2';
    return $('#txtInputOneA').val(value);
  });

  $('#cmd3').on('click', function() {
    value += '3';
    return $('#txtInputOneA').val(value);
  });

  $('#cmd0').on('click', function() {
    value += '0';
    return $('#txtInputOneA').val(value);
  });

  // start of cmdD on-click
  $('#cmdD').on('click', function() {
    valueOne = value;
    value = '';
    operation = 'divide';
    $('#txtInputOneA').val('');
  }); // end of cmdD on-click

  // start of cmdM on-click
  $('#cmdM').on('click', function() {
    valueOne = value;
    value = '';
    operation = 'multiply';
    $('#txtInputOneA').val('');
  }); // end of cmdM on-click

  // start of cmdS on-click
  $('#cmdS').on('click', function() {
    valueOne = value;
    value = '';
    operation = 'subtract';
    $('#txtInputOneA').val('');
  }); // end of cmdS on-click

  // start of cmdA on-click
  $('#cmdA').on('click', function() {
    valueOne = value;
    value = '';
    operation = 'add';
    $('#txtInputOneA').val('');
  }); // end of cmdA on-click

  // start of cmdAC on-click
  $('#cmdAC').on('click', function() {
    valueOne = '';
    value = '';
    valueTwo = '';
    operation = '';
    $('#txtInputOneA').val('');
  }); // end of cmdAC on-click

  // start of cmdEqual on-click
  $('#cmdEqual').on('click', function() {
    valueTwo = value;
    value = '';
    // start definition of obj to POST
    var objToOperate = {
      numOne: valueOne,
      numTwo: valueTwo,
      actType: operation
    }; // end definition of obj to POST
    // start definition of Ajax POST
    $.ajax({
      type: 'POST',
      url: '/fullCalculator',
      data: objToOperate,
      // define success
      success: function(response) {
        $('#txtInputOneA').val(response);
      } // end of success definition
    }); // end definition of Ajax POST
  }); // end of cmdEqual on-click
  /*** FULL CALCULATOR: END ***/
}
