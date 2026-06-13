import React, { useState, useMemo } from 'react';
import '../styles/expenses.css';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Production Server Allocation', amount: 1500 },
    { id: 2, title: 'Cloud Database Storage', amount: 950 }
  ]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  // Performance Optimization via useMemo tracking dependency mutations
  const totalExpenditure = useMemo(() => {
    return expenses.reduce((sum, item) => sum + item.amount, 0);
  }, [expenses]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    
    const newTransaction = {
      id: Date.now(),
      title,
      amount: parseFloat(amount)
    };

    setExpenses([...expenses, newTransaction]);
    setTitle('');
    setAmount('');
  };

  return (
    <div className="expense-card">
      <h3>Project Resource Expenses</h3>
      <div className="total-badge">Total Balance Allocated: ₹{totalExpenditure}</div>
      
      <form onSubmit={handleAddExpense} className="expense-form">
        <input 
          type="text" 
          placeholder="Resource distribution label..." 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Resource Cost (INR)" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Log Transaction</button>
      </form>

      <ul className="expense-list">
        {expenses.map(item => (
          <li key={item.id} className="expense-item">
            <span>{item.title}</span>
            <strong>₹{item.amount}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;