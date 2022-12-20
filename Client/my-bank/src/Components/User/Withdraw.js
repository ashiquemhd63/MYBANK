import React from "react";
import { Outlet } from "react-router-dom";
import {useState, useEffect} from 'react'
import "./WithdrawDeposit.css"
import { getAccountData } from '../../UserServices/withdrawDepositService'
import { postWithdrawAccountData } from '../../UserServices/withdrawDepositService'

function Withdraw() {
    
    const [amount, setAmount] = useState('');
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        getAccountData().then((data) => {
            setAccounts(data.data);
        });
    }, []);

    async function handleFormSubmit(e){
        e.preventDefault();
        var res = await postWithdrawAccountData({
          amount: amount,
          
        });}
    
    return (
        <>
      
            <div className="withdrawDeposit">
                <div className="container">
                    <form onSubmit={handleFormSubmit}>
                    <div className="form">
                            <label className="account">Acc No</label>
                            <input className="input" type="text" value={accounts.accountNumber} disabled></input>
                        </div>
                        <div className="form">
                            <label className="balance">Balance</label>
                            <input className="input" type="text" value={accounts.currentBalance} disabled></input>
                        </div>
                        <div className="form">
                            <label className="amount">Amount</label>
                            <input id='amount' className="input" type="text" onChange={e=>setAmount(e.target.value)}></input>
                        </div>
                        <div className="form">
                            <button className="btn withdrawdepositbtn">Withdraw</button>
                            
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Withdraw;