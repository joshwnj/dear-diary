// Import React
import React from "react";
import cmz from "cmz";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Notes,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// customize css
cmz('spectacle-slide', `
  max-height: 1080px
`).toString()

const images = {
  logo: require("../assets/x-team-logo-gray.svg"),
  tabs: require('../assets/tabs.gif'),
  typewriter: require('../assets/typewriter.gif'),
  gitBlame: require('../assets/git-blame.jpg'),
  traffic: require('../assets/traffic.png'),
  ancientSpinner: require('../assets/ancient-spinner.jpg'),
  fireman: require('../assets/fireman2.png'),
  bush: require('../assets/bush.png'),
  bomb: require('../assets/bomb.png'),
  squeeze: require('../assets/squeeze.jpg'),
  scream: require('../assets/scream.jpg'),
  swords: require('../assets/swords.jpg'),
  memex: require('../assets/memex.jpg'),
  hammer: require('../assets/hammer.png'),
  palette: require('../assets/palette.png'),
  getCreative: require('../assets/getcreative.gif'),
  knowledge: require('../assets/knowledge.png'),
};

preloader(images);

const colors = {
  primary: 'hsl(180, 10%, 90%)',
  secondary: 'black',
  tertiary: 'hsl(90, 10%, 10%)',
  quarternary: 'hsl(120, 20%, 60%)'
};

const fonts = {
  primary: 'Fantasque Sans Mono',
  secondary: 'Fantasque Sans Mono',
  tertiary: 'Fantasque Sans Mono',
};

const theme = createTheme(colors, fonts)

const monospace = cmz(`
  font-family: 'Fantasque Sans Mono'
`)

function hx (css, tag='div') {
  const atom = cmz(css)
  return function (props) {
    return React.createElement(
      tag, 
      Object.assign({}, { className: atom }, props)
    )
  }
}

hx.span = (css) => hx(css, 'span')


const Bubble = hx(`
& {
  height: 15rem;
  border-radius: 15rem;
  overflow: hidden;
  margin-right: -4rem;
  margin-bottom: -5rem;
}

& > img {
  width: 15rem;
}
`)

function Footer () {
  const Outer = hx(`
    position: fixed
    bottom: 2rem
    right: 1rem
  `)

  const Inner = hx.span([
  `
    background: #fff
    padding: 1rem
    font-size: 1.5rem
  `, 
  monospace
  ])
  return (
<Outer>
  <Inner><b>@joshwnj</b> - Dear Diary</Inner>
</Outer>
  )
}

