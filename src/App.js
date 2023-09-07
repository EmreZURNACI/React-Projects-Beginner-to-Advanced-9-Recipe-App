import GetRecipes from './Templates/GetRecipes';
import { Provider } from "react-redux";
import { Store } from './Store/Store';
function App() {
  return (
    <Provider store={Store}>
      <GetRecipes />
    </Provider>
  );
}

export default App;
