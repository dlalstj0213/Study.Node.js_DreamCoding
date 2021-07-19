## 목차

- [HTTP](#http)
- [Status Codes](#status-codes)
    - [1xx : Informational](#1xx--informational)
    - [2xx : Successful](#2xx--successful)
    - [3xx : Redirection](#3xx--redirection)
    - [4xx : Client error](#4xx--client-error)
    - [5xx : Server error](#5xx--server-error)
- [Request Methods](#request-methods)
  - [GET](#get)
  - [POST](#post)
  - [PUT, DELETE, PATCH](#put-delete-patch)
  - [HEAD, OPTIONS, TRACE](#head-options-trace)
  - [서버의 데이터를 읽기만 하는 Methods](#서버의-데이터를-읽기만-하는-methods)
  - [서버의 데이터를 변경하는 Methods](#서버의-데이터를-변경하는-methods)
  - [HTTP Method 상세 보기](#http-method-상세-보기)
- [Headers](#headers)

# HTTP

- Hypertext Transfer Protocol
  - request-response protocol

# Status Codes

> https://developer.mozilla.org/ko/docs/Web/HTTP/Status

### 1xx : Informational

|codes|status|
|---|---|
|100|Continue|
|102|Processing|

### 2xx : Successful

|codes|status|
|---|---|
|200|OK|
|201|Created|
|204|No Content|

### 3xx : Redirection

|codes|status|
|---|---|
|301|Moved Permanently|
|302|Found|
|303|See Other(get)|
|307|Temporary Redirect(same methods)|
|308|Permanent REdirect(same methods)|

### 4xx : Client error

|codes|status|
|---|---|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden(admin)|
|404|Not Found|
|405|Method Not Allowed|
|409|Conflict|

### 5xx : Server error

|codes|status|
|---|---|
|500|Internal Server Error|
|502|Bad Gateway|
|503|Service Unavailable|

# Request Methods

## GET 

- `GET` : get
- **status codes use**
  - `201`
  - `401`, `403`, `404`, `405`, ...

## POST

- `POST` : create
- **status codes use**
  - `201`
  - `401`, `403`, `404`, `409`, ...

## PUT, DELETE, PATCH

- `PUT` : replace
- `DELETE` : delete
- `PATCH` : replace partially
- **status codes use**
  - `200`, `204`
  - `403`, `404`, `405`, ...

## HEAD, OPTIONS, TRACE

- `HEAD` : get without body
- `OPTIONS` : all supported methods for URL
- `TRACE` : echoes the received request
- **status codes use**
  - `200`
  - `401`, `403`, `404`, `405`, ...

## 서버의 데이터를 읽기만 하는 Methods

- `GET`, `HEAD`, `OPTIONS`, `TRACE`

## 서버의 데이터를 변경하는 Methods 

- `POST`, `PUT`, `DELETE`, `PATCH`

## HTTP Method 상세 보기

- [HTTP Method ( Spring repository from dlalstj0213 )](https://github.com/dlalstj0213/Study.Spring/tree/main/1_web#http-method)
- https://developer.mozilla.org/ko/docs/Web/HTTP/Methods

# Headers

- https://developer.mozilla.org/ko/docs/Web/HTTP/Headers