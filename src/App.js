import MenuPopupState from './components/menu/index'
import Action from './redux/action'
import './App.css';
import Content from './components/interface';

function App() {
  return (
    <div className="App">
      <MenuPopupState />
      <Content />

    </div>
  );
}

export default App;
