const Country = ({country, updateVisitedList}) => {

    const handleClick = (e) => {
        console.log(country.name.common);
        updateVisitedList(country.name.common)
    }

    return(
        <li>
        {country.name.common}
        <button onClick={handleClick}>Visited</button>
        </li>
    );




}

export default Country;