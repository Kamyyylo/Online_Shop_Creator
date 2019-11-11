package com.gadgetshop.security;

import com.gadgetshop.domain.User;
import io.jsonwebtoken.*;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.gadgetshop.services.SecurityConstants.EXPIRATION_TIME;
import static com.gadgetshop.services.SecurityConstants.SECRET;

@Component
public class JwtTokenProvider {

    //Generate Token
    public String generateToken(Authentication authentication) {
        //get user
        User user = (User) authentication.getPrincipal();
        //time to expiration count
        Date now = new Date(System.currentTimeMillis());

        Date expirationDate = new Date(now.getTime() + EXPIRATION_TIME);

        String userId = Long.toString(user.getId());

        Map<String, Object> claims = new HashMap<>();
        //here add roles maybe
        claims.put("id", (Long.toString(user.getId())));
        claims.put("username", user.getUsername());
        claims.put("fullName", user.getFullName());
        claims.put("admin", user.isAdmin());

        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }
    //validate token
    public boolean validateToken(String token){
        try {
        Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token);
        return true;
        }catch (SignatureException ex) {
            System.out.println("Invalid JWT Signature");
        }catch (MalformedJwtException ex){
            System.out.println("Invalid JWT Token");
        }catch (ExpiredJwtException ex){
            System.out.println("Expired JWT Token");
        }catch (UnsupportedJwtException ex){
            System.out.println("Unsupported JWT Token");
        }catch (IllegalArgumentException ex){
            System.out.println("JWT claims string is empty");
        }
        return false;
    }
    //get user id from token
    public Long getUserIdfromJWT(String token){
        Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
        String id = (String) claims.get("id");

        return Long.parseLong(id);
    }
}
