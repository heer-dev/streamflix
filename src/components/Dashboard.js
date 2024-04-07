import React from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/App.css'; 

function getGreetingTime(date) {
  const hours = date.getHours();
  if (hours < 12) return 'morning';
  if (hours < 18) return 'afternoon';
  return 'evening';
}
const Dashboard = () => {
  const history = useHistory();

  const userDataString = localStorage.getItem('user');
  if (!userDataString) {
    return <div className="dashboard-message">User data not found. Please log in.</div>;
  }

  const user = JSON.parse(userDataString);

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    history.push('/login'); 
  };

  const subscription = {
    plan: 'Premium',
    subscribeDate: 'January 1, 2024',
    renewalDate: 'January 1, 2025',
    paymentMethod: 'Credit Card',
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="user-profile-section">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png" alt="User" className="user-image" />
          <div>
            <h1 className="user-name">Welcome, {user.firstName} {user.lastName}!</h1>
            <p className="user-email"><strong>Email:</strong> {user.email}</p>
          </div>
        </div>
        
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>
      <main className="dashboard-main">
      <section className="subscription-details">
      <div className="greetings">Good {getGreetingTime(new Date())}, {user.firstName}!</div>
          <h2>Subscription Details</h2>
          <p><strong>Plan:</strong> {subscription.plan}</p>
          <p><strong>Date Subscribed:</strong> {subscription.subscribeDate}</p>
          <p><strong>Renewal Date:</strong> {subscription.renewalDate}</p>
          <p><strong>Payment Method:</strong> {subscription.paymentMethod}</p>
        </section>
      </main>
    </div>
  );
};




export default Dashboard;
