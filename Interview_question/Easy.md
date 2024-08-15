

```markdown
# React Interview Questions

1. What is React?
React is a framework created by Facebook for javascript.

2. Who developed React and why?
Facebook and for reusable components and virtual DOM

3. What is JSX?
Javascript syntax, full form for Javascript XML. It has been used for rendering components in HTML.

4. Differentiate between a functional component and a class component.
In React, both functional components and class components can be used to define components that output UI elements. However, they have different syntax, capabilities, and use cases. Here's a differentiation between the two:

Definition & Syntax:
Functional Component:
javascript
Copy code
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
or using arrow functions:
javascript
Copy code
const Welcome = (props) => <h1>Hello, {props.name}</h1>;


Class Component:
javascript
Copy code
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


State:
Functional Component: Initially, functional components were stateless. But with the introduction of React Hooks, specifically the useState hook, they can now manage and utilize state.
Class Component: Uses this.state to hold state and this.setState() method to update it.
Lifecycle Methods:
Functional Component: Originally, functional components didn't have access to lifecycle methods. However, with React Hooks, we can mimic lifecycle behavior. For instance, the useEffect hook can replicate componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods.
Class Component: Offers lifecycle methods like componentDidMount, componentDidUpdate, and others.
Props:
Functional Component: Uses props as an argument.
Class Component: Accessed with this.props.
Context:
Functional Component: Can use the useContext hook to access the context.
Class Component: Typically requires a static context type or the use of a Consumer.
Refs:
Functional Component: The useRef hook is utilized to access refs.
Class Component: Uses React's createRef method or callback refs.
Side Effects:
Functional Component: Managed using the useEffect hook.
Class Component: Managed inside lifecycle methods.
Performance:
Functional Component: Can be optimized for performance using the React.memo function which memoizes the rendered output of the passed component preventing unnecessary renders.
Class Component: Implements shouldComponentUpdate method or extends React.PureComponent to optimize performance.
Simplicity and Popularity:
Functional Component: Generally considered more concise and readable, especially for smaller components or components that don’t need lifecycle methods. With the advent of Hooks, functional components have become more popular and powerful.
Class Component: Provides a more traditional approach to organizing and managing state and lifecycle methods but can be verbose for simpler components.
This Keyword:
Functional Component: Doesn't use the this keyword.
Class Component: Requires the use of the this keyword to access props, state, and methods.

5. What is the virtual DOM?
In summary, the main difference between the DOM and the virtual DOM is that the DOM is the actual representation of a web page's structure and content, while the virtual DOM is an abstract, lightweight copy of the real DOM that can be used to optimize and speed up web development and rendering.

6. How does React improve performance?
By dom
By memonization
Image loading
Lazy loading/ code splitting
Avoid unnecessary re-rending
SSR

7. How do you create a component in React?

8. What are props in React?

9. How do you pass data between components?
https://www.freecodecamp.org/news/pass-data-between-components-in-react/


10. What is the significance of the `render` method?
It is a set of rule which react component used for rending the UI everytime and tell how to display the ui on screen

11. What is a state in React?
 state in React. js is also known as the internal storage of the component.

12. How do you update the state of a component?
use the this. setState() method

13. Explain the purpose of `constructor` in a React component.
Typically, in React constructors are only used for two purposes: Initializing local state by assigning an object to this.state . Binding event handler methods to an instance.

14. **How can you embed two or more components into one?**  
You can embed multiple components into one by including them within the parent component's JSX. For example:
   ```jsx
   function ParentComponent() {
     return (
       <div>
         <ChildComponent1 />
         <ChildComponent2 />
       </div>
     );
   }
   ```

15. **What is the significance of `keys` in React?**  
`Keys` help React identify which items have changed, are added, or are removed. They should be given to elements inside an array to give the elements a stable identity.

16. **What is React's context?**  
The React Context API provides a way to pass data through the component tree without having to pass props down manually at every level.

17. **How can you use events in React?**  
Events in React are named using camelCase, e.g., `onClick`. You can provide event handlers as props to components.
   ```jsx
   <button onClick={handleClick}>Click Me</button>
   ```

18. **What are controlled components?**  
Controlled components have their state controlled by React. For form elements, this means the input's value is driven by the React state and changes via functions like `setState`.

19. **What are uncontrolled components?**  
Uncontrolled components store their own state internally, and you query the DOM directly to access their current value using `refs`.

20. **How do you handle forms in React?**  
Forms in React can be handled using controlled or uncontrolled components. With controlled components, form data is handled by the React state, and functions are used to handle changes and submissions.

21. **What are React fragments?**  
Fragments allow you to group multiple elements without adding extra nodes to the DOM. This can be done using `<>...</>` shorthand or `<React.Fragment>...</React.Fragment>`.

22. **What is the difference between `setState` and `forceUpdate`?**  
`setState` causes the component to re-render and update the state. `forceUpdate` forces a re-render, but doesn't update the state.

23. **How can you handle errors in a React app?**  
You can use Error Boundaries in React to catch and handle errors in components.

24. **Explain lifecycle methods in React.**  
Lifecycle methods are special methods that automatically get called as your component achieves certain milestones, like mounting to the DOM (`componentDidMount`) or updating (`componentDidUpdate`).

25. **What are hooks in React?**  
Hooks are functions that let developers "hook into" React state and lifecycle features from function components.

26. **How does the `useEffect` hook work?**  
`useEffect` can be used to perform side effects in function components, like data fetching or manual DOM manipulations. It runs after render and can replace `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

27. **Explain the `useState` hook.**  
`useState` is a hook that lets you add state to functional components. It returns a state variable and a function to update it.

28. **What is prop drilling and how can you avoid it?**  
Prop drilling is the process by which you pass data from one part of the React component tree to another by going through other parts that do not need the data. It can be avoided using Context, Redux, or other state management libraries.

29. **How is React different from Angular or Vue?**  
React is a library for building user interfaces and focuses on the V in MVC. Angular is a full-blown framework with a lot of built-in tools and concepts. Vue is also a progressive framework but is designed to be incrementally adoptable.

30. **What is a higher-order component?**  
A higher-order component (HOC) is a function that takes a component and returns a new component with additional props or functionality.
