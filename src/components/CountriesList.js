import Country from "./Country";

const CountriesList = ({countries, updateVisitedList}) => {
    const countryComponenets = countries.map((country, index) => {
        return <Country country = {country} key={index} updateVisitedList={updateVisitedList}/>
    });

    return (

        <>
        <ul>
            {countryComponenets}
        </ul>
        
        
        </>




    )

}

export default CountriesList;