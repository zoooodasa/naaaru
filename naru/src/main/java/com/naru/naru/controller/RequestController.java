package com.naru.naru.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class RequestController {

    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/api/hello")
    public String hello() {
        return "Hellow, NIGGER!";
    }
}
