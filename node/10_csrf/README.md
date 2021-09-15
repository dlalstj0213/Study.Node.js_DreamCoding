# CSRF Attack

### Description 

CSRF: Cross-Site Request Forgery

> Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. With a little help of social engineering (such as sending a link cia email or chat), an attacker may trick the users of a web application into executing actions of the attacker's choosing.  
> [참고]: https://nodegoat.herokuapp.com/tutorial/a8

Also known as a "**session riding**" because the attacker executes hidden http request to a web server using a victim's authenticated session.

### Attack Mechanics

As browsers automatically send credentials like session cookies with HTTP requests to the server where cookies were received from, attackers can create malicious web pages which generate forged requests that are indistinguishable from legitimate ones.

## Solution

1. Make secure frontend
2. Make compatible backend