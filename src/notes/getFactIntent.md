Here's our intent handler

object with 2 methods: canHandle, handle

-------------------------

both methods receive "handlerInput" argument

RequestEnvelope
&nbsp;&nbsp;&nbsp;&nbsp;- entire request body sent to skill

ResponseBuilder
&nbsp;&nbsp;&nbsp;&nbsp;- helper function for building responses

-------------------------

AttributesManager
&nbsp;&nbsp;&nbsp;&nbsp;- request, session, and persistent attributes

ServiceClientFactory
&nbsp;&nbsp;&nbsp;&nbsp;- Constructs service clients capable of calling Alexa APIs

Context
&nbsp;&nbsp;&nbsp;&nbsp;- optional object passed in by the host container

-------------------------

canHandle
&nbsp;&nbsp;&nbsp;&nbsp;- should this handler process the incoming request?
&nbsp;&nbsp;&nbsp;&nbsp;- returns boolean

-------------------------

handle
&nbsp;&nbsp;&nbsp;&nbsp;- fn called when invoking the handler
&nbsp;&nbsp;&nbsp;&nbsp;- returns Response object or Promise that will resolve to Response
