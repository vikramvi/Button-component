import styled from "styled-components";

const Button = styled.button`
  background-color:${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

Button.defaultProps = {
  theme: "blue"
};



function App() {
  return (
    <>
      <div>
        <Button>Jai Ho</Button>
      </div>
      <div>
        <Button disabled>Disabled Jai Ho</Button>
      </div>
      <div>
        <Button theme="pink">
          Pink theme
        </Button>
      </div>
    </>
  );
}

export default App;
