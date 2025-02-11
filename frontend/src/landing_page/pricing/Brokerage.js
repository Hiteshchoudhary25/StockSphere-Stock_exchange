import React, { useState } from 'react';

function Brokerage() {
    const [buyPrice, setBuyPrice] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [brokerage, setBrokerage] = useState(null);

    const calculateBrokerage = () => {
        const tradeValue = (sellPrice - buyPrice) * quantity;
        const brokerageFee = Math.min(20, 0.03 / 100 * tradeValue);
        const stt = (sellPrice * quantity) * 0.1 / 100; 
        const sebiCharges = (tradeValue * 10) / 10000000;
        const gst = 0.18 * (brokerageFee + sebiCharges);
        const totalCharges = brokerageFee + stt + sebiCharges + gst;
        const netProfitLoss = tradeValue - totalCharges;

        setBrokerage({
            brokerageFee,
            stt,
            sebiCharges,
            gst,
            totalCharges,
            netProfitLoss
        });
    };

    return (
        <div className='container'>
            {/* Header */}
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1>Brokerage Calculator</h1>
                <p className='text-muted fs-5'>Calculate the total brokerage and charges before placing a trade.</p>
            </div>

            {/* Calculator Section */}
            <div className='row mt-5 text-center'>
                <div className='col-md-4 mb-3'>
                    <input type='number' className='form-control' placeholder='Buy Price' value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} />
                </div>
                <div className='col-md-4 mb-3'>
                    <input type='number' className='form-control' placeholder='Sell Price' value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} />
                </div>
                <div className='col-md-4 mb-3'>
                    <input type='number' className='form-control' placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className='col-12'>
                    <button className='btn btn-primary' onClick={calculateBrokerage}>Calculate</button>
                </div>
            </div>

            {/* Display Brokerage Results */}
            {brokerage && (
                <div className='row mt-4'>
                    <div className='col-12'>
                        <h3 className='text-center mt-4'>Calculation Summary</h3>
                        <table className='table table-bordered mt-3 text-center'>
                            <thead>
                                <tr>
                                    <th>Charge Type</th>
                                    <th>Amount (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Brokerage Fee</td><td>₹{brokerage.brokerageFee.toFixed(2)}</td></tr>
                                <tr><td>STT</td><td>₹{brokerage.stt.toFixed(2)}</td></tr>
                                <tr><td>SEBI Charges</td><td>₹{brokerage.sebiCharges.toFixed(2)}</td></tr>
                                <tr><td>GST</td><td>₹{brokerage.gst.toFixed(2)}</td></tr>
                                <tr><td><strong>Total Charges</strong></td><td><strong>₹{brokerage.totalCharges.toFixed(2)}</strong></td></tr>
                                <tr><td><strong>Net Profit/Loss</strong></td><td><strong>₹{brokerage.netProfitLoss.toFixed(2)}</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Brokerage Explanation Section */}
            <div className='row p-5 mt-5 text-left'>
                <h2>Brokerage & Charges Explained</h2>

                <h4 className='mt-4'>Securities/Commodities Transaction Tax (STT/CTT)</h4>
                <p>Charged by the government on both buy and sell sides for equity delivery trades, and only on selling for intraday and F&O.</p>

                <h4 className='mt-4'>Exchange Transaction Charges</h4>
                <p>Exchanges (NSE, BSE, MCX) charge transaction fees based on the value of trades.</p>

                <h4 className='mt-4'>Brokerage Fees</h4>
                <ul>
                    <li>Equity Delivery: ₹0 brokerage.</li>
                    <li>Intraday & F&O: ₹20 or 0.03% per executed order (whichever is lower).</li>
                    <li>NRI Accounts: ₹100 per order for F&O; 0.5% or ₹100 per equity order.</li>
                </ul>

                <h4 className='mt-4'>Other Key Charges</h4>
                <ul>
                    <li>Stamp Duty: Charged based on state regulations.</li>
                    <li>SEBI Charges: ₹10 per crore.</li>
                    <li>GST: 18% on brokerage + SEBI + transaction charges.</li>
                    <li>Call & Trade: ₹50 per order placed through a dealer.</li>
                    <li>DP (Depository Participant) Charges: ₹15.34 per scrip when selling stocks.</li>
                </ul>

                <h4 className='mt-4'>Example Calculation Table</h4>
                <table className='table table-striped text-center mt-3'>
                    <thead>
                        <tr>
                            <th>Trade Type</th>
                            <th>Buy Price</th>
                            <th>Sell Price</th>
                            <th>Quantity</th>
                            <th>Charges (₹)</th>
                            <th>Net Profit/Loss (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Equity Delivery</td>
                            <td>100</td>
                            <td>110</td>
                            <td>100</td>
                            <td>₹10</td>
                            <td><strong>₹990</strong></td>
                        </tr>
                        <tr>
                            <td>Intraday Equity</td>
                            <td>200</td>
                            <td>210</td>
                            <td>50</td>
                            <td>₹35</td>
                            <td><strong>₹465</strong></td>
                        </tr>
                        <tr>
                            <td>F&O Trade</td>
                            <td>300</td>
                            <td>320</td>
                            <td>10</td>
                            <td>₹30</td>
                            <td><strong>₹190</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Brokerage;
