import "./styles.css";

const RandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return(
    <div>
      <p>Random Number: {randomNumber}</p>
    </div>
  )
}

const AbsoluteValue = () => {
  const number = -10
  const absoluteValue = Math.abs(number)
  return(
    <div>
      <p>Absolue Value: {absoluteValue}</p>
    </div>
  )
}

const SumOfEvenNumbers = () => {
  const numbers = [1,2,3,4,5,6,7]
  const evenNum = numbers.filter((num) => num % 2 === 0).reduce((acc,curr) => acc + curr, 0)
  return(
    <div>
      <p>Sum of even numbers: {evenNum}</p>
    </div>
  )
}

const PerimeterOfSquare = () => {
  const sideSquares = 5
  const perimeter = 4 * sideSquares
  return(
    <div>
      <h1>Square Perimeter Calculator</h1>
      <p>Side Length: {sideSquares} cm</p>
      <p>Perimeter: {perimeter} cm</p>
    </div>
  )
}

const CurrencyConverter = () => {
  const usdAmount = 50
  const exchangeRate = 74.5
  const inrAmount = usdAmount * exchangeRate
  return(
    <div>
      <h1>Currency Converter</h1>
      <p>Amount in USD: ${usdAmount}</p>
      <p>Exchange Rate 1 USD: {exchangeRate} INR</p>
      <p>Amount in INR: INR {inrAmount}</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <RandomNumber />

      <AbsoluteValue />

      <SumOfEvenNumbers />

      <PerimeterOfSquare />

      <CurrencyConverter />
    </div>
  );
}
