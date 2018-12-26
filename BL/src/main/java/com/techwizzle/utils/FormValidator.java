package com.techwizzle.utils;

import org.json.JSONObject;

public class FormValidator {
    public JSONObject validate(String name, String email, String subject, String message){
        JSONObject object = new JSONObject();
        String validationMessage = "";
        Boolean isValid = false;

        //TODO: Form-validation logic here...

        object.put("success", isValid);
        object.put("message", validationMessage);
        return object;
    }
}
