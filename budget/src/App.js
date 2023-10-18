import './App.css';
import AddExpenseForm from './pages/AddExpenseForm';
import EditBudget from './pages/EditBudget';
import ExpenseItem from './pages/ExpenseItem';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {


  return (
    <div className="App">
      <NavBar />

      <AddExpenseForm />
      <EditBudget />
      <ExpenseItem />
      <Home />
    </div>
  );
}

export default App;
