import React from 'react'

const Learn = ({firstName,secondName,link}) => {
    console.log({link});
  return (
    <div>
      <h1>
        Mening ismim- {firstName} , sharifim- {secondName}
      </h1>
      <a href={link}>
        Mening Instagram sahifam
      </a>
    </div>
  );
}

export default Learn