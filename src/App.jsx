import { useState } from 'react'
import './css/App.css'
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './components/profile'
import Statistics from './components/statistics';
import FriendList from './components/friendlist';
import TransactionHistory from './components/transactions';
function App() {
 

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
            <Statistics stats={data} />
          </div>
          <div className="col">
            <FriendList friends={friends} />
          </div>
         
        </div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}

export default App
