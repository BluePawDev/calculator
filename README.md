# Weekend Challenge 2
### Technologies Implemented
* JavaScript/jQuery
* Node.js
* Express.js

## BASE MODE
### Front-end Interface/Display
* Two values using input fields;
* Four command buttons to select the desired mathematical operation (e.g. addition, subtraction, multiplication, and division) to use on the two input values, and;
* A clear button that resets the input fields

#### Action/Logic
##### Client-side
* The client evaluates to ensure values are supplied in both input fields;
* If values are present, the client submits a Ajax POST which places the:
  * Two input values, and;
  * The value of the selected mathematical operator into an object defined by the mathematical operator button that is selected;
* The object is then sent to the server for calculation

##### Server-side
The server--configured on port 7500--receives POST requests:
* On URL-specific routes depending on the mathematical operator selected on the front-end;
* After converting the object inputs into numeric values, performs the requested/required mathematical operation, then;
* Performs a ```res.send``` of the result back to the client



## HARD MODE
### Front-end Interface/Display
* Basic full-function calculator interface

#### Action/Logic
##### Client-side and Server-side
* The general logic remains the same as in base mode


## PRO MODE
Create a delay from when the Client receives the response from the Server, and when the calculation is actually displayed on the Front End:
* Delay should be 3 seconds.
* During that delay, display a message that says computing until the 3-second delay has finished, then;
* Remove the computing message while showing the calculation.