export default class Presentation extends React.Component {
  render() {

    return (
    <div>
      <Deck progress='none' transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading>Dear Diary</Heading>
          <Heading>~</Heading>
          <Heading size={3}><em>Journal writing for programmers</em></Heading>
        </Slide>

        <Slide>
          <div className={cmz(['display: flex', 'text-align: left'])}>
            <Image src={images.traffic} style={{maxHeight: '90vh', marginLeft: '-8vw', marginTop: '-5vh', marginRight: '5vw'}} />
            <Heading size={3}>Bad ideas can gain widespread adoption</Heading>
          </div>
        </Slide>

        <Slide>
          <div className={cmz(['display: flex', 'text-align: left'])}>
            <Image src={images.ancientSpinner} style={{maxHeight: '90vh', marginLeft: '-16vw', marginTop: '-7vh', marginRight: '5vw'}} />
            <Heading size={3}>Good ideas can come before their time</Heading>
          </div>
        </Slide>

        <Slide bgImage={images.tabs} bgDarken={0.1}>
        </Slide>

        <Slide>
          <Heading>Keeping Up</Heading>
        </Slide>

        <Slide bgImage={images.fireman}>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textColor="primary" style={{fontSize: '4rem'}}>there is increased evidence that we are being bogged down today as specialization extends. </Quote>
          </BlockQuote>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>

            <Quote textColor="primary" style={{fontSize: '4rem'}}>The investigator is staggered by the findings and conclusions of thousands of other workers - conclusions which he cannot find time to grasp, much less to remember</Quote>
            <Appear><Cite textColor="quarternary">Vannevar Bush, 1945</Cite></Appear>
          </BlockQuote>

          <div className={cmz(['display: flex', 'flex-direction: column', 'position: absolute', 'left: -11vw', 'top: 5vh'])}>
            <Appear><div>
              <Bubble><img src={images.bush} /></Bubble>
            </div></Appear>

            <Appear><div>
              <Bubble><img src={images.scream} /></Bubble>
            </div></Appear>

            <Appear><div>
              <Bubble><img src={images.bomb} /></Bubble>
            </div></Appear>

            <Appear><div>
              <Bubble><img src={images.squeeze} /></Bubble>
            </div></Appear>
          </div>
        </Slide>

        <Slide bgImage={images.swords} style={{ backgroundPosition: 'center bottom' }}>
        </Slide>

        <Slide bgImage={images.memex}>
        </Slide>

        <Slide>
          <Heading>
          <div className={cmz(['display: flex', 'justify-content: space-around', 'align-items: center'])}>
            <img src={images.hammer} style={{ background: 'white', borderRadius: '100rem', padding: '2rem' }} />

            VS

            <img src={images.palette} style={{ background: 'white', borderRadius: '100rem', padding: '2rem' }} />
          </div>
          </Heading>
          <Appear>
            <Image src={images.getCreative} />
          </Appear>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>You can make anything by writing</Quote>
            <Cite textColor="quarternary">C. S. Lewis</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading>
            <div className={cmz(['display: flex', 'justify-content: space-around', 'align-items: center'])}>
              <Appear><Heading>fact</Heading></Appear>

              <Appear><Heading>&nbsp;+&nbsp;</Heading></Appear>

              <Appear><Heading>significance</Heading></Appear>
            </div>
          </Heading>
 
          <Appear>
            <div>
              <Heading>~</Heading>

              <Text><em>A program well written shares the same qualities as a story well told.</em></Text>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Fill>
          <div style={{display: 'flex'}}>
            
            <CodePane
              style={{fontSize: '2rem', marginLeft: '-20vw', marginRight: '2vw'}}
              lang="js"
              source={require("raw-loader!./example-1")}
              margin="20px auto" />

              <CodePane
                style={{fontSize: '2rem'}}
                lang="js"
                source={require("raw-loader!./example-2")}
                margin="20px auto" />
          </div>
          </Fill>
        </Slide>

        <Slide bgImage={images.gitBlame} bgDarken={0.75}>
          <Image src={images.gitBlame} />
        </Slide>

        <Slide>
          <Text><b>designers</b> should learn to <b>code</b>?</Text>
          <Text><b>coders</b> should learn to <b>design?</b></Text>
          <Appear><div>
            <Heading>~</Heading>
            <Heading><em><b>coders:</b> learn to <b>write</b></em></Heading>
          </div></Appear>
        </Slide>

        <Slide>
          <Heading>Getting started</Heading>
        </Slide>

        <Slide>
          <Heading>Two modes of writing</Heading>
          <Heading>~</Heading>
          <Appear><Heading size={4}>Fast & Furious</Heading></Appear>
          <Appear><Heading size={4}>2 Summarise, 2 Categorise</Heading></Appear>          
        </Slide>

        <Slide>
          <Heading>TIL</Heading>
        </Slide>

        <Slide>
          <Heading>The 3 Fears</Heading>
          <Heading>~</Heading>
          <Appear><Heading size={4}>What If I'm Wrong?</Heading></Appear>
          <Appear><Heading size={4}>What If I'm Right?</Heading></Appear>
          <Appear><Heading size={4}>What If Nobody Cares?</Heading></Appear>
        </Slide>

        <Slide bgImage={images.knowledge} />

        <Slide></Slide>

        <Slide>
          <Heading>WIP</Heading>
        </Slide>

        <Slide>
          <Heading>The 3 Fears (Again)</Heading>
          <Heading>~</Heading>
          <Appear><Heading size={4}>What If I'm Wrong?</Heading></Appear>
          <Appear><Heading size={4}>What If I'm Right?</Heading></Appear>
          <Appear><Heading size={4}>What If Nobody Cares?</Heading></Appear>
        </Slide>

        <Slide>
          <Heading>Tip: journal channels</Heading>
        </Slide>

        <Slide>
          <Heading><em>&ldquo;The team that WIPs together ships together&rdquo;</em></Heading>
        </Slide>

        <Slide>
          <div>
            <Heading size={3}>Programming is a creative act</Heading>
            
            <Appear>
              <div>
                <Heading>~</Heading>
                <Heading size={3}>A program is a story</Heading>
              </div>
            </Appear>

            <Appear>
              <div>
                <Heading>~</Heading>
                <Heading size={3}>Leave a trail</Heading>
              </div>
            </Appear>
          </div>
        </Slide>

        <Slide>
          <Heading textColor={'#f69'}><em>Thanks CampJS!</em></Heading>
        </Slide>
      </Deck>

      <Footer />
    </div>
    );
  }
}
