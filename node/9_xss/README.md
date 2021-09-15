# XSS Attack

### Desctiption

XSS: Cross-Site Scripting Attack

> Cross-Site Scripting (XSS) attacks are a **type of injection**, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attackers uses a web application to send malicious code, generally in the form of a browser side script, to different end user. Flaws that allow these attacks to succedd are quite widespread and occur anywhere a web application uses input from a use within the output it generates without validating or encoding it.
> 
> 참고: https://nodegoat.herokuapp.com/tutorial/a3

### Common questions about cross-site scripting

**How common are XSS vulnerabilities?**  
XSS vulnerabilities are very common, and XSS is probably the most frequently occurring web security vulnerability.

**How common are XSS attacks?**  
It is difficult to get reliable data about real-world XSS attacks, but is probably less frequently exploited than other vulnerabilities.


### Attack Mechanics

There are two types of XSS flaws:

1. Reflected XSS: The malicious data is echoed back by the server in an immediate response to an HTTP request from the victim.
2. Stored XSS: The malicious data is stored on the server or on browser (using HTML5 local storage, for example), and later gets embedded in HTML page provided to the victim.

Each of reflected and stored XSS can occur on the server or on the client (which is also known as DOM based XSS), depending on when the malicious data gets injected in HTML markup.


## Options

### In memory?

|About|Result|
|:---:|:---:|
|Secure|**GOOD**|
|Easy to implement|**GOOD**|
|UX (unless you are building an online banking)|**BAD**|

### Cookie?

**HttpOnly !**

|About|Result|
|:---:|:---:|
|Not accessible to javascript running on your website|**GOOD**, **Secure!**|
|Remains available until expire (maintain logged in state between page reloads)|**GOOD**|
|REST APIs don't normally use cookies|**BAD**|
|Susceptible to CSRF attack|**BAD**|

