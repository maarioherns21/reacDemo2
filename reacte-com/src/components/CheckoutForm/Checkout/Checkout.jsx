import { Step, Paper, Stepper, StepLabel, Typography, CircularProgress, Divider, Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import AddressForm from "../AdressForm/AdressForm";
import Confirmation from "../Confirmation/Confirmation";
import PaymentForm from "../PaymentForm/PaymentForm";
import { Root, classes } from "./style";
import { commerce } from "../../../lib/commerce";
const steps = ["Shipping address", "Payment details" , "Confirmation"];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState([]);

  const generateToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });

      console.log(token);
      setCheckoutToken(token);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };
  ///const confimation // migratd to his own compoents

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm shippingData={shippingData} />
    );

  return (
    <Root>
      <>
        <div className={classes.content} />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">
              checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <Form />
            )}
          </Paper>
        </main>
      </>
    </Root>
  );
};;

export default Checkout;
