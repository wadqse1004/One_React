import { useState } from 'react';

function InputValue({ country, value, onChange }) {
  return (
    <div>
      <label>{country}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(country, e.target.value)}
      />
    </div>
  );
}

const ExchangeRate = 1379;

function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (country, value) => {
    console.log({ country, value });
    if (country === "krw") {
      setState({
        krw: value,
        usd: value / ExchangeRate,
      });
    } else {
      setState({
        krw: value * ExchangeRate,
        usd: value,
      });
    }
  };

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <InputValue
        country={"krw"}
        value={state.krw}
        onChange={onChange}
      />
      <InputValue
        country={"usd"}
        value={state.usd}
        onChange={onChange}
      />
    </>
  )
}

export default App
