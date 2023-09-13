import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/index";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./scss/app.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
