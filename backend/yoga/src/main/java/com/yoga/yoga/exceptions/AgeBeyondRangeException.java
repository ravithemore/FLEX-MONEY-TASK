package com.yoga.yoga.exceptions;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseBody
@ResponseStatus
public class AgeBeyondRangeException extends Exception {

    public AgeBeyondRangeException() {
    }

    public AgeBeyondRangeException(String message) {
        super(message);
    }

    public AgeBeyondRangeException(Throwable cause) {
        super(cause);
    }

    public AgeBeyondRangeException(String message, Throwable cause) {
        super(message, cause);
    }

    public AgeBeyondRangeException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
