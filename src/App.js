import styled, { css } from "styled-components";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const Button = styled.button`
      
  ${props => props.shouldHover
    ? '&:hover { background: yellow }'
    : ''
  }

  ${props => props.shouldHover
    ? '&:focus { background: yellow }'
    : ''
  }

  ${(props) => {
    const concatenatedTheme = Object.assign(
      {},
      defaultButtonTheme,
      buttonTheme[props.buttonTheme]
    );

    return css`
        width: ${concatenatedTheme.widthValue};
        height: ${concatenatedTheme.heightValue};
        background: ${concatenatedTheme.backgroundValue};
        box-shadow: ${concatenatedTheme.boxShadowValue};
        border: ${concatenatedTheme.borderValue};
        color: ${concatenatedTheme.colorValue};
        border-radius: ${concatenatedTheme.borderRadiusValue};
        margin: 20px 30px;
    `;
  }
  }

`;

Button.defaultProps = {
  buttonTheme: "defaultButtonTheme"
};


const defaultButtonTheme = {
  borderValue: "0",
  boxShadowValue: "0",
  backgroundValue: "0",
  widthValue: "88px",
  heightValue: "36px",
  borderRadiusValue: "6px",
  colorValue: "#FFFFFF"
}

const buttonTheme = {
  defaultButton: {
    backgroundValue: "#E0E0E0",
    boxShadowValue: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    colorValue: "#3F3F3F"
  },
  hoverFocusType1Button: {
    backgroundValue: "#AEAEAE",
    boxShadowValue: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    colorValue: "#3F3F3F"
  },
  OutlineVariantButton: {
    backgroundValue: "0",
    borderValue: "1px solid #3D5AFE",
    colorValue: "#3D5AFE"
  },
  hoverFocusType2Button: {
    backgroundValue: "rgba(41, 98, 255, 0.1)",
    borderValue: "1px solid #3D5AFE",
    colorValue: "#3D5AFE"
  },
  textVariantButton: {
    colorValue: "#3D5AFE"
  },
  hoverFocusType3Button: {
    backgroundValue: "rgba(41, 98, 255, 0.1)",
    colorValue: "#3D5AFE"
  },
  disableShadowButton: {
    backgroundValue: "#3D5AFE",
    colorValue: "#FFFFFF"
  },
  disabledButton: {
    backgroundValue: "#E0E0E0",
    colorValue: "#9E9E9E",
  },
  textVariantDisabledButton: {
    colorValue: "#9E9E9E"
  },
  startIconButton: {
    widthValue: "105px",
    backgroundValue: "#2962FF",
    boxShadowValue: "0px 2px 3px rgba(0, 49, 202, 0.2)"
  },
  endIconButton: {
    widthValue: "105px",
    backgroundValue: "#2962FF",
    boxShadowValue: "0px 2px 3px rgba(0, 49, 202, 0.2)"
  },
  smallButton: {
    widthValue: "73px",
    heightValue: "32px",
    backgroundValue: "#2962FF",
    boxShadowValue: "0px 2px 3px rgba(0, 49, 202, 0.2)"
  },
  mediumButton: {
    widthValue: "81px",
    heightValue: "36px",
    backgroundValue: "#2962FF",
    boxShadowValue: "0px 2px 3px rgba(0, 49, 202, 0.2)"
  },
  largeButton: {
    widthValue: "93px",
    heightValue: "42px",
    backgroundValue: "#2962FF",
    boxShadowValue: "0px 2px 3px rgba(0, 49, 202, 0.2)"
  },
  defaultColorButton: {
    backgroundValue: "#E0E0E0",
    boxShadowValue: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    colorValue: "#3F3F3F"
  },
  primaryColorButton: {
    backgroundValue: "#2962FF",
    boxShadowValue: "0px 2px 3px rgba(41, 98, 255, 0.2)"
  },
  secondaryColorButton: {
    backgroundValue: "#455A64",
    boxShadowValue: "0px 2px 3px rgba(69, 90, 100, 0.2)"
  },
  dangerColorButton: {
    backgroundValue: "#D32F2F",
    boxShadowValue: "0px 2px 3px rgba(211, 47, 47, 0.2)"
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
        <div>
          <Button buttonTheme="startIconButton"><LocalGroceryStoreIcon></LocalGroceryStoreIcon>Default</Button>
        </div>
        <div>
          <Button buttonTheme="endIconButton">Default<LocalGroceryStoreIcon></LocalGroceryStoreIcon></Button>
        </div>
        <div>
          <Button buttonTheme="smallButton">Default</Button>
        </div>
        <div>
          <Button buttonTheme="mediumButton">Default</Button>
        </div>
        <div>
          <Button buttonTheme="largeButton">Default</Button>
        </div>
        <div>
          <Button buttonTheme="defaultColorButton">Default</Button>
        </div>
        <div>
          <Button buttonTheme="primaryColorButton" shouldHover>Default</Button>
        </div>
        <div>
          <Button buttonTheme="secondaryColorButton" shouldHover>Default</Button>
        </div>
        <div>
          <Button buttonTheme="dangerColorButton" shouldHover>Default</Button>
        </div>
      </div>
    </>
  );
}

export default App;
