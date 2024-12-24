import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart, getTotals } from "../features/cartSlice";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Container>
      <h2>Checkout Successful</h2>
      <p>Your order take 4 - 7 business days delivery  4- some time to process.</p>
      <p>
        Incase of any issues contact the support at{" "}
        <strong>apadanapublishinghouse@gmail.com</strong>
        <strong> +2763 923 6774 </strong>

      </p>
    </Container>
  );
};

export default CheckoutSuccess;

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;