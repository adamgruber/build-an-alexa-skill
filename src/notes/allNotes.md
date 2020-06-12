
- how many people own an alexa enabled device (echo) ?
- has anyone here ever thought about making their own skill?
- anyone done it?

----------------------
----------------------
  WHY BUILD A SKILL
----------------------
----------------------

- Humans have always wanted to talk to machines
- IBM Shoebox (1961), recognized 16 words, did simple arithmetic
- Hasn't always worked out in the movies, tech today is better than ever
- Tools available make it super easy to do

----------------------
----------------------
  WHAT SKILLS CAN WE BUILD
----------------------
----------------------

- control lights and appliances
- fun facts, choose your own adventure, trivia
- educational references, learning apps
- skills that control music or video playback
- connect customers with your brand or product

- and fart skills

----------------------
----------------------
  WHAT TOOLS DO WE USE
----------------------
----------------------

- blueprints (fill in the blanks)
- ask sdk (this demo)
- wysiwyg editor (storyline)


- we'll go through steps to create simple skill
- provide basic understanding

----------------------
----------------------
  SKILL SCREENSHOT
----------------------
----------------------

- describe the skill
- card response (echo show)

----------------------
----------------------
  WHAT YOU'LL NEED
----------------------
----------------------

- amazon developer account
- internet-accessible endpoint (lambda)
- lambda supports node, java, python, c#
- public asset hosting (S3)
- testing device or simulator

----------------------
----------------------
  Voice User Interface
----------------------
----------------------

- plan out the vui / how users will interact
- flow diagram shows user requests and possible outcomes

----------------------
----------------------
  CREATING THE SKILL
----------------------
----------------------

1. log into amazon alexa console and create a new skill
2. give it a name
3. choose a model (custom)
4. pick an invocation name (how users launch and interact)
5. create / add intents
6. save and build (show unique id)

----------------------
----------------------
  TESTING THE SKILL
----------------------
----------------------

- simple alexa request json
- could mock out but they're kinda gnarly
- what happens if api changes?
- hosting on lambda is fine but testing workflow not ideal

-------------------------

- what if we could just interact with alexa as a user would?
- make a request ==> handle it via local dev ==> return a response

-------------------------

- works with an intermediate (ngrok)

----------------------
----------------------
  WRITING THE CODE
----------------------
----------------------

- do the thing
