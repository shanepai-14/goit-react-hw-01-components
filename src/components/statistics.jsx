import React from 'react';
import "../css/Statistics.css"
import PropTypes from 'prop-types';

const Statistics = ({stats}) => {
    return (
        <section className="statistics">
        <h2 className="title">UPLOAD STATS</h2>
      
        <ul className="stat-list">
          {stats.map((stat, index) => (
            <li key={stat.id} className="item">
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </li>
          ))}
        </ul>
      
      </section>
    )
}

Statistics.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default Statistics