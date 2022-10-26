import Pictures from "./Pictures";

// if you wish to use information from the propbs object, don't forget to pass it into you function component
const Gallery = (props) => {
    console.log("Gallery has rendered", props)

    return (
        <section className="gallery">
            <h2>Gallery of Pictures</h2>
            <ul>
                {
                    // we are going to map through the array of art within the props object
                    props.arrayOfArt.map((artObject) => {
                        // for each object within the array, we will return a Picture component

                        // and pass down the image and title for that specific object which the Picture component will then render to the page
                        return <Pictures artInfo={artObject} key={artObject.id}/>
                    })
                }
            </ul>
            
        </section>
    )
}

export default Gallery;