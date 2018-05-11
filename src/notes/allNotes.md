
- how many people own an alexa enabled device (echo) ?
- has anyone here ever thought about making their own skill?
- anyone done it?

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
  WRITING THE CODE
----------------------
----------------------

- do the thing

----------------------
----------------------
  THOUGHTS ABOUT TESTING
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
  TESTING END TO END
----------------------
----------------------

- open tunnel
- define endpoint in console
- start dev server
- test skill