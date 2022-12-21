import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import { useState, useEffect } from 'react';

import {saveLoan} from '../../../UserServices/userServices'

import { useNavigate } from 'react-router-dom';





function HomeLoan() {

    const navigate = useNavigate();

    const [hasSaved, setHasSaved] = useState(false);
    const [amount, setAmount] = useState('');
    const [time, setTime] = useState('');
    const [returnPay, setReturnPay] = useState(0);
    

    async function applyLoan(e) {

        e.preventDefault();

        const data = await saveLoan({

            amount : amount,

            loantype : 1,

            time : time

        });

        setHasSaved(true);
    }

    return (

       

        <div className="main">

            <div className="leftDiv">



                <ul class="list-group list-group-flush border border-info rounded">

                    <li class="list-group-item">Get a loan up to ₹5000000</li>

                    <li class="list-group-item">Flexible Tenure from 12-60 months</li>

                    <li class="list-group-item">EMI starting at ₹2,187 per ₹1 lakh</li>

                    <li class="list-group-item">Rate of Interest* as low as 10.50% pa</li>



                </ul>



            </div>

            <div className="rightDiv">



                <Form method='post' onSubmit={(e) => applyLoan(e)}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Label>Get the loan best suited for your needs



                        </Form.Label>

                        <Form.Control type="text" placeholder="How much loan do you require" onChange={(e) => setAmount(e.target.value)} />



                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label >Return time</Form.Label>

                        <Form.Control as =  "select" id="disabledSelect" value={time} onChange={(e) => { setTime(e.target.value) }}>

                            <option value="3">3 Months</option>

                            <option value="6">6 Months</option>

                            <option value="9">9 Months</option>



                        </Form.Control>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Label>You have to return



                        </Form.Label>

                        <Form.Control type="text" placeholder="You have to return" onChange={(e) => setAmount(e.target.value)} />



                    </Form.Group>

                   



                    <Button variant="success" type="submit">

                        Submit

                    </Button>

                        {hasSaved && navigate('/userDashboard')}

                </Form>

            </div>

        </div>

    )

}




export default HomeLoan;

