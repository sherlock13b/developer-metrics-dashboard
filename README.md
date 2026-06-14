# Developer Metrics & Resource Dashboard

This is a fast and responsive web application built with **React.js**. It works like a real-time tracking dashboard for developer metrics. 

I designed and built the entire interface using **pure, custom CSS3 (Flexbox and Grid)** without using any external design frameworks like Tailwind or Bootstrap. This shows my strong foundational grip on writing clean, raw styling code.

## ✨ Main Features

* **Clean Structure:** The project is broken down into small, reusable React components that handle their own states easily.
* **Loading Animations:** It uses React hooks (`useEffect`) to simulate real network delay, showing clean loading states before displaying the dashboard details.
* **Smart Performance:** It uses the `useMemo` hook to remember heavy calculations. This keeps the application super fast and stops the screen from lagging when a user types.
* **Data Saving:** It connects directly to the browser's **LocalStorage API**. This means your dashboard changes are saved safely even if you refresh or close the webpage.

---

## 🛠️ Built With

* **Frontend:** React.js & JavaScript (ES6)
* **Styling:** Pure CSS3 (Advanced Flexbox & Grid layouts)
* **Version Control:** Git and GitHub

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── MetricsDashboard.jsx     # Main dashboard control room
│   ├── ExpenseTracker.jsx       # Money and data tracking logic
│   └── AnalyticsMetrics.jsx     # Number displays and counters
├── styles/
│   └── Dashboard.css            # Custom CSS layouts and alignments
├── App.jsx                      # Main app setup track
└── main.jsx                     # Starting point of the application