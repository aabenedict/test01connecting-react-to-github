const Pictures = (props) => {
    return (
        <li>
            <h3>{props.artInfo.title}</h3>
            <img src={props.artInfo.webImage.url} alt={props.artInfo.longtitle} />
        </li>
    )
}

export default Pictures;