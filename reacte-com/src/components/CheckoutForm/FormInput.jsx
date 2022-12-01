import { TextField, Grid, Input } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required, render }) => {
  const { register } = useFormContext(); // retrieve all hook methods
   
   
   
    return (
      <>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name" {...register("firsName")} required fullWidth />
          <TextField label="Last Name" {...register("LastName")}required fullWidth />
          <TextField label="Adress" {...register("Adress1")} required fullWidth />
          <TextField label="Zip Code" {...register("Zip")} required fullWidth />
          <TextField label="City" {...register("city")} required fullWidth />
        </Grid>
      </>
    );
  
  
  }

 

export default FormInput

