import styled from "styled-components";


const Button = styled.button`
  width: 88px;
  height: 36px;
  background:${(props) => buttonTheme[props.buttonTheme].backgroundValue}; 
  box-shadow:${(props) => buttonTheme[props.buttonTheme].boxShadowValue};
  border:${(props) => buttonTheme[props.buttonTheme].borderValue};
  color:${(props) => buttonTheme[props.buttonTheme].colorValue};
  border-radius: 6px;
  margin: 20px 50px;
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
  buttonTheme: "defaultButtonTheme"
};

const buttonTheme = {
  defaultButtonTheme: {
    borderValue: "0",
    boxShadowValue: "0",
    backgroundValue: "0"
  },
  defaultButton: {
    backgroundValue: "#E0E0E0",
    boxShadowValue: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    borderValue: "0",
    colorValue: "#3F3F3F"
  },
  hoverFocusType1Button: {
    backgroundValue: "#AEAEAE",
    boxShadowValue: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    borderValue: "0",
    colorValue: "#3F3F3F"
  },
  OutlineVariantButton: {
    backgroundValue: "0",
    borderValue: "1px solid #3D5AFE",
    boxShadowValue: "0",
    colorValue: "#3D5AFE"
  },
  hoverFocusType2Button: {
    backgroundValue: "rgba(41, 98, 255, 0.1)",
    boxShadowValue: "0",
    borderValue: "1px solid #3D5AFE",
    colorValue: "#3D5AFE"
  },
  textVariantButton: {
    backgroundValue: "0",
    borderValue: "0",
    boxShadowValue: "0",
    colorValue: "#3D5AFE"
  },
  hoverFocusType3Button: {
    backgroundValue: "rgba(41, 98, 255, 0.1)",
    boxShadowValue: "0",
    borderValue: "0",
    colorValue: "#3D5AFE"
  },
  disableShadowButton: {
    backgroundValue: "#3D5AFE",
    boxShadowValue: "0",
    borderValue: "0",
    colorValue: "#FFFFFF"
  },
  disabledButton: {
    backgroundValue: "#E0E0E0",
    boxShadowValue: "0",
    borderValue: "0",
    colorValue: "#9E9E9E",
  },
  textVariantDisabledButton: {
    backgroundValue: "0",
    boxShadowValue: "0",
    borderValue: "0",
    colorValue: "#9E9E9E"
  }

}



function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <div>
          <Button buttonTheme="defaultButton">Default</Button>
        </div>
        <div>
          <Button buttonTheme="hoverFocusType1Button">Default</Button>
        </div>
        <div>
          <Button buttonTheme="OutlineVariantButton">Default</Button>
        </div>
        <div>
          <Button buttonTheme="hoverFocusType2Button">Default</Button>
        </div>
        <div>
          <Button buttonTheme="textVariantButton">Default</Button>
        </div>
        <div>
          <Button buttonTheme="hoverFocusType3Button">Default</Button>
        </div>
        <div>
          <Button buttonTheme="disableShadowButton">Default</Button>
        </div>
        <div>
          <Button buttonTheme="disabledButton">Default</Button>
        </div>
        <div>
          <Button buttonTheme="textVariantDisabledButton">Default</Button>
        </div>
      </div>
    </>
  );
}

export default App;
