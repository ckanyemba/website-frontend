import React, { useState } from "react";
import styled from "styled-components";
import Register from "../auth/Register";

const MyAccount = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  const handleSave = () => {
    // Code to handle save logic, like API calls to update user data
    setIsEditing(false);
  };

  return (
    <ProfileContainer>
      <Hero>
        <HeroText>
          <h1>Welcome Back</h1>
          <p>Please log in to your account</p>
        </HeroText>
      </Hero>

      <Title>Order Created</Title>
      <div>
        <label>Please input the following details</label>
        <ProfileField>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ProfileField>
        <ProfileField>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ProfileField>
        <ProfileField>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </ProfileField>
        <ProfileField>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </ProfileField>
        <Button>Complete Order</Button>
      </div>

      <OrderHistory>
        <h3>Order History</h3>
        {/* Order history details go here */}
      </OrderHistory>
      <PaymentMethods>
        <h3>Saved Payment Methods</h3>
        {/* Payment methods details go here */}
      </PaymentMethods>
      <Wishlist>
        <h3>Wishlist</h3>
        {/* Wishlist details go here */}
      </Wishlist>
      <Reviews>
        <h3>Reviews</h3>
        {/* User reviews go here */}
      </Reviews>
      <AccountSecurity>
        <h3>Account Security</h3>
        {/* Account security settings go here */}
      </AccountSecurity>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #c9e8e1;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const ProfileField = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  p {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #ddfff7;
  }
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #333;
  color: #fff;
`;

const HeroImage = styled.img`
  width: 50%;
  height: auto;
`;

const HeroText = styled.div`
  width: 50%;
  text-align: center;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #aa4465;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const OrderHistory = styled.div`
  margin-top: 20px;
`;

const PaymentMethods = styled.div`
  margin-top: 20px;
`;

const Wishlist = styled.div`
  margin-top: 20px;
`;

const Reviews = styled.div`
  margin-top: 20px;
`;

const AccountSecurity = styled.div`
  margin-top: 20px;
`;

export default MyAccount;
