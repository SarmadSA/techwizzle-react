package com.techwizzle.utils;

import org.json.JSONObject;

public class FormValidator {

    private boolean isValidInput(String input){
        boolean isValid = false;
        if(isValidLength(input,1)){
            isValid = true;
        }
        return isValid;
    }

    private boolean isValidLength(String input, int minLength){
        boolean isValid = false;
        if(input.trim().length() >= minLength){
            isValid = true;
        }
        return isValid;
    }

    //TODO: create more methods, each with its own responsibility (one for validating length, one for validating and checking if input is a number etc...)

    public JSONObject validate(String name, String email, String subject, String message){
        JSONObject validationObject = new JSONObject();
        String validationMessage = "";
        boolean isValid = false;

        //TODO: Form-validation logic here...
        if(isValidInput(name) && isValidInput(email) && isValidInput(subject) && isValidInput(message)){
            isValid = true;
            validationMessage = "Successfully submitted!";
        } else {
            validationMessage = "Invalid input!";
        }

        validationObject.put("success", isValid);
        validationObject.put("message", validationMessage);
        return validationObject;
    }
}
