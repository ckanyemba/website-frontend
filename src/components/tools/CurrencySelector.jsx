import React, { useState } from "react";
import styled from "styled-components";

const CurrencySelector = () => {
  const [currency, setCurrency] = useState("RAND");

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    // Handle currency change logic here
  };

  return (
    <CurrencySelectorContainer>
      <Select value={currency} onChange={handleCurrencyChange}>
        <option value="ZWL">ZWL</option>
        <option value="RAND">RAND</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        {/* Add more currency options here */}
      </Select>
    </CurrencySelectorContainer>
  );
};

const CurrencySelectorContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #7b1821;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #fff;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 1rem;
`;

export default CurrencySelector;
