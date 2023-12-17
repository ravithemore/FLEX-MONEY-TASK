package com.yoga.yoga.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.yoga.entity.Member;
import com.yoga.yoga.exceptions.AgeBeyondRangeException;
import com.yoga.yoga.exceptions.InsufficientDetailsException;
import com.yoga.yoga.exceptions.MemberAlreadyRegisteredException;
import com.yoga.yoga.exceptions.MemberNotFoundException;
import com.yoga.yoga.exceptions.PaymentDoneAlreadyException;
import com.yoga.yoga.service.MemberService;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

    private MemberService memberService;

    public MemberController(MemberService memberService) {
        super();
        this.memberService = memberService;
    }

    @GetMapping("getmember/{id}")
    private ResponseEntity<Member> getMemberWithId(@PathVariable("id") long mid) throws MemberNotFoundException {
        return ResponseEntity.status(302).body(this.memberService.getMemberWithId(mid));
    }

    @GetMapping("getallmembers")
    private ResponseEntity<List<Member>> getAllMembers() {
        return ResponseEntity.status(200).body(this.memberService.getAllMembers());
    }

    @PostMapping("register")
    private ResponseEntity<Member> registerMember(@RequestBody Member member)
            throws AgeBeyondRangeException, MemberAlreadyRegisteredException, InsufficientDetailsException {
        Member mem = this.memberService.registerMember(member);
        return ResponseEntity.status(201).body(mem);
    }

    @PostMapping("makepayment/{id}")
    private ResponseEntity<String> makePayment(@PathVariable("id") long mid)
            throws MemberNotFoundException, PaymentDoneAlreadyException {
        if (this.memberService.makePayment(mid)) {
            return ResponseEntity.status(200)
                    .body("Payment successful for the month of : " + LocalDate.now().getMonth());
        } else {
            return ResponseEntity.status(400).body("Payment Failed");
        }
    }

    @PutMapping("shiftbatch")
    private ResponseEntity<Member> shiftBatch(@RequestParam("id") long mid, @RequestParam("next") String next)
            throws MemberNotFoundException {
        return ResponseEntity.status(202).body(this.memberService.shiftBatch(mid, next));
    }
}
