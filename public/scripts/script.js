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
    }
  });

  // start of cmdSubtract on-click
  $('#cmdSubtract').on('click', function() {
    if ($('#txtInputOne').val() === '' || $('#txtInputTwo').val() === '') {
      alert('Please supply a value in both inputs');
    } // end of if evaluation
    else {
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
    } // end of else
  }); // end of cmdSubtract on-click

  // start of cmdAdd on-click
  $('#cmdAdd').on('click', function() {
    if ($('#txtInputOne').val() === '' || $('#txtInputTwo').val() === '') {
      alert('Please supply a value in both inputs');
    } // end of if evaluation
    else {
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
    } // end of else
  }); // end of cmdAdd on-click


  /*** FULL CALCULATOR: START ***/
  var value = '';
  var valueOne = '';
  var valueTwo = '';
  var operation = '';

  $('#cmd7').on('click', function() {
    value += '7';
    console.log('cmd7 clicked:', value);
    return $('#txtInputOneA').val(value);
  });

  $('#cmd8').on('click', function() {
    value += '8';
    console.log('cmd8 clicked:', value);
    return $('#txtInputOneA').val(value);
  });

  $('#cmd9').on('click', function() {
    value += '9';
    console.log('cmd9 clicked:', value);
    return $('#txtInputOneA').val(value);
  });

  $('#cmd4').on('click', function() {
    value += '4';
    console.log('cmd4 clicked:', value);
    return $('#txtInputOneA').val(value);
  });

  $('#cmd5').on('click', function() {
    value += '5';
    console.log('cmd5 clicked:', value);
    return $('#txtInputOneA').val(value);
  });

  $('#cmd6').on('click', function() {
    value += '6';
    console.log('cmd6 clicked:', value);
    return $('#txtInputOneA').val(value);
  });

  $('#cmd1').on('click', function() {
    value += '1';
    console.log('cmd1 clicked:', value);
    return $('#txtInputOneA').val(value);
  });

  $('#cmd2').on('click', function() {
    value += '2';
    console.log('cmd2 clicked:', value);
    return $('#txtInputOneA').val(value);
  });

  $('#cmd3').on('click', function() {
    value += '3';
    console.log('cmd3 clicked:', value);
    return $('#txtInputOneA').val(value);
  });

  $('#cmd0').on('click', function() {
    value += '0';
    console.log('cmd0 clicked:', value);
    return $('#txtInputOneA').val(value);
  });

  // start of cmdD on-click
  $('#cmdD').on('click', function() {
    valueOne = value;
    value = '';
    operation = 'divide';
    $('#txtInputOneA').val('');
    console.log('valueOne is:', valueOne);
    console.log('value is:', value);
  }); // end of cmdD on-click

  // start of cmdM on-click
  $('#cmdM').on('click', function() {
    valueOne = value;
    value = '';
    operation = 'multiply';
    $('#txtInputOneA').val('');
    console.log('valueOne is:', valueOne);
    console.log('value is:', value);
  }); // end of cmdM on-click

  // start of cmdS on-click
  $('#cmdS').on('click', function() {
    valueOne = value;
    value = '';
    operation = 'subtract';
    $('#txtInputOneA').val('');
    console.log('valueOne is:', valueOne);
    console.log('value is:', value);
  }); // end of cmdS on-click

  // start of cmdA on-click
  $('#cmdA').on('click', function() {
    valueOne = value;
    value = '';
    operation = 'add';
    $('#txtInputOneA').val('');
    console.log('valueOne is:', valueOne);
    console.log('value is:', value);
  }); // end of cmdA on-click

  // start of cmdAC on-click
  $('#cmdAC').on('click', function() {
    valueOne = '';
    value = '';
    valueTwo = '';
    operation = '';
    $('#txtInputOneA').val('');
    console.log('valueOne is:', valueOne);
    console.log('value is:', value);
  }); // end of cmdAC on-click


  $('#cmdEqual').on('click', function() {
    valueTwo = value;
    value = '';
    console.log('valueTwo is:', valueTwo);
    console.log('value is:', value);
    // define obj to POST on divide
    var objToOperate = {
      numOne: valueOne,
      numTwo: valueTwo,
      actType: operation
    }; // end of obj to divide
    // Ajax POST toDivide definition
    $.ajax({
      type: 'POST',
      url: '/fullCalculator',
      data: objToOperate,
      // define success
      success: function(response) {
        console.log(response);
        $('#txtInputOneA').val(response);
      } // end of success definition
    }); // end of Ajax POST toDivide


    /*** FULL CALCULATOR: END ***/

  }); // end of cmdEqual on-click

}
