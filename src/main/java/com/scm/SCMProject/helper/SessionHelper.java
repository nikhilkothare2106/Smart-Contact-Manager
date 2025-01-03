package com.scm.SCMProject.helper;

import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Component
public class SessionHelper {

    public static void removeMessage(HttpServletRequest request) {
        try {
            System.out.println("removing message from session");
            HttpSession session = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest()
                    .getSession();
            System.out.println(session+" first session");
            System.out.println(request.getSession()+" second session");
            session.removeAttribute("message");
        } catch (Exception e) {
             System.out.println("Error in SessionHelper: " + e);
            e.printStackTrace();
        }

    }

}
