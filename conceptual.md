### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  - JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

  The JWT token itself is a string comprising three parts:

  - Header: metadata about token (signing algorithm used & type of token)
  - Payload: data to be stored in token (typically an object)
  - Signature: version of header & payload, signed with secret key

- What is the signature portion of the JWT? What does it do?

  - The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. To create the signature, the Base64-encoded header and payload are taken, along with a secret, and signed with the algorithm specified in the header.

- If a JWT is intercepted, can the attacker see what's inside the payload?
- Yes the attacker can see all the information inside the payload because of which it is advised not to hold sensitive information inside it.

- How can you implement authentication with a JWT? Describe how it works at a high level.

  - User logs in with username and password
  - If credentials are correct, server creates a signed JWT which says who the user is.
  - User wants to access home page
  - Verify the JWT signature is valid, if true, grant access.

- Compare and contrast unit, integration and end-to-end tests.

  - Unit Testing:
    Unit testing is a type of testing to check if the small piece of code is doing what it is suppose to do.
    Unit testing checks a single component of an application.
    The scope of Unit testing is narrow, it covers the Unit or small piece of code under test. Therefore while writing a unit test shorter codes are used that target just a single class.
  - Integration Testing:
    Integration testing is a type of testing to check if different pieces of the modules are working together.
    The behavior of integration modules is considered in the Integration testing.
    The scope of Integration testing is wide, it covers the whole application under test and it requires much more effort to put together.

- What is a mock? What are some things you would mock?

- Mock testing is an approach to unit testing that lets you make assertions about how the code under test is interacting with other system modules. In mock testing, the dependencies are replaced with objects that simulate the behaviour of the real ones.

- What is continuous integration?

  - Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.

- What is an environment variable and what are they used for?

  - Environment variables are local machine set variables that only the application can read. They are used to keep things like IDS, SECRET_KEYS, API KEYS private to avoid being compromised.

- What is TDD? What are some benefits and drawbacks?

  - Test driven development is the practice of making the tests first in a project. Then you work to make each tests pass, and then iterate the business logic on top of that.
    Advantages of TDD :
    You only write code that’s needed
    More modular design
    Easier to maintain
    Easier to refactor
    High test coverage
    Tests document the code
    Less debugging

    Disadvantages of TDD :
    No silver bullet
    slow process
    All the members of a team got to do it
    Tests got to be maintained when requirements change

- What is the value of using JSONSchema for validation?

  - JSONSchema helps us validate incoming data that might not be from a form. It helps to make sure no bad data, malicious data, or incomplete data is sent on a request that we might not be able to check on the client-side.

- What are some ways to decide which code to test?

  - Any code that creates side-effects, or has a key role in data manipulation.

- What are some differences between Web Sockets and HTTP?

  - Web sockets keep the connection open between the server and the client, allowing for continous communication. HTTP is a handshake, in which a client passes information, the server then acknolowdges it, and either denys/accepts it. The server then responds, and the client receives it. No connection is kept open.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  - I like flask's simplicity. Flask is easy to set up and run right away. However, for more complex applications, I'd use Express, due to its robust features,modularity in router, middleware, and application structure.
