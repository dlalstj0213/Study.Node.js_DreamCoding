## 목차

- [인증 Authentication](#인증-authentication)
- [Session & Cookies](#session--cookies)
  - [인증 과정](#인증-과정)
  - [단점](#단점)
- [JWT](#jwt)
  - [구조](#구조)
  - [인증 과정](#인증-과정-1)
  - [장점](#장점)
  - [단점](#단점-1)
  - [NodeJS JWT 패키지](#nodejs-jwt-패키지)
  - [JWT 사용 예제](#jwt-사용-예제)
- [bcrypt](#bcrypt)
  - [NodeJS bcrypt 패키지](#nodejs-bcrypt-패키지)
  - [bcrypt 사용 예제](#bcrypt-사용-예제)

# 인증 Authentication

웹개발을 하게되면 인증 부분은 빼놓을 수 없는 개념 중 하나이다.  
인증은 다양한 서비스에서 사용되지만 대표적으로 로그인 서비스에서 주로 사용되고,  
인증하는 방식 또한 다양하게 사용된다. 요즘은 기술의 발전으로 홍채인식, 페이스인식, 지문인식 등으로  
사용자를 인증하여 로그인하거나 해당 서비스에 접근 권한을 얻는 등 활용된다.  

# Session & Cookies

사용자 세션(User Session)을 서버에 보관하는 방법

## 인증 과정

![](../../images/session_cookies.png)

## 단점

이 방식은 서버에 별도의 Session 상태(State)를 둬야하기 때문에  
분산형 시스템으로 설계를 잘 했음에도 불구하고 Client의 요청에 대해 현재 Session 정보를  
확인해야하는 내부적으로 많은 네트워크 요청을 해야함으로 성능 저하가 발생한다.

# JWT

Session과 Cookies를 대체할 수 있는 JWT(Jsom Web Token) 방식이다.  
즉, JSON을 이용해서 웹 토큰을 주고 받는 것을 말한다.

## 구조

- **Header**: 사용하는 알고리즘과 타입에 대한 정보가 명시되어있다.
```json
# 예시
{
  "alg":"HS256",
  "typ":"JWT"
}
```
- **Payload**: 전송하거나 주고 받고 싶은 다양한 데이터들이 명시되어있다. (인코딩 되어짐)
```json
# 예시
{
  "loggedInAs": "admin",
  "iat": 142255343
}
```
- **signature**: 인코딩된 헤더, 페이로드와 함께 시크릿키가 명시되어있다.
```json
# 예시
HMAC-SHA256(
  secret, base64urlEncoding(header) + '.'
  + base64urlEncoding(payload)
)
```

## 인증 과정

![](../../images/using_jwt.png)

## 장점

서버에 별도의 Session 상태(State)를 두지 않기 때문에  
서버를 확장하거나 마이크로서비스를 이용하거나, 또는 분산형 시스템으로 만들시 동일한 시크릿키만 가지고 있다면  
서로 사용자 검증을 위한 네트워크 요청을 하지 않아도 된다.

## 단점

JWT 자체가 단점일 수 있는데, 그 이유는 클라이언트가 요청을 할때 항상 JWT를 포함시켜서 요청을 하는데  
만약, 영원히 만료되지 않는 JWT를 사용시 해커에게 노출된다면 만료되지 않은 JWT 때문에 보안상 문제가 생긴다.  
그렇게 때문에 JWT를 설계할시 보안에 대해 많이 신경써서 사용해야한다.

## NodeJS JWT 패키지

```bash
npm view jsonwebtoken
npm i jsonwebtoken
```

## JWT 사용 예제

- [JWT 사용 예제 1](./jwt.js)
- [JWT 사용 예제 2](./jwt_expire.js)
- [임의의 Token 만들기 URL](https://www.lastpass.com/features/password-generator)
  - 권고 사이즈 password length : 32
- [토큰 해독 URL](https://jwt.io/)

# bcrypt

- password-hasing function

bcrypt란 패스워드 같은 중요 정보를 해싱하여 보관하는 알고리즘을 말한다.

bcrypt된 해싱 정보를 간단히 분석하면 다음과 같다.

    Alg|Cost|Salt|Hash

- Alg: 어떠한 알고리즘을 사용하는지의 대한 부분
- Cost: 어느정도의 복잡도를 사용하는지의 암호화 비용에 대한 정보 부분
- Salt (base64-encoded): 원하는 길이만큼의 더 랜덤한 값으로 복잡한 암호화 부분
- Hash (base64-encoded): 앞의 모든 암호화 정보 값들이 모아져 있는 부분

이러한 암호화 부분도 완벽하게 해커의 공격헤 대해서 완벽하게 막아내지 못한다.  
단, 이 암호를 통해서 해독하는 데에는 몇 십년이 걸리게 만들 수 있기 때문에 완벽하지는 않지만 보다 안전하다고 볼 수 있다.

**bcrypt 사용시 주의할 점**은 Salt의 길이를 설정시 너무 지나치게 긴 길이를 설정하게 되면 그만큼 시간이 오래 걸린다.  
즉, 암호화를 계산하는데 걸리는 시간을 말하는 것으로 암호화 계산하는 것은 CPU가 처리하므로 CPU 부하가 쉽게 걸린다.  
그렇기 때문에 무작정 암호화 길이를 길게 설정하는 것은 좋지 않다. (추천: 8~10, 8~12, 10~15)  

자세한 내용은 아래의 링크에서 확인할 수 있다.

- [https://auth0.com/blog/hashing-in-action-understanding-bcrypt/](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/)

## NodeJS bcrypt 패키지

```bash
$ npm view bcrypt
$ npm i bcrypt
```

## bcrypt 사용 예제

- [bcrypt 사용 예제](./bcrypt.js)

