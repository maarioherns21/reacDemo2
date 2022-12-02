import { InputLabel, Select, MenuItem, Button, Grid, Typography, Input, TextField, CssBaseline} from "@mui/material"
import { useState } from "react";
import {useForm , FormProvider, useController, Controller} from "react-hook-form"
import FormInput from "../FormInput"
import { Link } from "react-router-dom";
// this imports the ecomemer store
import {commerce} from "../../../lib/commerce"
import { useEffect } from "react";


const AddressForm = ({ checkoutToken, next}) => {
    const [shippingCountries, setShippingCountries] =useState([])
    const [shippingCountry, setShippingCountry] =useState("")
    const [shippingSubdivisions, setShippingSubdivisions] =useState([])
    const [shippingSubdivision,setShippingSubdivision]  =useState("")
    const [shippingOptions,  setShippingOptions] =useState([])
    const  [shippingOption,  setShippingOption] =useState("")
     const methods = useForm();

     //convert to object to an aRRay
const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}))
// console.log("this gives me an array from Objects => " , countries)
const subdivisions  =  Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name}))
console.log("this gives me an array from Objects ubdivison => " ,  subdivisions)
//this is for the shipping  options 
const options  = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }))

// console.log(options)





    const fetchShippingCountries = async (checkoutTokenId) => {
      const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

      console.log("shipping info ==>", countries);
      setShippingCountries(countries);
      ///gets you an array and gets you the first oone
    //   console.log(Object.keys(countries)[0])
      setShippingCountry(Object.keys(countries)[0])
      
    };

  //this fetchest the subdivisons
    const fetchShippingSubdivisions =  async (coutryCode) =>{
      const {subdivisions} = await commerce.services.localeListSubdivisions(coutryCode)

      setShippingSubdivisions(subdivisions)
      setShippingSubdivision(Object.keys(subdivisions)[0])
    }
 //// fetching  the shiiping options



 const fetchShippingOptions = async (checkoutTokenId,  country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})
    //  console.log("2222@" , options)
    setShippingOptions(options)
    ///select first shiipping option
    setShippingOption(options[0].id)
    
 }




    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(() => {
     if(shippingCountry) fetchShippingSubdivisions(shippingCountry)
    }, [shippingCountry])
  
    useEffect(() => {
        if(shippingSubdivision)  fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])
  
  return (
    <>
    <CssBaseline />
      <Typography variant="h6" gutterBottom>
        Shipping Adress
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data)=> next({...data , shippingCountry, shippingSubdivision, shippingOption})  )}>
        <Grid container spacing={3}>
            <FormInput />



            {/* this is for  iterating trhough Coutries */}
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)} >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>



                {/* this is for  iterating trhough Subdivisions */}
            <Grid item xs={12} sm={6}>
                <InputLabel>shipping Subdivision</InputLabel>
                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {subdivisions.map((subdivision) => (
                    <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                </MenuItem> 
                ))}
                </Select>
            </Grid>


                {/* this is for  iterating trhough Shipping Options */}
            <Grid item xs={12} sm={6}>
                <InputLabel>shipping options</InputLabel>
                <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                    {option.label}
                </MenuItem> 
                ))}
                </Select>
            </Grid>
            
    
          </Grid> 


           <br /> 
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};


export default AddressForm

//// Next i i will incorporate  payment method with stripe  tomrrow 

