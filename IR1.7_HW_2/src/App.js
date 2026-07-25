import "./styles.css";

const CreditCardPayment = ({amount}) => {
  return(
    <p>{amount > 1000 ? "Please use your credit card for payment" : "You can pay using cash or debit card"}</p>
  )
}

const ProductAvailability = ({inStock}) => {
  return(
    <div>
      {inStock ? (
        <p>The product is available. Order now!</p>
      ) : (
        <p>Sorry, the product is currently out of stock.</p>
      )}
    </div>
  )
}

const TrafficLight = ({color}) => {
  return (
    <div>
      <p>{color === 'red' ? "Stop! The light is red" : "Go! The light is green"}</p>
    </div>
  )
}

const MembershipStatus = ({isPremium}) => {
  return(
    <div>
      {isPremium  ? (
      <p>Welcome, Premium Member!</p>
    ) : (
    <p>Upgrade to premium for exclusive benefits</p>
  )}
    </div>
  )
}

const WeatherReport = ({isSunny}) => {
  return (
    <div>
      {isSunny ?(
        <p>It is sunny today.</p>
      ) : (
        <p>It is not sunny today</p>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <CreditCardPayment amount={1500}/>

      <ProductAvailability inStock={true} />

      <TrafficLight color={"red"}/>
      
      <MembershipStatus isPremium={true}/>

      <WeatherReport isSunny={true} />

    </div>
  );
}
