
package com.yoga.yoga.service;

import java.util.List;

import com.yoga.yoga.entity.Member;
import com.yoga.yoga.exceptions.AgeBeyondRangeException;
import com.yoga.yoga.exceptions.InsufficientDetailsException;
import com.yoga.yoga.exceptions.MemberAlreadyRegisteredException;
import com.yoga.yoga.exceptions.MemberNotFoundException;
import com.yoga.yoga.exceptions.PaymentDoneAlreadyException;

public interface MemberService {

    void CompletePayment();

    Member registerMember(Member member)
            throws AgeBeyondRangeException, MemberAlreadyRegisteredException, InsufficientDetailsException;

    List<Member> getAllMembers();

    boolean makePayment(long mid) throws MemberNotFoundException, PaymentDoneAlreadyException;

    Member getMemberWithId(long mid) throws MemberNotFoundException;

    Member shiftBatch(long mid, String next) throws MemberNotFoundException;

}
