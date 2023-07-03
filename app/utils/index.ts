import { CarProps, FilterProps } from "../types";
require('dotenv').config()

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  

export async function fetchCars( filters : FilterProps ) {

    const { manufacturer, year, model, limit, fuel } = filters

    const headers = {
        'X-RapidAPI-Key': '1df5361c04msh727fbf27e08fdbfp13ee93jsn19659906c858',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`, {headers})

    const resault = await response.json()
    return resault
}

export const generateCarImageUrl = ( car : CarProps, angle? : string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')
    const { make, year, model} = car

    const key = process.env.CDN

    url.searchParams.append('customer', key)
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoonType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {

  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set(type, value)
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`
  return newPathname
}