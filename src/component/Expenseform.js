import React from 'react'
import styles from './expense-Style/styles.css'
import {useState} from 'react'


export default function Expenseform(props) {

  const [enteredType, setEnteredType] = useState ('');
  const [enteredAmount, setEnteredAmount] = useState ('');
  const [enteredDate, setEnteredDate] = useState ('');

  //create the update fucntions

  function typehandler(event){
    setEnteredType(event.target.value);
  }

  function datehandler(event){
    setEnteredDate(event.target.value);
  }

  function amounthandler(event){
    setEnteredAmount(event.target.value);
  }

//creat the onsubmit fucntion to 
function submithandler(event){
  event.preventDefault();
  const PutTheUpdatedInAnObject ={
    name: enteredType,
    amount: enteredAmount,
    date: new Date(enteredDate)

  }

  if( enteredType ==='' || enteredAmount===''||enteredDate===''){
    alert("Invalid input!!!")
  }
  else{props.pathCreater(PutTheUpdatedInAnObject);}
  


  setEnteredType('')
  setEnteredAmount('')
  setEnteredDate('')
  

}





 


  return (
    <>    
    <div class="Expense-container">
      <form class="form" onSubmit={submithandler} >
      
      <div class="form-group">
    <label for="exampleInputPassword1">Exp-Type:</label>
    <input type="text" 
      class="form-control" 
      id="exampleInputPassword1" 
      placeholder="Enter Expense Type"
      value={enteredType}
      onChange={typehandler}
      />
  </div>
  

  
  <div class="form-group">
    <label for="exampleInputPassword1">Date:</label>
    <input type="date" 
      class="form-control" 
      id="exampleInputPassword1" 
      placeholder="date"
      value={enteredDate}
      onChange={datehandler}
      />
  </div>
  

  
  <div class="input-group mb-3">
  
  <input type="number" 
    class="form-control" 
    aria-label="Amount (to the nearest dollar)" 
    placeholder='Enter Amount'
    value={enteredAmount}
    onChange={amounthandler}
    />


 
</div>
<button type="submit" class="btn ">Submit</button>


</form>


    </div>
    </>

  );
}

/**
 we have created a f(x) in out App.js then created a path  between our  parent app and us(Expenseform).
 this path allows us to pass some  values to our parent app so  that  f(x) in it can use the values  to updatae it self .
 and to access this funtion in our parent app, we have accepted props so later we can do
        props.functionName(value we need to pass)
 
        ABOUT THESE VALUES WE MENTIONED 
  they are the values that a user inputs in our input boxes which are then used by the f(X) in app.js to 
  attach to what ever data we had there on the bage

  HOW DO WE GO ABOUT IT 
  1: initially the value of the input boxes are empty(' '), so we update them with waht ever the user puts
    or writes in themk by using [USESTATE], 

  2: afterward  we create an ONCHANGE event listener in each input box and give it a fucntion to dictate
    what happens after we've listened the even 
          even=user inputtin something into the box
          f(x) updates the empty value strings

  3: then we callect the updated  strings put them in an object
  4: we then use the  props.functionName(OBJECT_NAME), which means we pass the objectname to 
      the main f(x) in the parent app so it can update it self
  
  
  5: we resert the strings(values) back to empty so it awaits for a new value to be put inside of it


        

 
 */
