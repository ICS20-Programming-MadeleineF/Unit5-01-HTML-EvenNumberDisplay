//
// Created by: Madeleine Forgeron
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays number
 */
function numberDisplay() {
  
	// initalize numbers as an empty string
	let numbers = ""
	
	// get the user number
	let minimum = parseInt(document.getElementById('minimum').value)
  let maximum = parseInt(document.getElementById('maximum').value)

	// use a while loop to display the numbers from 0 up to the user number
	while (minimum <= maximum) {
		// build the string of numbers with a line break each time
		numbers = numbers + minimum + "<br>"
		// increment the counter
		minimum = minimum +1
	}
	
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = numbers
}