package com.yoga.yoga.exceptions;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseBody
@ResponseStatus
public class MemberAlreadyRegisteredException extends Exception {

    public MemberAlreadyRegisteredException() {
    }

    public MemberAlreadyRegisteredException(String message) {
        super(message);
    }

    public MemberAlreadyRegisteredException(Throwable cause) {
        super(cause);
    }

    public MemberAlreadyRegisteredException(String message, Throwable cause) {
        super(message, cause);
    }

    public MemberAlreadyRegisteredException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
