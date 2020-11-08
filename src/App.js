import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import Login from "./pages/Login";
import { getUser, toggleLoading } from "./redux/Auth/actions";
import { GET_USER } from "./redux/Auth/constants";

function App() {
  const AuthState = useSelector(state => state.Auth);
  const dispatch = useDispatch();

  function buttonOnClick() {
    dispatch(toggleLoading())
  }

  function handleGetUser() {
    dispatch(getUser());
  }

  return (
    <div>
      {!AuthState.user && <Login/>}

      {AuthState.user && <h1>Hai, {AuthState.user.name}</h1>}
      <b>isLoading:</b> {AuthState.loading ? 'true' : 'false'}
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Card/>

      {/* <button onClick={buttonOnClick}> TOGGLE LOADING </button>

      <button onClick={handleGetUser}> GET USER </button> */}
    </div>
  );
}

export default App;
