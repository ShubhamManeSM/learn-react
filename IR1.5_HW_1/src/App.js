import "./styles.css";

const ArrayOperations = () => {
  const numbers = [1,2,3,4,5]
  const sum = numbers.reduce((acc,curr) => acc + curr, 0)
  const average = sum / numbers.length
  const maximum = numbers.reduce((acc,curr) => acc > curr ? acc : curr)
  const minimum = numbers.reduce((acc,curr) => acc < curr ? acc : curr)

  return(
    <div>
      <h1>Array Operations</h1>
      <p>Sum: {sum}</p>
      <p>Average: {average}</p>
      <p>Maximum: {maximum}</p>
      <p>Minimum: {minimum}</p>
    </div>
  )
}


const ObjectManipulation = () => {
  const person = {
    name: "Sarah",
    age: 28,
    city: "New York",
  };

  const updatedPerson = {
    ...person,
    age: 29,
  };

  return(
    <div>
      <h1>Person Details</h1>
      <p>Name: {updatedPerson.name}</p>
      <p>Age: {updatedPerson.age}</p>
      <p>City: {updatedPerson.city}</p>
    </div>
  )
}

const SquareArea = () => {
  const square = 5
  return(
    <div>
      <h1>Area of Square</h1>
      <p>The area of square is: {square * square}</p>
    </div>
    
  )
}

const CapitalizeString = () => {
  const string = "hello world"
  return(
    <div>
      <h1>Capitalize Text</h1>
      <p>{string.toUpperCase()}</p>
    </div>
  )
}

const CircleArea = () => {
  const radius = 8
  const area = (Math.PI * radius ** 2).toFixed(2)
  return(
    <div>
      <h1>Area of Circle</h1>
      <p>The area of the circle is: {area}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <ArrayOperations />

      <ObjectManipulation />

      <SquareArea />

      <CapitalizeString />

      <CircleArea />
    </div>
  );
}
