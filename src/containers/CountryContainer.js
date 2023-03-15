import { useState, useEffect, useCallback } from "react"
import CountriesList from "../components/CountriesList"


const CountryContainer = () => {

    const [countries, setCountries]= useState([])
    const [visitedCountries, setVisitedCountries] = useState ([])

    useEffect(() => {
        updateCountryData();
    }, []);

    const updateCountryData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();
        setCountries(data);
    }

    const updateVisitedList = (countryName) => {
        const alreadySelectedCountries = visitedCountries.includes((country) => {
            return country.name.common === countryName;
        })

        if(alreadySelectedCountries){
            return;
        }


        const filterCountriesList = countries.filter((country) => {
        return country.name.common !== countryName;
        })

        const chosenCountry = countries.find((country) => {
        return country.name.common === countryName;
        })

        setVisitedCountries([...visitedCountries, chosenCountry]);
        setCountries(filterCountriesList);

    }   

    return (
        <>
        {countries ? <CountriesList countries={countries} updateVisitedList={updateVisitedList}/> : <p>please wait</p>}
        {countries ? <CountriesList countries ={visitedCountries}/> : <p>please wait</p>}
        
        </>
    );
    




};








console.log("hi");


export default CountryContainer;