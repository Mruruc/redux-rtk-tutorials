import { Provider } from "react-redux";
import { store } from "./app/store";
import Users from "./pages/private/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Users />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
