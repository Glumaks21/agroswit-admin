import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />
        <main></main>
      </div>
    </div>
  );
}

export default App;
