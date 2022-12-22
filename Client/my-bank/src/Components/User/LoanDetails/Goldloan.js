import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { saveLoan } from '../../../UserServices/userServices'
import { useNavigate } from 'react-router-dom';

function HomeLoan() {

    const navigate = useNavigate();
    const [loanDetails, setLoanDetails] = useState([])
    const [hasSaved, setHasSaved] = useState(false);
    const [amount, setAmount] = useState(0);
    const [time, setTime] = useState('');
    const [returnPay, setReturnPay] = useState(0);
    const interest = 13 

    function findTotalAmount() {
        let totalAmount = document.getElementById("totalMoney")
        // let interest = 13
        let interestAmount = amount * interest * time;
        interestAmount = interestAmount / (12 * 100)
        let totalAmt = parseInt(amount) + parseInt(interestAmount)

        if (!isNaN(totalAmt)) {
            totalAmount.value = "You have to repay: " + totalAmt


        }
        else{
            totalAmount.value = 0
        }
    }
    //Use effect is used to calculate total amount after changing duration and amount
    useEffect(() => {
        // getLoanDetails().then(data => {
        //     setLoanDetails(data)
        // });
        if (time != '') {

            findTotalAmount();
        }
    }, [amount, time]);

    async function applyLoan(e) {
        e.preventDefault();
        const data = await saveLoan({
            amount: amount,
            loantype: 3,
            time: time
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
                    <li class="list-group-item">Rate of Interest* as low as {interest}% pa</li>
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
                        <Form.Control as="select" id="disabledSelect" onChange={(e) => { setTime(e.target.value) }} value={time} >
                            <option>Select a Tenure</option>
                            <option value="3">3 Months</option>
                            <option value="6">6 Months</option>
                            <option value="9">9 Months</option>
                            <option value="12">12 Months</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>You have to return
                        </Form.Label>
                        <Form.Control type="text" placeholder="You have to return" disabled id="totalMoney" />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Apply
                    </Button>
                    {hasSaved && navigate('/userDashboard')}
                </Form>
            </div>
        </div>
    )
}

export default HomeLoan;