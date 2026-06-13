import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import ExpenseTracker from './components/ExpenseTracker';
import QuickNotes from './components/QuickNotes';
import './styles/global.css';
import './styles/dashboard.css';

function App() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Developer Metrics Dashboard</h1>
        <p>Production monitoring, state synchronization, and storage allocation hub.</p>
      </header>
      
      <main className="dashboard-grid">
        <section className="grid-item full-width">
          <WeatherWidget />
        </section>
        <section className="grid-item">
          <ExpenseTracker />
        </section>
        <section className="grid-item">
          <QuickNotes />
        </section>
      </main>
    </div>
  );
}

export default App;