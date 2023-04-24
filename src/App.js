import Rauter from "./componentes/rauter/Rauter";
import { Provider } from "react-redux";
import store from "./componentes/state/user/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Rauter />
      </div>
    </Provider>
  );
}

export default App;
