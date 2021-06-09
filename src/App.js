import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div class="flex-container">
        {/* left side nav bar */}
        <div class="flex-nav-bar">
          <div class="nav-top">
            <p>Devchallenges.io</p>
          </div>
          <div class="nav-bottom">
            <p>Colors</p>
            <p>Typography</p>
            <p>Spaces</p>
            <p>Buttons</p>
            <p class="active">Inputs</p>
            <p>Grid</p>
          </div>
        </div>

        {/*right side buttons section*/}
        <div class="buttons-section">
          <div>
            <h1>Buttons</h1>
          </div>
          <div>
          </div>
          <div>
            <pre>&lt;Button /&gt;</pre>
            <Button buttonTheme="defaultButton">Default</Button>
          </div>
          <div>
            <pre>&:hover, &:focus</pre>
            <Button buttonTheme="hoverFocusType1Button" shouldHover>Default</Button>
          </div>
          <div>

            <pre>&lt;Button variant=”outline” /&gt;</pre>
            <Button buttonTheme="OutlineVariantButton">Default</Button>
          </div>
          <div>
            <pre>&:hover, &:focus</pre>
            <Button buttonTheme="hoverFocusType2Button" shouldHover>Default</Button>
          </div>
          <div>
            <pre>&lt;Button variant=”text” /&gt;</pre>
            <Button buttonTheme="textVariantButton">Default</Button>
          </div>
          <div>
            <pre>&lt;Button disableShadow /&gt;</pre>
            <Button buttonTheme="hoverFocusType3Button">Default</Button>
          </div>
          <div class="single-element">
            <pre>&lt;Button disableShadow /&gt;</pre>
            <Button buttonTheme="disableShadowButton">Default</Button>
          </div>
          <div>
            <pre>&lt;Button disableShadow /&gt;</pre>
            <Button buttonTheme="disabledButton">Default</Button>
          </div>
          <div>
            <pre>&lt;Button disableShadow /&gt;</pre>
            <Button buttonTheme="textVariantDisabledButton">Default</Button>
          </div>
          <div>
            <pre>&lt;Button startIcon=”local_grocery_store” /&gt;</pre>
            <Button buttonTheme="startIconButton">
              <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
              <span>Default</span>
            </Button>
          </div>
          <div>
            <pre>&lt;Button endIcon=”local_grocery_store” /&gt;</pre>
            <Button buttonTheme="endIconButton">
              <span>Default</span>
              <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
            </Button>
          </div>
          <div class="three-element">
            <pre>&lt;Button size=”sm” /&gt;</pre>
            <Button buttonTheme="smallButton">Default</Button>
          </div>
          <div class="three-element">
            <pre>&lt;Button size=”md” /&gt;</pre>
            <Button buttonTheme="mediumButton">Default</Button>
          </div>
          <div class="three-element">
            <pre>&lt;Button size=”lg” /&gt;</pre>
            <Button buttonTheme="largeButton">Default</Button>
          </div>
          <div className="four-elements">
            <pre>&lt;Button color=”default” /&gt;</pre>
            <Button buttonTheme="defaultColorButton" >Default</Button>
          </div>
          <div className="four-elements">
            <pre>&lt;Button color=”primary” /&gt;</pre>
            <Button buttonTheme="primaryColorButton" >Default</Button>
          </div>
          <div className="four-elements">
            <pre>&lt;Button color=”secondary” /&gt;</pre>
            <Button buttonTheme="secondaryColorButton" >Secondary</Button>
          </div>
          <div className="four-elements">
            <pre>&lt;Button color=”danger”/&gt;</pre>
            <Button buttonTheme="dangerColorButton" >Danger</Button>
          </div>
          <div className="four-elements">
            <pre>&lt;&:hover, &:focus&gt;</pre>
            <Button buttonTheme="defaultColorButton" shouldHover>Default</Button>
          </div>
          <div className="four-elements">
            <pre>  </pre>
            <Button buttonTheme="primaryColorButton" shouldHover>Default</Button>
          </div>
          <div className="four-elements">
            <pre>  </pre>
            <Button buttonTheme="secondaryColorButton" shouldHover>Secondary</Button>
          </div>
          <div className="four-elements">
            <pre>  </pre>
            <Button buttonTheme="dangerColorButton" shouldHover>Danger</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
