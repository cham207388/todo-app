package com.abc.backend.hello;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(maxAge=3600)
@RestController
public class HelloWorldController {

    @GetMapping(path = "users/hello-world/{message}")
    public HelloWorldBean getWelcomeMessage(@PathVariable String message){

        try {
            if(message.equals("error")){
                throw new RuntimeException("An Error occured. Contact Customer support!");
            }
            return new HelloWorldBean(message);
        } catch (RuntimeException e) {
            return new HelloWorldBean(e.getMessage());
        }
    }
}
