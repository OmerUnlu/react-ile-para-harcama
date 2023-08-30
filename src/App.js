import Content from './Components/Content';
import Header from './Components/Header';
import Product from './Components/Product';
import {GlobalProvider} from './GlobalState'

function App() {
  return (
    <div className="App">
    <GlobalProvider>
      <Header/>
      <Content/>
      <Product/>
    </GlobalProvider>  
    </div>
  );
}

export default App;
