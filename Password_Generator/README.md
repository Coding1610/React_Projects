# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Theory

1. Hook : useCallback()

const variableName = useCallback( () => {} , [depe_1 , depe_2 , .. ] );

--> Use for optimization But always use is not good
--> It is use for optimize our function or method
--> It remember everything based on dependencies
--> Based on memoization
--> Dependencies use for Optimization
--> Ye hook sari dependencies ko use karke cache me store karta haii

2. Hook : useEffect()

useEffect( () => { functionCall() } , [depe_1 , depe_2 , depe_3 ..] );

--> Page Load hone pe first time call hoga & Change of any dependencies par call hoga
--> It is call functionCall() on change of every Dependencies

3. Hook : useRef()

const variableName = useEffect(initialValue);

--> It is use for Decoration / User know it actully done
--> UI ke koi bhi element ka refrence leta hai or phir uske sath operation karta hai

<!-- HTML !-->
<button class="button-30" role="button">Button 30</button>