import React, { useState } from 'react';

const MyComponent: React.FC = () => {
    // let myName = "John Doe";
    const [myName, setMyName] = useState('John Doe')

    return (
        <>
          <h4>{myName}</h4>
          <input 
            value={myName} 
            // onChange={(e) => (myName = e.target.value)}
            onChange={(e) => setMyName(e.target.value)}
          />
        </>
    )
}

export default MyComponent
