package com.yoga.yoga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yoga.yoga.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    Member findByContactno(String contactno);

    Member findByEmail(String email);

}
