import "./styles.css";

const GenerateGreeting = ({userName}) => {
  const greeting = (name) => {
    return `Hello ${name}!`
  }
  return(
    <div>
      <h1>{greeting(userName)}</h1>
    </div>
  )
}

const CalculateArea = () => {
  const length = 10
  const width = 5
  const areaOfRectangle = () => {
    return length * width
  }
  return(
    <div>
      <p>Rectangle Area: {areaOfRectangle()}</p>
    </div>
  )
}

const CalculatePerimeter = () => {
  const length = 10
  const width = 5
  const perimeter = () => {
    return 2 * (length + width)
  }
  return(
    <div>
      <p>Rectangle Perimeter: {perimeter()}</p>
    </div>
  )
}

const GenerateMessage = () => {
  const hours = new Date().getHours()
  const message = () => {
    if(hours < 12){
      return "Good Morning!"
    }else if(hours < 18){
      return "Good Afternoon"
    }else{
      return "Good Evening"
    }
  }
  return(
    <div>
      <h1>{message()}</h1>
    </div>
  )
}

const CalculateVolume = () => {
  const cylinder = 3
  const height = 5
  const volume = () => {
    return Math.PI * Math.pow(cylinder,2) * height
  }
  return(
    <div>
      <p>Volume of Cylinder: {volume()}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <GenerateGreeting userName="John"/>

      <CalculateArea />

      <CalculatePerimeter />

      <GenerateMessage />

      <CalculateVolume />
    </div>
  );
}
