import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store"
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ShoesContainer from "./components/ShoesContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewCakeContainer />
        <ShoesContainer />
        <IceCreamContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
