// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// AWeber Brand Colors
import brandColors from './brand-colors';

import {
  alexaRequestJson,
  echoWhite,
  room,
  skillScreenshot,
  testDiagram1,
  testDiagram2,
  twitter,
  vuiDiagram,
} from './images';

import {
  introNotes,
  prereqNotes,
  vuiNotes,
  askConsoleNotes,
  testIntroNotes,
  tunnelNotes,
} from './notes';

// Require CSS
require('normalize.css');
require('./preso.css');

// Define theme
const theme = createTheme(Object.assign({
  primary: "#fff", //white
  secondary: "#505e67", // green
  tertiary: "#00b478", // gray
  quarternary: "#2e7ad1", // blue
}, brandColors), {
  primary: {name: "Source Sans Pro", googleFont: true },
  secondary: { name: "Bree Serif", googleFont: true },
  hand: {name: "Caveat Brush", googleFont: true },
});

const boxShadow = '0 0 6px rgba(0,0,0,.16), 0 6px 12px rgba(0,0,0,.32)';

// Add JSON syntax highlighting
window.Prism.languages.json={property:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,punctuation:/[{}[\]);,]/,operator:/:/g,"boolean":/\b(?:true|false)\b/i,"null":/\bnull\b/i}; // eslint-disable-line

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar">

        {
          /**
           * TITLE / INTRO
           */
        }

        <Slide
          align="flex-start"
          transition={['zoom']}
          bgColor="primary"
          bgImage={echoWhite}
          bgRepeat="no-repeat"
          bgSize="75vh"
          bgPosition="center 25vh"
          notes={introNotes}>
          <Heading margin="25vh 0 0 0" size={1} fit textColor="quarternary">
            How to Build an Alexa Skill
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            (in about 20 minutes)
          </Text>
        </Slide>

        <Slide bgColor="quarternary" notes={introNotes}>
          <Image src={skillScreenshot} style={{boxShadow}}/>
        </Slide>

        <Slide bgColor="secondary" textColor="primary" notes={prereqNotes}>
          <Heading size={2} margin="-5vh 0 10vh 0" textColor="primary">
            What You’ll Need
          </Heading>
          <List>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Amazon Developer Account</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Endpoint (Lambda / HTTPS Service)</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Node.js / Java / Python / C#</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Public Host for Assets</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Testing Device</ListItem>
          </List>
        </Slide>

        {
          /**
           * VOICE USER INTERFACE
           */
        }

        <Slide transition={['fade']} bgImage={room} bgDarken={0.3} notes={vuiNotes}>
          <Image src={vuiDiagram} />
        </Slide>

        {
          /**
           * SKILL CREATION (AMAZON CONSOLE)
           */
        }

        <Slide bgColor="secondary" textColor="primary" notes={askConsoleNotes}>
          <Heading size={2} margin="-5vh 0 10vh 0" textColor="primary">
            Creating the Skill
          </Heading>
          <List>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Choose a Name</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Pick the Type</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Define the Invocation</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Add Intents</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Save and Build the Model</ListItem>
          </List>
        </Slide>

        {
          /**
           * BEGIN CODING SECTION
           */
        }

        <Slide bgColor="secondary" textColor="primary" notes={askConsoleNotes}>
          <Heading size={2} margin="-5vh 0 10vh 0" textColor="primary">
            Writing the Code
          </Heading>
          <List>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Start with a Boilerplate</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Write the Intent Handler</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Define the Skill</ListItem>
          </List>
        </Slide>

        {
          /**
           * TESTING
           */
        }

        <Slide bgColor="#ccc" className="fullscreen" transition={['slide']} notes={testIntroNotes}>
          <Image src={alexaRequestJson} style={{maxWidth: '40%'}} />
        </Slide>

        <Slide transition={['fade']} bgImage={room} bgDarken={0.3} notes={testIntroNotes}>
          <Image src={testDiagram1} />
        </Slide>

        <Slide transition={['fade']} bgImage={room} bgDarken={0.3} notes={testIntroNotes}>
          <Image src={testDiagram2} />
        </Slide>

        <Slide bgColor="secondary" textColor="primary" notes={tunnelNotes}>
          <Heading size={2} margin="-5vh 0 10vh 0" textColor="primary">
            Testing End-to-End
          </Heading>
          <List>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Open a Tunnel</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Define the Endpoint</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Start the Development Server</ListItem>
            <ListItem textSize="3.2rem" margin="0 0 1.5rem 0">Test the Skill</ListItem>
          </List>
        </Slide>

        {
          /**
           * THANKS
           */
        }

        <Slide
          align="flex-start"
          transition={['zoom']}
          bgColor="primary">
          <Heading margin="25vh 0 10vh 0" size={1} textColor="quarternary" fit>
            Thank You!
          </Heading>
          <Text textColor="secondary" size={1} bold>adamg@aweber.com</Text>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            <Image src={twitter} style={{
                  display: 'inline-block',
                  width: '3.66rem',
                  position: 'relative',
                  top: '1.5rem',
                  margin: '0.5rem',
            }} />talknmime</Text>
        </Slide>

      </Deck>
    );
  }
}
