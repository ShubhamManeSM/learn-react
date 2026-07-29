import "./styles.css";

const Laptops = ({laptops}) => {
  const laptopsListing = laptops.map(laptop => (
    <div>
      <p><strong>{laptop.brand}</strong></p>
      <p>Price: ${laptop.price}</p>
    </div>
  ))
  return(
    <>
     <h2>Laptops</h2>
     {laptopsListing}
    </>
  )
}

const TouristSpots = ({touristSpot}) => {
  const touristSpotListing = touristSpot.map(spot => (
    <div>
      <p><strong>{spot.place}</strong></p>
      <p>Location: {spot.location}</p>
    </div>
  ))
  return(
    <>
    <h2>Tourist Spots</h2>
    {touristSpotListing}
    </>
  )
}

const PodcastEpisode = ({podcastEpisode}) => {
  const podcastEpisodeListing = podcastEpisode.map(podcast => (
    <div>
      <p><strong>{podcast.title}</strong></p>
      <p>Duration: {podcast.duration}</p>
    </div>
  ))
  return(
    <>
    <h2>Podcast Episode</h2>
    {podcastEpisodeListing}
    </>
  )
}


const NewArticles = ({newArticles}) => {
  const newArticleListing = newArticles.map(article => (
    <div>
      <p><strong>{article.title}</strong></p>
      <p>Description {article.description}</p>
    </div>
  ))
  return(
    <>
    <h2>News Articles</h2>
    {newArticleListing}
    </>
  )
}

const Games = ({games}) => {
  const gamesListing = games.map(game => (
    <div>
      <p><strong>{game.title}</strong></p>
      <p>Genre: {game.genre}</p>
    </div>
  ))
  return(
    <>
    <h2>Games</h2>
    <p>{gamesListing}</p>
    </>
  )
}

export default function App() {
  const laptops = [
    {id: 1, brand: "Dell", price: 999},
    {id: 2, brand: "HP", price: 899},
    {id: 3, brand: "Lenovo", price: 1099}
  ]

  const touristSpots = [
    {id: 1, place: "Grand Canyon", location: "Arizona, USA"},
    {id: 2, place: "Eiffel Tower", location: "Paris, France"},
    {id: 3, place: "Great Wall of China", location: "Beijing, China"}
  ]

  const podcastEpisode = [
    {id: 1, title: "Episode 1", duration: "30 minutes"},
    {id: 2, title: "Episode 2", duration: "45 minutes"},
    {id: 3, title: "Episode 3", duration: "60 minutes"}
  ]

  const newArticles = [
    {id: 1, title: "News 1", description: 1},
    {id: 2, title: "News 2", description: 2},
    {id: 3, title: "News 3", description: 3}
  ]

  const games = [
    {id: 1, title: "Game 1", genre: "Action"},
    {id: 2, title: "Game 2", genre: "Adventure"},
    {id: 3, title: "Game 3", genre: "Strategy"}
  ]
  return (
    <div>
      <Laptops laptops={laptops} />
      <hr />
      <TouristSpots touristSpot={touristSpots} />
      <hr />
      <PodcastEpisode podcastEpisode={podcastEpisode} />
      <hr />
      <NewArticles newArticles={newArticles} />
      <hr />
      <Games games={games} />
    </div>
  );
}
