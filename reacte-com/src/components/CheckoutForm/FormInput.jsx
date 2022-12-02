import { TextField, Grid } from "@mui/material";
import { useFormContext  } from "react-hook-form";

const FormInput = () => {
  const { register } = useFormContext(); // retrieve all hook methods
   
   
   
    return (
      <>
        <Grid item xs={12} sm={6}>
          <TextField label="First Name"   name="firstName" {...register("firstName")} required fullWidth />
          <TextField label="Last Name"    name="lastName" {...register("lastName")}required fullWidth />
          <TextField name="street"   label="Street" {...register("street")} required fullWidth />
          <TextField label="Zip Code"  name="zip" {...register("zip")} required fullWidth />
          <TextField label="City"      name="city" {...register("city")} required fullWidth />
          <TextField label="email"  name="email" {...register("email")} required fullWidth  />
        </Grid>
      </>
    );
  
  
  }

 

export default FormInput

