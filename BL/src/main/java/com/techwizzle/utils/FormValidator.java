package com.techwizzle.utils;

import org.json.JSONObject;

public class FormValidator {
    public JSONObject validate(String name, String email, String subject, String message){
        JSONObject validationObject = new JSONObject();
        String validationMessage = "";
        Boolean isValid = false;

        //TODO: Form-validation logic here...

        validationObject.put("success", isValid);
        validationObject.put("message", validationMessage);
        return validationObject;
    }
}
