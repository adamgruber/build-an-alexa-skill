Here's the basic code for the skill

Bring in the SDK

Define our skill
&nbsp;&nbsp;&nbsp;&nbsp;- start with a standard skill
&nbsp;&nbsp;&nbsp;&nbsp;- add our request handlers (handler functions, will be called in order)
&nbsp;&nbsp;&nbsp;&nbsp;- add an error handler
&nbsp;&nbsp;&nbsp;&nbsp;- add the skill id (from alexa console)
&nbsp;&nbsp;&nbsp;&nbsp;- call create method (returns a Skill instance)

Call and return the `invoke` method passing event and context (this returns a promise resolves to response object)