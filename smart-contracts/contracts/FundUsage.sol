// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract FundUsage {
    
    struct Expense {
        string item; // 항목
        string date; // 일자
        string name; // 명칭
        uint times; // 횟수
        uint amount; // 금액 표시
        uint totalAmount; // 총액 표시
        uint personalExpense; // 개인부담금
        uint publicExpense; // 공단부담금
    }

    Expense[] public expenses;

    function addExpense(
        string memory _item,
        string memory _date,
        string memory _name,
        uint _times,
        uint _amount,
        uint _publicExpense
    ) public {
        uint _totalAmount = _times * _amount;
        uint _personalExpense = _totalAmount - _publicExpense;
        expenses.push(Expense(_item, _date, _name, _times, _amount, _totalAmount, _personalExpense, _publicExpense));
    }

    function getExpense(uint _index) public view returns (
        string memory item,
        string memory date,
        string memory name,
        uint times,
        uint amount,
        uint totalAmount,
        uint personalExpense,
        uint publicExpense
    ) {
        Expense memory e = expenses[_index];
        return (e.item, e.date, e.name, e.times, e.amount, e.totalAmount, e.personalExpense, e.publicExpense);
    }
}