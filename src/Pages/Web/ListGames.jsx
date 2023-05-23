import React, {useState} from 'react'
import '../../assets/css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css'



export default function ListGames(props) {
    const [games, setGames] = useState(
        [
            {
                "Game": "After Burner",
                "GameLink": "https://en.wikipedia.org/wiki/After_Burner",
                "Image" : "https://upload.wikimedia.org/wikipedia/en/6/6e/BC_Racers_Coverart.png",
                "Year": 1995,
                "Dev": "Sega",
                "DevLink": "https://en.wikipedia.org/wiki/Sega",
                "Publisher": "Sega",
                "PublisherLink": null,
                "Platform": "32X",
                "PlatformLink": "https://en.wikipedia.org/wiki/32X"
              },
              {
                "Game": "BC Racers",
                "GameLink": "https://en.wikipedia.org/wiki/BC_Racers",
                "Image" : "https://upload.wikimedia.org/wikipedia/en/6/6e/BC_Racers_Coverart.png",
                "Year": "1995",
                "Dev": "Core Design",
                "DevLink": "https://en.wikipedia.org/wiki/Core_Design",
                "Publisher": "U.S. Gold",
                "PublisherLink": "https://en.wikipedia.org/wiki/U.S._Gold",
                "Platform": "32X",
                "PlatformLink": "https://en.wikipedia.org/wiki/32X"
              },
              {
                "Game": "Blackthorne",
                "GameLink": "https://en.wikipedia.org/wiki/Blackthorne",
                "Image" : "https://www.gamespot.com/a/uploads/scale_tiny/mig/1/0/4/2/2211042-blackthorne.jpg",
                "Year": "1995",
                "Dev": "Interplay",
                "DevLink": "https://en.wikipedia.org/wiki/Interplay_Entertainment",
                "Publisher": "Interplay\nTectoy (Brazil)",
                "PublisherLink": "https://en.wikipedia.org/wiki/Tectoy (Brazil)",
                "Platform": "32X",
                "PlatformLink": "https://en.wikipedia.org/wiki/32X"
              },
              {
                "Game": "Brutal: Above the Claw",
                "GameLink": "https://en.wikipedia.org/wiki/Brutal:_Paws_of_Fury#Series_synopsis",
                "Image" : "https://m.media-amazon.com/images/I/612Lw5YXy1L.jpg",
                "Year": "1995",
                "Dev": "GameTek",
                "DevLink": "https://en.wikipedia.org/wiki/GameTek",
                "Publisher": "GameTek",
                "PublisherLink": null,
                "Platform": "32X",
                "PlatformLink": "https://en.wikipedia.org/wiki/32X"
              },
              {
                "Game": "Corpse Killer",
                "GameLink": "https://en.wikipedia.org/wiki/Corpse_Killer",
                "Image": "https://upload.wikimedia.org/wikipedia/en/6/6e/BC_Racers_Coverart.png",
                "Year": "1994",
                "Dev": "Digital Pictures",
                "DevLink": "https://en.wikipedia.org/wiki/Digital_Pictures",
                "Publisher": "Digital Pictures",
                "PublisherLink": null,
                "Platform": "32X",
                "PlatformLink": "https://en.wikipedia.org/wiki/32X"
              },
              {
                "Game": "Cosmic Carnage (JP: Cyber Brawl)",
                "GameLink": "https://en.wikipedia.org/wiki/Cosmic_Carnage (JP: Cyber Brawl)",
                "Image": "https://upload.wikimedia.org/wikipedia/en/6/6e/BC_Racers_Coverart.png",
                "Year": 1995,
                "Dev": "Givro",
                "DevLink": "https://en.wikipedia.org/wiki/Givro",
                "Publisher": "Sega",
                "PublisherLink": "https://en.wikipedia.org/wiki/Sega",
                "Platform": "32X",
                "PlatformLink": "https://en.wikipedia.org/wiki/32X"
              },
              {
                "Game": "Darxide",
                "GameLink": "https://en.wikipedia.org/wiki/Darxide",
                "Image" : "https://upload.wikimedia.org/wikipedia/en/9/9e/Darxide.jpg",
                "Year": 1905,
                "Dev": "Frontier Developments",
                "DevLink": "https://en.wikipedia.org/wiki/Frontier_Developments",
                "Publisher": "Sega",
                "PublisherLink": "https://en.wikipedia.org/wiki/Sega",
                "Platform": "32X",
                "PlatformLink": "https://en.wikipedia.org/wiki/32X"
              },
              {
                "Game": "Doom",
                "GameLink": "https://en.wikipedia.org/wiki/Doom_(1993_video_game)",
                "Image": "https://upload.wikimedia.org/wikipedia/en/6/6e/BC_Racers_Coverart.png",
                "Year": 1994,
                "Dev": "id Software",
                "DevLink": "https://en.wikipedia.org/wiki/Id_Software",
                "Publisher": "Sega",
                "PublisherLink": "https://en.wikipedia.org/wiki/Sega",
                "Platform": "32X",
                "PlatformLink": "https://en.wikipedia.org/wiki/32X"
              },
    ])

    // console.log(games)

    return (
    <div>
        <div className='popularcontent'>
            <div className='titlecontent'>
                <h1>Games</h1>
            </div>
            <div className=" row row-cols-md-3 g-3  py-5 ">
                {games && games.map((game) => (
                <div className="col d-flex justify-content-center">
                    <div className="card contentcard" href='#' style={{backgroundColor : '#303030', width : '21rem', height:'400px'}}>
                        <img src={game.Image} className="card-img-top" alt="..." style={{height:'350px', width: "100%"}}/>
                        <div className="">
                            <h5 className="card-title ">{game.Game}</h5>
                            {/* <Link to={`/games/${game.nama_game}`} class="btn btn-secondary">See More</Link> */}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
