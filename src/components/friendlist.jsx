import React from 'react';
import "../css/Friendslist.css"
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
    return (
      <ul className="friend-list">
        
        {friends.map((friend) =>(
            <li key={friend.id} class="item">
          <span class="status"   style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}></span>
          <img class="avatar" src={friend.avatar} alt="User avatar" width="71" />
          <p class="name">{friend.name}</p>
        </li>
         ))}
      </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.object.isRequired,
  };
export default FriendList