// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"


// Defining function that actives when user presses "Check" Button
function userInputClick() {
  // Get input from user and store it in variable
  var age = parseInt(document.getElementById("age-entered").value)

  // Checks what movie a user can see
  if (age >= 17) {
    document.getElementById("output").innerHTML = "You can see an R movie alone."
  } else if (age >= 13) {
    document.getElementById("output").innerHTML = "You can see a PG-13 movie alone."
  } else if (age >= 5) {
    document.getElementById("output").innerHTML = "You can see a G or PG movie alone."
  } else {
    document.getElementById("output").innerHTML = "Uh. You're too young for most things."
  }
}