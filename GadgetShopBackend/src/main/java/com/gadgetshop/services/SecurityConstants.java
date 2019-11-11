package com.gadgetshop.services;

public class SecurityConstants {

    public static final String SIGN_UP_URLS = "/users/**";
    public static final String SHOP_MAIN_DATA_URLS = "/shopMainData/**";
    public static final String SECRET = "SecretKeyToGenerateJWTs";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 60_0000; //10 minutes of user session
}
