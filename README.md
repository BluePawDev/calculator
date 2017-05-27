# weekend-challenge-2
weekend-challenge-2

# Weekend Challenge 2
Welcome to your second weekend challenge!

## Technologies
* JavaScript/jQuery
* Node.js
* Express.js

## Front-end/Client Functionality & Server Logic
IMPORTANT: The logic for the calculation needs to be implemented on the Server.

## Front-end
The Front End will display

two values (use input fields)
the types of mathematical operations (using button's): add, subtract, divide, multiply
a clear button will empty the input fields
The Client will be bundle up the inputs and mathematical operator into an object and then send it to the server via a POST request. So when the object leaves the Client, it should look something like this:

{
   x: 3,
   y: 4,
   type: "add"
}
Once the Server receives the request, it will compute the numbers in one of four different ways:

addition,
subtraction
multiplication
division
Once the result of the mathematical operation is determined, it should be sent back down to the Client where it will be displayed on the Front End.

HARD MODE

Create a calculator-like Front End!

Convert the input fields for the two values to buttons. This experience would allow the user to

click on a numerical button
click on a mathematical operator
click on a numerical button
click on an equal button that sends all of the information to the server
Remember, you will need to modify your Client logic to accommodate this new interface.

PRO MODE

Create a delay from when the Client receives the response from the Server, and when the calculation is actually displayed on the Front End:

The delay should be 3 seconds.
During that delay, show a message that says computing until the 3 second delay has finished, then remove the computing message while showing the calculation.
Submitting this Assignment
Create a README.md explaining what your application does
Submit via the assignment app
