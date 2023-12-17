package com.yoga.yoga.exceptions;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseBody
@ResponseStatus
public class InsufficientDetailsException extends Exception {

    public InsufficientDetailsException() {
    }

    public InsufficientDetailsException(String message) {
        super(message);
    }

    public InsufficientDetailsException(Throwable cause) {
        super(cause);
    }

    public InsufficientDetailsException(String message, Throwable cause) {
        super(message, cause);
    }

    public InsufficientDetailsException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
