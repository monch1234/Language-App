import React from 'react';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import smenReducer from '../../redux/smenReducer'
import { Eng, Am, Ru, Green, Red, Yelow } from '../../redux/action';
import { useDispatch } from 'react-redux';





const LanguagePanels = () => {
  const dispatch = useDispatch() //

  const ENG = () => {
    dispatch(Eng())
  }

  const AM = () => {
    dispatch(Am())
  };

  const RU = () => {
    dispatch(Ru())
  };

  const GREEN = () => {
    dispatch(Green())
  };

  const RED = () => {
    dispatch(Red())
  };

  const YELLOW = () => {
    dispatch(Yelow())
  };

  return (
    <div className='panels'>
      <div className='languagePanel'>
        <button onClick={ENG}>ENG</button>
        <button onClick={AM}>AM</button>
        <button onClick={RU}>RU</button>
      </div>

      <div className='themePanel'>
        <button onClick={GREEN}>Theme Green</button>
        <button onClick={RED}>Theme Red</button>
        <button onClick={YELLOW}>Theme Yellow</button>
      </div>
    </div>
  )
}

export default LanguagePanels