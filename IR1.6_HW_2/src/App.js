import "./styles.css";

const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5]
  const updatedArray = () => {
    return originalArray.reverse()
  }
  return(
    <div>
      <h1>Reverse Array</h1>
      <p>Reversed Array: {updatedArray().join(", ")}</p>
    </div>
  )
}

const CalculateBMI = () => {
  const weight = 70
  const height = 1.75
  const bmi = () => {
    return weight / (height * height)
  }
  return (
    <div>
      <h1>BMI Calculator</h1>
      <p>BMI: {bmi().toFixed(2)}</p>
    </div>
  )
}

const GenerateQuote = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  ];
  const randomQuote = () => {
    return Math.floor(Math.random() * quotes.length)
  }
  return(
    <div>
      <h1>Random Quote</h1>
      <p>{quotes[randomQuote()]}</p>
    </div>
  )
}

const GradeAnalyser = ({score}) => {
  const getStudent = (score) => { 
  if(score >= 90 && score <= 100){
    return {grade: "A", message: "Excellent Work"}
  }else if(score >= 80 && score <= 89){
    return {grade: "B" , message: "Good Job!"}
  }else if(score >= 70 && score <= 79){
    return {grade: "C", message: "Not bad, keep it up!"}
  }else if(score >= 60 && score <= 69){
    return {grade: "D", message: "You passed, but aim higher next time."}
  }else{
    return {grade: "F", message: "Sorry, you didn't pass. Keep working hard!"}
  }
}
const {grade, message} = getStudent(score)
return(
  <div>
    <h2>Score: {score}</h2>
    <h3>Grade: {grade}</h3>
    <p>{message}</p>
  </div>
)
}

const TemperatureFeedback = ({temperature}) => {
  const getTemperature = (currentTemp) => {
    if(currentTemp < 0){
      return {message: "Brr, it's freezing!"}
    }else if(currentTemp >= 0 && currentTemp <= 10){
      return {message: "It's quite cold, bundle up!"}
    }else if(currentTemp >= 10 && currentTemp <= 20){
      return {message: "The weather is cool and comfortable."}
    }else if(currentTemp >= 20 && currentTemp <= 30){
      return {message: "It's a warm day!"}
    }else{
      return {message: "It's hot outside, stay cool!"}
    }
  }
  const {message} = getTemperature(temperature)
  return(
    <div>
      <h1>Temperature Feedback</h1>
      <p>Current Temperature: {temperature} degree celsius</p>
      <p>{message}</p>
    </div>
  )
}


export default function App() {
  return (
    <div>
      <ReverseArray />

      <CalculateBMI />

      <GenerateQuote />

      <GradeAnalyser score={85}/>

      <TemperatureFeedback temperature={25}/>
    </div>
  );
}
