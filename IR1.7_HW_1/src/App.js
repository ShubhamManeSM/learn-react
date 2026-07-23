import "./styles.css";

const UserStatus = ({isOnline}) => {
  return <p>{isOnline ? "User is Online" : "User is Ofline"}</p>
}

const DayOfWeek = ({isWeekend}) => {
  return <p>{isWeekend ? "Enjoy your weekend!" : "Have a great day!"}</p>
}

const ShoppingCart = ({itemCount}) => {
  return(
    <div>
     {itemCount > 0
     ? <p>You have {itemCount} items in your cart.</p>
     : <p>Your cart is empty.</p>
     }
    </div>
  )
}


const DiscountOffer = ({isPrimeMember}) => {
  return <p>{isPrimeMember ? "You're elegible for a 20% discount" : "Become a prime member for exclusive discounts"}</p>
}

const ShowError = ({showError}) => {
  return <div>{showError && <p>{showError}</p>}</div>
}

export default function App() {
  return (
    <div>
      <UserStatus isOnline={true} />
      <DayOfWeek isWeekend={true} />
      <ShoppingCart itemCount={3}/>
      <DiscountOffer isPrimeMember={true} />
      <ShowError showError={"An error occurred. Please try again later."} />
    </div>
  );
}
