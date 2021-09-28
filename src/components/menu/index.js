import React from 'react';

const LanguagePanels = (store) => {
  // console.log(store.state);
  return (
    <div className='LanguagePanels'>
      <select name="hero">
        <option disabled>Язык интерфейса</option>
        <option value="AM" >AM</option>
        <option value="ENG" selected >ENG</option>
        <option value="RU">RU</option>
      </select>
    </div>
  )
}

export default LanguagePanels