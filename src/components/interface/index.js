import React from 'react';
import { useSelector } from 'react-redux';

const Content = () => {
    
  const lang = useSelector((state) => state.state1)
  console.log(lang);
    return (
        <div>
            <p >
           {lang}
            </p>
        </div>
    )
}

export default Content