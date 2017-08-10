![Server Side Calculator](/public/server-side-calculator.png}

# Weekend Challenge 2
#### Date(s)
05/27/17 - 05/30/17
### Deployed
*Heroku*: [Server-side Calculators](https://calculator-server-side.herokuapp.com/)
### Description
Two calculators that accept input by different means and performs calcualtions/mathmatical operations on the server-side
### Technologies Implemented
- JavaScript, jQuery, Node.js, Express.js, HTML5, CSS3

## By Input
### Front-end Interface/Display
- Two values using input fields;
- Four command buttons to select desired mathematical operation (e.g. addition, subtraction, multiplication, and division) to use on two input values, and;
- Clear button to resets input fields
##### Client-side
- Client evaluates to ensure values are supplied in both input fields;
- If values are present, the client submits a Ajax POST which places the:
  - Two input values, and;
  - Value of the selected mathematical operator into an object defined by user-selected mathematical operator button;
- Object then sent to server for calculation
##### Server-side
Server:
- Receives POST requests on URL-specific routes depending on the mathematical operator selected;
- Converts object inputs into numeric values;
- Performs requested/required mathematical operation, then;
- ```res.send``` result back to client



## CALCULATION VIA CALCULATOR INTERFACE
### Front-end Interface/Display
* Basic full-function calculator interface

#### Action/Logic
##### Client-side and Server-side
* The general logic remains the same as above
