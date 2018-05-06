package com.chanhlt.springsecurity.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
    @GetMapping("/login")
    public String login(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
        if (request.getSession().getAttribute("isLoggedIn") == null) {
            if (request.getParameter("logout") != null) {
                Cookie cookie = new Cookie("token", null);
                cookie.setMaxAge(0);
                response.addCookie(cookie);
                cookie = new Cookie("email", null);
                cookie.setMaxAge(0);
                response.addCookie(cookie);
                return "login";
            }
            String token = request.getParameter("token");
            String email = request.getParameter("email");
            if (token == null) {
                return "redirect:http://domain2.localhost.com/login?from="
                        + URLEncoder.encode("http://my.localhost.com/login", "utf-8");
            }
            Cookie cookie = new Cookie("token", token);
            response.addCookie(cookie);
            cookie = new Cookie("email", email);
            response.addCookie(cookie);
            return "login";
        }
        return "redirect:/";
    }

}