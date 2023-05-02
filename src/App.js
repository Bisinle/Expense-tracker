//components start with capital???
import react,{useState} from 'react'
import './App.css';
import Expenseform from './component/Expenseform';
import Expense_list from './component/Expense_list';
import Header from './component/Header';
import NameChange from './component/NameChange';



const initial_expenses = [
  {
    id: 1,
    name: 'salon',
    amount: 20.00,
    date: new Date(2022, 3, 1)
  },
  {
    id: 2,
    name: 'Fuel',
    amount: 240.00,
    date: new Date(2023,8,11)
  },
  {
    id: 4,
    name: 'Medical',
    amount: 20000.00,
    date: new Date(2020,8,2)
  },
  {
    id: 5,
    name: 'Water',
    amount: 130.00,
    date: new Date(2022,4,15)
  },
  {
    id: 6,
    name: 'Repair',
    amount: 20.00,
    date: new Date(2021,10,1)
  },
]

function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  
  const expenseUpdater = (updatedExpense) => {
    setExpenses(() => {
      return [updatedExpense, ...expenses];
    })
  }
 
  return (
    <>
    <Header/>
    <Expenseform pathCreater={expenseUpdater} />
    <Expense_list data={expenses}/>
    
    
     
   
    
    </>
  );
}

export default App
