import { useState } from "react"

function App() {
  // importing all the useState hooks here
  const [counter , setCounter] = useState(0);
  const [oneTimeUpdate , setOneTimeUpdate ] = useState(() => { 

    // this function is going to run only once during the componenet mounts
    console.log("this should run twice because of react strict mode ");
    return "Hello World";
  })

  const[ objectUpdate , setObjectUpdate ] = useState({ value: 1 , theme: "dark"})


  // normal change using the variable 
  const incrementCounter = () => {

    setCounter(counter + 1);

  }



  // best way to change using the function method
 const decrementCounter = () => {

  setCounter((previousCounter) => {
      return previousCounter - 1;
  }) 

 }


//   this is for incrementing the value of the oneTime State
 const incrementCounter2 = () => {

  setOneTimeUpdate((previousCounter) => {
    return (previousCounter + 23)
  })
 }


//  the is for incrementing the value of the object State
const updateValue = () => {

  setObjectUpdate((e) => {
    return {...e , value : e.value + 1};
  })
}


//  the is for incrementing the theme of the object State
const updateTheme = () => {
  
  setObjectUpdate((e) => {
    return {...e , theme : "light"};
  })
}



  return (
    <div>
      
    {/* the normal hardcoded data modification  */}
    <div>

        <button onClick={incrementCounter}>+</button>
        <h1>{counter}</h1>
        <button onClick={decrementCounter}>-</button>


    </div>


    {/* the one time run function that only runs during component mounting */}
    <div>

        <button onClick={incrementCounter2}>Update Check Console</button>
        <h1>{oneTimeUpdate}</h1>

    </div>


    {/* how we handle objects that have been given as input in the useState */}
    <div>

        <button onClick={updateValue}>Update value</button>
        <button onClick={updateTheme}>Update Theme</button>
        <h1>{objectUpdate.value}</h1>
        <h1>{objectUpdate.theme}</h1>

    </div>



    </div>
  )
}

export default App
