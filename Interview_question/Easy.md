

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

14. How can you embed two or more components into one?

15. What is the significance of `keys` in React?

16. What is React's context?

17. How can you use events in React?

18. What are controlled components?

19. What are uncontrolled components?

20. How do you handle forms in React?

21. What are React fragments?

22. What is the difference between `setState` and `forceUpdate`?

23. How can you handle errors in a React app?

24. Explain lifecycle methods in React.

25. What are hooks in React?

26. How does the `useEffect` hook work?

27. Explain the `useState` hook.

28. What is prop drilling and how can you avoid it?

29. How is React different from Angular or Vue?

30. What is a higher-order component?
```
