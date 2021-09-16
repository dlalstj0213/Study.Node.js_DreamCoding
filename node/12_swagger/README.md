# Swagger

**Domain Specific Language :**  
to describe RESTful API

**Swagger Tools :**  
Swagger **Editor**  
Swagger **Codegen**  
Swagger **UI**

https://swagger.io/

https://www.openapis.org/

## Why Swagger?

- How to model RESTful API? => Swagger Editor
- How to Document RESTful API? => Swagger UI
- How to keep code and docs in sync? => Swagger Codegen
- How to make API adoption easy? => Swagger Codegen

## Swagger Editor

https://swagger.io/tools/swagger-editor/

example: [dwitter-swagger.yaml](./dwitter-swagger.yaml)

# Approaches to OpenAPI

프로젝트를 진행하는 두 가지 방법

### Code First

Code First a.k.a "bottoms up" :
- "Traditional" approach to API development
- API definition is generated from the source code

Advantages :
- Faster API implementation
- Good starting point for existing projects

Disadvantages :
- API definition is scattered across the code
- Focuses on the implementation not API design

Package :

    Useful for Node + npm :
      swagger-jsdoc + swagger-ui=express

### Design First

Design First a.k.a "top down"
- Relatively new approach to API development
- API definition document is the single source of truth

Advantages :
- API definition is one source of truth
- Early collaboration and feedback
- Focus on API design yields better APIs

Disadvantages :
- Takes longer to develop and deliver the API

Codegen :

    openapi-generator
      - No clear separation between generated code and hand-written handlers
      - cannot selectivley use individual parts (validator, router)

Middleware :

    npm : express-openapi-validator
      - Express middleware
      - Validates request parameters and responses
      - Includes costomisable router