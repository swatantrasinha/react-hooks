Probelem without useMemo
=========================
Lets see Demo_UseMemo_Problem and import in App.jsx file

in input textbox when we change the number then we can see the delay as it calls the slowFunction and it takes time in completing the loop. However even if we click on ChangeTheme Button then also there is delay in theme change.
Although slowFunction is not linked to this theme change functionality still its causing problem. How ?

This is because when we change theme the state gets changed by setDark function and entire component is rendered again
hence slowFunction is also called on each render 
to solve this we have useMemo hook - see "Demo_UseMemo_Solution.jsx"

now in this file we can see theme change is happening instantly since its not dependent on slowFunction 

Explore Further
----------------
referencial equality
when we compare two variables in JS , it compares the reference in objects and arrays
so two objects or two arrays with same content are not equal as the reference are different


in out case themeStyles is an object
if we write a useEffect with themeStyles as dependency as below :

    useEffect(() => {
      console.log('useEffect for themeStyles ');
    }, [themeStyles])
then if we change theme then its expected to print "useEffect for themeStyles"
however even if we change value in textbox we can see "useEffect for themeStyles" is being printed

the reason is referencial equality 

to solve this we will use "useMemo" again for themeStyles giving the state "dark" as dependency
