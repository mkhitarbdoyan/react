import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectName ,newName} from './app/features/currentUser/currentUsersSlice'



function App() {
  const name = useSelector(selectName)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{name}</h1>
      <input type="text " value={name} onChange={(e) => {
        dispatch(newName(e.target.value))

      }} />
    </div>
  );
}

export default App;
