package com.abc.backend.hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(maxAge=3600)
@RestController
public class BasicAuthenticationController {

    @GetMapping(path = "/users/basicauth")
    public AuthenticationBean authenticationBean(){
        return new AuthenticationBean("You are authenticated!");
    }
}
