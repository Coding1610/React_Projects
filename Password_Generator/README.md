# Password Generator

The Password Generator is a responsive web application that allows users to create secure passwords with customizable options. Users can set the password length and choose the inclusion of capital letters, small letters, numbers, symbols, or a combination of these.

## Features

- **Responsive Design**: Works seamlessly on all devices, including desktops, tablets, and mobile phones.
- **Customizable Password Length**: Generate passwords with a length between 6 and 20 characters.
- **Character Options**:
  - Include capital letters
  - Include small letters
  - Include numbers
  - Include symbols
  - Generate passwords with a mixture of all options
- **Secure and Random**: Ensures that generated passwords are strong and random for enhanced security and you can copy that password.

## Tools and Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Development Tools**: Visual Studio Code

## Project Setup

### Prerequisites
- Node.js installed on your machine.

### Clone the repository:
   ```bash
   https://github.com/Coding1610/React_Projects/tree/main/Password_Generator
   ```
   
### Live Website
   ```bash
   https://675935885f838714ee8a975c--steady-unicorn-5809ef.netlify.app/
   ```

### Theory

## 1. Hook : useCallback()

const variableName = useCallback( () => {} , [depe_1 , depe_2 , .. ] );

--> Use for optimization But always use is not good
--> It is use for optimize our function or method
--> It remember everything based on dependencies
--> Based on memoization
--> Dependencies use for Optimization
--> Ye hook sari dependencies ko use karke cache me store karta haii

## 2. Hook : useEffect()

useEffect( () => { functionCall() } , [depe_1 , depe_2 , depe_3 ..] );

--> Page Load hone pe first time call hoga & Change of any dependencies par call hoga
--> It is call functionCall() on change of every Dependencies

## 3. Hook : useRef()

const variableName = useEffect(initialValue);

--> It is use for Decoration / User know it actully done
--> UI ke koi bhi element ka refrence leta hai or phir uske sath operation karta hai

<!-- HTML !-->
<button class="button-30" role="button">Button 30</button>
