// Import the Hooks we need to accomplist our logic!
import axios from "axios";
import { useState, useEffect } from "react";
import Gallery from "./Gallery";


const ArtWall = () => {

    console.log("ArtWall is re-rendering ")

    // Initialize a state to keep track of whether the gallery is visible or not
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);

    // Initialize a state for the Api data from Rijksmuseum (AKA our beautiful art to be displayed)
    const [art, setArt] = useState([]);

    // Call the Rijksmuseum API once the ocmponent has been mounted to the DOM
        // AKA run a side effect!
        useEffect(() => {
            // This is where you define what the side effect is AND how it will run
            console.log("Side effect is running")

            // using axios let's made a request to our API
            axios({
                url: 'https://www.rijksmuseum.nl/api/en/collection',
                // add our URL parameters through this object
                params: {
                    key: 'XI2BWx4V',
                    imgOnly: true,
                    topPieces: true,
                }
            }).then((art) => {
                // once the data is returned from the API, let's save it within state
                setArt(art.data.artObjects);
            })
        // if you only wish to run a side effect ONCE upon the component's initial mount to the DOM, use an EMPTY dependency array
        }, [])

    // define an event handler which updates the isGalleryVisible state to be the opposite boolean value

    const handleClick = () => {
        setIsGalleryVisible(!isGalleryVisible)
    }

    return (
        <section>
            <h2>
                {
                    isGalleryVisible
                        ? 'Wow this is a beautiful gallery wall'
                        : 'Ok but would you like to actually see some art?'
                }
            </h2>

            <button onClick={handleClick}>
                {
                    isGalleryVisible
                        ? 'Hide the a a r t!'
                        : 'Click here for a r t!'
                }
            </button>

            {/* only show the Gallery component if the is Gallery Visible state is true  */}
            {
                isGalleryVisible
                    // pass the array of art that lives within the art state variable from this component down to the Gallery component
                    ? <Gallery arrayOfArt={art}/>
                    : null
            }
            
        </section>
    )
}

export default ArtWall;
