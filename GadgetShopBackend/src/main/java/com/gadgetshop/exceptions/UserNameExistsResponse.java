package com.gadgetshop.exceptions;

public class UserNameExistsResponse {

    private String username;

    public UserNameExistsResponse(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
