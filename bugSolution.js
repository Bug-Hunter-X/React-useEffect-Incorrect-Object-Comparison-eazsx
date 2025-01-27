```javascript
import isEqual from 'lodash.isequal'; // Or a custom deep comparison function

function MyComponent(props) {
  const [count, setCount] = useState(0);
  const prevProps = useRef(props);

  useEffect(() => {
    // Correct: Using deep comparison
    if (!isEqual(prevProps.current.data, props.data)) {
      console.log('Data changed!');
    }
    prevProps.current = props; //Update the ref
  }, [props.data]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```