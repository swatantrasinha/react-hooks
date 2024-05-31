Need for UseCallback Hook
==========================

Lets see file - Demo_Need_For_UseCallback.jsx
open the browser console
when we click on input textbox up/down arrow to change value 
we can see in console : "ListOfNumbers - Updating items"
this is expected 
however even if we click on Toggle Theme then also we see this "ListOfNumbers - Updating items" in browser console

the reason is every time we change value in textbox,
Demo_Need_For_UseCallback is re-rendered and so "getArrayItems" function is created again 
although there is no change in function but reference gets changed.
This getArrayItems is passed as value to the prop "getNumArrayFunc" in ListOfNumbers component
and therefore the below useEffect in ListOfNumbers component is triggered 
--------------
useEffect(() => {
    console.log('ListOfNumbers - Updating items ');
setItems(getNumArrayFunc());
},[getNumArrayFunc])
--------------

to solve this we will use useCallback hook 
see Demo_Solution_Using_UseCallback.jsx 
we can see when Toggle Theme button is clicked then "ListOfNumbers - Updating items" in browser console

Note: useMemo takes the return value of function but useCallback takes the complete function
it means in the below :
  const getArrayItems =  useCallback(
    () => { return [ number, number + 1, number+2 ]}
    ,[number])

if we replace useCallback by useMemo

 const getArrayItems =  useMemo(
    () => { return [ number, number + 1, number+2 ]}
    ,[number])
then 
const getArrayItems = the return of function i.e array with 3 numbers and not the complete function


