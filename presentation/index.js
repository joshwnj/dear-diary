// Import React
import React from "react";
import cmz from "cmz";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
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
  max-height: 700px
`).toString()

const images = {
  logo: require("../assets/x-team-logo-gray.svg"),
  tabs: require('../assets/tabs.gif'),
  typewriter: require('../assets/typewriter.gif'),
  gitBlame: require('../assets/git-blame.jpg'),
  traffic: require('../assets/traffic.jpg'),
  ancientSpinner: require('../assets/ancient-spinner.jpg'),
  fireman: require('../assets/fireman.png'),
  bush: require('../assets/bush.png'),
  bomb: require('../assets/bomb.png'),
  squeeze: require('../assets/squeeze.jpg'),
  scream: require('../assets/scream.jpg'),
  swords: require('../assets/swords.jpg'),
  memex: require('../assets/memex.jpg'),
  hammer: require('../assets/hammer.png'),
  palette: require('../assets/palette.png'),
  getCreative: require('../assets/getcreative.gif'),
};

preloader(images);

const colors = {
  primary: 'hsl(180, 10%, 90%)',
  secondary: 'black',
  tertiary: 'hsl(90, 10%, 10%)',
  quarternary: 'hsl(120, 20%, 60%)'
};

const fonts = {
  primary: 'Open Sans Condensed',
  secondary: 'Lobster Two',
  tertiary: 'monospace'
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
}

& > img {
  width: 15rem;
}
`)

function Footer () {
  const Outer = hx(`
    position: fixed
    width: 100%
    bottom: 2rem
    text-align: right
    padding-right: 2rem
  `)

  const Inner = hx.span([
  `
    background: #fff
    padding: 1rem
    font-weight: 800
    font-size: 1.5rem
  `, 
  monospace
  ])
  return (
<Outer>
  <Inner>@joshwnj</Inner>
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
          <Heading>journal writing for programmers</Heading>
          
          <Appear>
            <Image src={images.logo} />
          </Appear>
        </Slide>

        <Slide bgImage={images.tabs} bgDarken={0.1}>
        </Slide>

        <Slide bgImage={images.typewriter}>
        </Slide>

        <Slide>
          <Heading>placeholder: future rate of innovation</Heading>
          
          <Appear>
            <Text>stay about the same?</Text>
          </Appear>
          <Appear>
            <Text>curve up?</Text>
          </Appear>
          <Appear>
            <Text>flatten out?</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading>placeholder: how many npm users?</Heading>
        </Slide>

        <Slide>
          <div className={cmz(['display: flex', 'text-align: left'])}>
            <Image src={images.traffic} style={{maxHeight: '90vh'}} />
            <Heading size={3}>Sometimes bad ideas take hold</Heading>
          </div>
        </Slide>

        <Slide>
          <div className={cmz(['display: flex', 'text-align: left'])}>
            <Image src={images.ancientSpinner} style={{maxHeight: '90vh'}} />
            <Heading size={3}>Sometimes good ideas come before their time</Heading>
          </div>
        </Slide>

        <Slide>
          <Heading>keeping up</Heading>
        </Slide>

        <Slide bgImage={images.fireman}>
        </Slide>

        <Slide bgColor="secondary">
          <BlockQuote>
            <Text textColor="primary">there is increased evidence that we are being bogged down today as specialization extends. The investigator is staggered by the findings and conclusions of thousands of other workers - conclusions which he cannot find time to grasp, much less to remember</Text>
            <Appear><Cite textColor="quarternary">Vannevar Bush, 1945</Cite></Appear>
          </BlockQuote>

          <div className={cmz(['display: flex'])}>
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

        <Slide bgImage={images.swords}>
        </Slide>

        <Slide bgImage={images.memex}>
        </Slide>

        <Slide>
          <Heading>
          <div className={cmz(['display: flex', 'justify-content: space-around', 'align-items: center'])}>
            <img src={images.hammer} />

            VS

            <img src={images.palette} />
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
          <Heading>story == fact + significance</Heading>
 
          <Appear><Text>a program well written shares the same qualities as a story well told</Text></Appear>
        </Slide>

        <Slide>
          <Heading>placeholder: code examples</Heading>
        </Slide>

        <Slide bgImage={images.gitBlame} bgDarken={0.75}>
          <Image src={images.gitBlame} />
        </Slide>

        <Slide>
          <Text><b>designers</b> should learn to <b>code</b>?</Text>
          <Text><b>coders</b> should learn to <b>design?</b></Text>
          <Appear><Heading><b>coders:</b> learn to <b>write</b></Heading></Appear>
        </Slide>

        <Slide>
          <Heading>How can I start?</Heading>
        </Slide>

        <Slide>
          <Heading>Two modes of writing</Heading>
          <Appear><Text>Fast & Furious</Text></Appear>
          <Appear><Text>2 Summarise, 2 Categorise</Text></Appear>          
        </Slide>

        <Slide>
          <Heading>The TIL</Heading>
        </Slide>

        <Slide>
          <Heading>The 3 Fears</Heading>
          <Appear><Text>What If I'm Wrong?</Text></Appear>
          <Appear><Text>What If I'm Right?</Text></Appear>
          <Appear><Text>What If Nobody Cares?</Text></Appear>
        </Slide>

        <Slide>
          <Heading>placeholder: Knowledge repos</Heading>
        </Slide>

        <Slide>
          <Heading>.</Heading>
        </Slide>

        <Slide>
          <Heading>The WIP</Heading>
        </Slide>

        <Slide>
          <Heading>The 3 Fears Again</Heading>
          <Appear><Text>What If I'm Wrong?</Text></Appear>
          <Appear><Text>What If I'm Right?</Text></Appear>
          <Appear><Text>What If Nobody Cares?</Text></Appear>
        </Slide>

        <Slide>
          <Heading>Tip: journal channels</Heading>
        </Slide>

        <Slide>
          <Heading><em>The team that WIPs together ships together</em></Heading>
        </Slide>

        <Slide>
          <div style={{textAlign: 'left'}}>
            <Heading size={3}>1. Programming is a creative act</Heading>
            <Appear><Heading size={3}>2. A program is a story</Heading></Appear>
            <Appear><Heading size={3}>3. Leave a trail</Heading></Appear>
          </div>
        </Slide>

        <Slide>
          <Heading><em>Thanks CampJS!</em></Heading>
        </Slide>
      </Deck>

      <Footer />
    </div>
    );
  }
}
