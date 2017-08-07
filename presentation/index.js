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
  x: require('../assets/x.png'),
  diary: require('../assets/diary.jpg'),
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
  secondary: 'hsl(90, 10%, 10%)',
  tertiary: 'hsl(290, 30%, 10%)',
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
    font-size: 2rem
  `, 
  monospace
  ])
  return (
<Outer>
  <Inner>
    <b>@joshwnj</b> - 
    Dear Diary
  </Inner>
</Outer>
  )
}

const lights = {
  outer: cmz(`
  display: flex
  flex-direction: row
  margin-left: -4vw
`),

  group: cmz(`
  display: flex
  flex-direction: column
  margin-right: 2vw
  padding: 1vw
  background: #222
  border-radius: 2vw
`),

  circle: cmz(`
  border-radius: 50vw
  width: 6vw
  height: 6vw
  background-color: black
  margin-bottom: 1vw
`),

  c1: cmz(`
  background: rgb(208, 216, 70)
`),

  c2: cmz(`
  background: rgb(238, 239, 130)
`),

  c3: cmz(`
  background: rgb(183, 174, 139)
`),
}

export default class Presentation extends React.Component {
  render() {

    return (
    <div>
      <Deck progress='none' transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading>Dear Diary</Heading>

          <div style={{margin: '5vh auto', width: '9vw', height: '9vw', padding: '2vw', borderRadius: '10vw', background: 'white', overflow: 'hidden'}} >
            <Image src={images.x} style={{width: '100%'}} />
          </div>

          <Heading size={3}><em>Journal writing for programmers</em></Heading>

          <Notes>
            <ul>
              <li>We live in a time where sharing ideas...</li>
              <li>But ideas are funny things. Sometimes there's a bad idea...</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <div className={cmz(['display: flex', 'text-align: left'])}>
            {/*
            <Image src={images.traffic} style={{maxHeight: '90vh', marginLeft: '-8vw', marginTop: '-5vh', marginRight: '5vw'}} />
            */}

            <div className={lights.outer}>
              <div className={lights.group}>
                <div className={lights.circle} style={{background: 'red'}} />
                <div className={lights.circle} style={{background: 'orange'}} />
                <div className={lights.circle} style={{background: 'limegreen'}} />
              </div>

              <div className={lights.group}>
                <div className={lights.circle + ' ' + lights.c1} />
                <div className={lights.circle + ' ' + lights.c2} />
                <div className={lights.circle + ' ' + lights.c3} />
              </div>
            </div>

            <Heading size={3}>Bad ideas can gain widespread adoption</Heading>
          </div>
        </Slide>

        <Slide>
          <div className={cmz(['display: flex', 'text-align: left'])}>
            <Image src={images.ancientSpinner} style={{maxHeight: '90vh', marginLeft: '-16vw', marginTop: '-7vh', marginRight: '5vw'}} />
            <Heading size={3}>Good ideas can come before their time</Heading>
          </div>

          <Notes>
            <ul>
              <li>So we're surrounded by ideas ... until you've spent some time taking them for a spin.</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="tertiary">
          <Heading textColor="primary"><em>&ldquo;I'll read that later&rdquo;</em></Heading>
        </Slide>

        <Slide bgImage={images.tabs} bgDarken={0.1}>
        </Slide>

        <Slide>
          <Heading>Keeping Up</Heading>
          
          <Notes>
            <ul>
              <li>It's fantastic there are so many people coming up with ideas...</li>
              <li>But the sheer volume...</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgImage={images.fireman}>
        </Slide>

        <Slide bgColor="tertiary">
          <BlockQuote>
            <Quote textColor="primary" style={{fontSize: '4rem'}}>there is increased evidence that we are being bogged down today as specialization extends. </Quote>
          </BlockQuote>
        </Slide>

        <Slide bgColor="tertiary">
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

          <Notes>
            <ul>
              <li>When he wrote this, he was part of an international team of physicists...</li>
              <li>So even back then he saw the beginning of this information explosion...</li>
              <li>He wrote about the bitter-sweetness of his experience, Like...</li>
            </ul>
          </Notes>

        </Slide>

        <Slide bgImage={images.swords} style={{ backgroundPosition: 'center bottom' }}>
          <Notes>
            <ul>
              <li>In the midst of the horror and destruction of war...</li>
              <li>But even back then he knew that it wouldn't be enough...</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgImage={images.memex}>
          <Notes>
            <ul>
              <li>At its heart, the memex is a story-telling device. The user of the memex...</li>
              <li>I wonder, what do you think programming is? Is it more of a creative activity, or... ?</li>
            </ul>
          </Notes>
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

          <Notes>
            <ul>
              <li>Get Creative... I would even go so far as to say that programming is a form of creative writing</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>You can make anything by writing</Quote>
            <Cite textColor="quarternary">C. S. Lewis</Cite>
          </BlockQuote>

          <Notes>
            <ul>
              <li>You can make anything, because words are a primary...</li>
              <li>To get the truth, you need both...</li>
            </ul>
          </Notes>
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
              lang="jsx"
              source={require("raw-loader!./example-1")}
              margin="20px auto" />

          </div>
          </Fill>
        </Slide>

        <Slide>
          <Fill>
          <div style={{display: 'flex'}}>
            
            <CodePane
              style={{fontSize: '2rem', marginLeft: '-20vw', marginRight: '2vw'}}
              lang="jsx"
              source={require("raw-loader!./example-1")}
              margin="20px auto" />

              <CodePane
                style={{fontSize: '2rem'}}
                lang="jsx"
                source={require("raw-loader!./example-2")}
                margin="20px auto" />
          </div>
          </Fill>

          <Notes>
            <ul>
              <li>We really notice this when it's missing. Have you ever...</li>
            </ul>
          </Notes>
        </Slide>

        <Slide bgColor="tertiary">
          <Image src={images.gitBlame} style={{width: '100%'}} />
        </Slide>

        <Slide>
          <Text><b>designers</b> should learn to <b>code</b>?</Text>
          <Text><b>coders</b> should learn to <b>design?</b></Text>
          <Appear><div>
            <Heading>~</Heading>
            <Heading><em><b>coders:</b> learn to <b>write</b></em></Heading>
          </div></Appear>
        </Slide>
        <Slide style={{backgroundColor: 'rgb(240, 225, 195)'}}>
          <Heading style={{marginTop: '-15vh'}}>Getting started</Heading>
          <Image src={images.diary} style={{width: '100%'}} />

          <Notes>
            <ul>
              <li>I'm trying to record that journey of all the small decisions and directions...</li>
              <li>I have a few preferences of tools...</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Heading>Two modes of writing</Heading>
          <Heading>~</Heading>
          <Appear><Heading size={4}>Fast & Furious</Heading></Appear>
          <Appear><Heading size={4}>2 Summarise, 2 Categorise</Heading></Appear>          

          <Notes>
            <ul>
              <li>Anyway, you'll have your own fave apps, tools, whatever. But regardless of technology, there are a few techniques...</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Heading>TIL</Heading>

          <Notes>
            <ul>
              <li>You'll benefit from it either way, but I want to encourage you...</li>
              <li>Does that sound scary?</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Heading>The 3 Fears</Heading>
          <Heading>~</Heading>
          <Appear><Heading size={4}>What If I'm Wrong?</Heading></Appear>
          <Appear><Heading size={4}>What If I'm Right?</Heading></Appear>
          <Appear><Heading size={4}>What If Nobody Cares?</Heading></Appear>

          <Notes>
            <ul>
              <li>Right: here's the catch22...</li>
            </ul>
          </Notes>

        </Slide>

        <Slide bgImage={images.knowledge} />

        <Slide>
          <Notes>
            <ul>
              <li>I mentioned before about Memex trails, and the idea of being able to follow in someone else's footsteps/. I find it interesting that many of our formal collaborative...</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Heading>WIP</Heading>
          
          <Notes>
            <ul>
              <li>If you say "I tried these 3 different approaches..."</li>
              <li>Why don't we do this more? Again, similar reasons as before...</li>
            </ul>
          </Notes>

        </Slide>

        <Slide>
          <Heading>The 3 Fears (Again)</Heading>
          <Heading>~</Heading>
          <Appear><Heading size={4}>What If I'm Wrong?</Heading></Appear>
          <Appear><Heading size={4}>What If I'm Right?</Heading></Appear>
          <Appear><Heading size={4}>What If Nobody Cares?</Heading></Appear>

          <Notes>
            <ul>
              <li>Be humble, and thank the person.... at very least, you've shown your team...</li>
              <li>Don't worry too much when you hear this person. They are small-minded, short-sighted...</li>
              <li>Now this one actually is a valid concern... Here's how we do it at X-Team</li>
            </ul>
          </Notes>

        </Slide>

        <Slide>
          <Heading>Tip: journal channels</Heading>

          <Notes>
            <ul>
              <li>Think about how you can leave a trail for your team mates to follow. Because remember:</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Heading><em>&ldquo;The team that WIPs together ships together&rdquo;</em></Heading>

          <Notes>
            <ul>
              <li>There are many other techniques like this, I won't go into them all here. But I'll be happy to talk more later...</li>
            </ul>
          </Notes>
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

          <Notes>
            <ul>
              <li>Programming is a creative form that overlaps many principles...</li>
              <li>So I encourage you to look for ways to write creatively...</li>
              <li>Most of all, just start writing...</li>
              <li>All it takes is one person to start...</li>
            </ul>
          </Notes>
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
