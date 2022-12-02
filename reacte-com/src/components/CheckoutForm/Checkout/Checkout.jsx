import { Step, Paper, Stepper, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import AddressForm from "../AdressForm/AdressForm";

import PaymentForm from "../PaymentForm/PaymentForm";
import { Root, classes } from "./style";
import { commerce } from "../../../lib/commerce";
import { Link, useNavigate } from "react-router-dom";
const steps = ["Shipping address", "Payment details" , "Confirmation"];

const Checkout = ({ cart, onCaptureCheckout, order ,error  }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState([]);
  const navigate = useNavigate()
  
  
  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) navigate('/products');
        }
      };

      generateToken();
    }
  }, [cart]);



  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/products">Back to home</Button>
    </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  ));

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/products">Back to home</Button>
      </>
    );
  }
  

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
      <PaymentForm nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} backStep={backStep} checkoutToken={checkoutToken} shippingData={shippingData} />
    );

  return (
    <Root>
      <>
      <CssBaseline />
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
              <Confirmation  />
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
