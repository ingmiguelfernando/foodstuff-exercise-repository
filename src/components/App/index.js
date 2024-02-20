import DiscountRate from '../DiscountRate';
import TaxRateSelector from '../TaxRateSelector';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <TaxRateSelector />
        <DiscountRate />
      </header>
    </div>
  );
}

export default App;
