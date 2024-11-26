import React from 'react';
import './team.css';



export default function MemberCard({image,name,role,github,twitter,linkedin,bio}) {
 
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <h3 className="member-name-upper">{name}</h3>

      <div className="card-info">
        <h3 className="member-role">{role}</h3>
        {/* <p className="member-role">{role}</p> */}
        <p className='member-bio'>{bio}</p>
        <div className="social-icons">
          <a href={twitter} className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
