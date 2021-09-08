# NoSQL

SQL이 아닌 모든 것, 관계가 없는(SQL의 가장 큰 특징인 관계형 데이터베이스) 데이터베이스

## 특징

1. Don't have rigid, strict schema(schema-less)
2. Non-relational, hence cluster-friendly
3. Address specific problems or use cases

용도에 따라 다르게 저장된다.
- Key-Value 형식
- Document 형식
- Wide-column 형식
- Graph 형식

## The most commonly used NoSQL DB in Web Dev

### mongoDB

***" Document Base 데이터 "***

- Prinmary unit of data is a **document**
- Documents organised in **collecitons**
- Document structure is not enforced by DB
- Each document is **self-contained**
- **Data duplication** instead of relation

## Most Popular NoSQL Databases

- cassandra, Cloud Bigtable : Wide Column
- neo4j : Graph
- Redis : Key-value
- mongoDB : Document
- DynamoDB : Key-value

# ORM

Object Relational Mapping

데이터베이스를 잘 몰라도 코드상으로 모든 것을 해줄 수 있게 해주는 것이 ORM 이다.
즉, 데이터베이스를 한단계 더 감싸서 개발자가 사용하기 쉽게 API를 제공해주는 것이다.

## 장점

- More Focus on Business Logic 비지니스 로직에 초점을 두고 개발 할 수 있다.
- No Boilerplate code 반복되는 쿼리 줄이기
- Database Abstraction 데이터베이스가 달라도 코드가 바뀌지 않는다.(단, 해당 데이터베이스를 지원시)
- Schema migraion 시키마, 코드가 변경될때 자동으로 처리해주는 마이그레이션 지원

## 단점

- 복잡한 쿼리작성 필요시 ORM에서 제공해주는 API로는 상세한 쿼리를 작성할 수 없다. (그래서 SQL을 직접 작성할 수 있게 지원해줌)
- 메모리 최적화, 성능이 순수 SQL를 작성하는 것보다 안좋을 수 있다.

## Some of the Great ORMS of the JavaScript world

- TYPEORM
- Sequelize
- Prisma

# ODM

Object Document Mapper

### mongoose

> elegant mongodb object modeling for node.js

using in **mongoDB**

# SQL vs NoSQL

- comparison table

|comparison|SQL|NoSQL|
|---|:---:|:---:|
|Getting Started|Medium|Easy|
|Data structure|Rigid/Fixed|undefined/Flexible|
|Data lookup|Easy|Easy|
|Aggregate Queries|Easy|Difficult|
|Slicing & Dicing Data|Easy|Difficult|
|Scaling for High Input|Difficult|Easy|
|Running cost|Costly|Cheap|

## How to choose ?

1. The type of data in question 데이터 타입
2. The amount of data 데이터의 양
3. How data will be queried? 각각의 데이터들이 서로 관계가 있는지?