import React, { useEffect, useState } from 'react';
import { getPayments } from '../services/paymentService';

const Payments = () => {
  const [payments, setPayments] = useState([]);  // Store fetched payments
  const [isLoading, setIsLoading] = useState(true);  // Loading state
  const [errorMessage, setErrorMessage] = useState('');  // Error state

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setIsLoading(true);
        const data = await getPayments();  // API call to fetch payments
        setPayments(data);
      } catch (error) {
        setErrorMessage('Failed to fetch payment history.');
      } finally {
        setIsLoading(false);  // Stop loading
      }
    };

    fetchPayments();
  }, []);

  return (
    <div>
      <h2>Payment History</h2>

      {isLoading ? (
        <p>Loading payments...</p>
      ) : errorMessage ? (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      ) : (
        <ul>
          {payments.map((payment) => (
            <li key={payment.id}>
              {payment.date} - {payment.amount} (Status: {payment.status})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Payments;
