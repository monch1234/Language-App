import LanguagePanels from './components/menu/index'
import './App.css';
import Content from './components/interface';
import { useSelector } from 'react-redux';

function App() {
  
  const theme = useSelector((state) => state.state2)
  console.log(theme);
  return (
      <div className = {theme}>
        <LanguagePanels />
        <Content />
      </div>
  );
}

export default App;
