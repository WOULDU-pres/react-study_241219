import './App.css';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  background-color: purple;
`;

const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 60px;
`;

const PrimaryButton = styled.button`
  color: ${ (props) => {return props.primary ? 'white' : 'black'}};
  background-color: ${ props => props.primary ? 'blue' : 'gray'};
`


function App() {
  return (
    <div>
      <StyledButton>Styled Button</StyledButton>
      <SimpleButton>Simple Button</SimpleButton>
      <LargeButton>Large Button</LargeButton>
      <PrimaryButton>Primary Button</PrimaryButton>
      <PrimaryButton primary>Primary Button</PrimaryButton>
    </div>
  );
}

export default App;
