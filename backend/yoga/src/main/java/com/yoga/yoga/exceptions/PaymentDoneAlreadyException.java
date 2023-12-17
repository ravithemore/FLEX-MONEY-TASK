package com.yoga.yoga.exceptions;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseBody
@ResponseStatus
public class PaymentDoneAlreadyException extends Exception {

    public PaymentDoneAlreadyException() {
    }

    public PaymentDoneAlreadyException(String message) {
        super(message);
    }

    public PaymentDoneAlreadyException(Throwable cause) {
        super(cause);
    }

    public PaymentDoneAlreadyException(String message, Throwable cause) {
        super(message, cause);
    }

    public PaymentDoneAlreadyException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
