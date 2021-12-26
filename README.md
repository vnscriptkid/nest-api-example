### 1. Introduction to NestJS | 00:03:55

### 2. Installing the NestJS CLI (command-line interface) | 00:01:28

- npm install -g @nestjs/cli -g
- nest g --help

### 3. Generating our first NestJS Application | 00:01:33

- nest new new-project

### 4. What's inside a NestJS Application | 00:04:05

### 5. Prerequisite: Install Insomnia | 00:00:30

### 6. Running NestJS in Development Mode | 00:01:07

### 7. Creating a Basic Controller | 00:04:53

- nest g controller coffees

### 8. Use Route Parameters | 00:02:06

- `@Get(':id')`

### 9. Handling Request Body / Payload | 00:01:49

- `@Body body`

### 10. Response Status Codes | 00:04:14

### 11. Handling Update and Delete Requests | 00:03:05

- `@Patch(':id')`
- `@Delete(':id')`

### 12. Implement Pagination with Query Parameters | 00:02:

- `Query() queryPagination`

### 13. Creating a Basic Service | 00:07:54

- `ng g service coffees`

### 14. Send User-Friendly Error Messages | 00:03:50

### 15. Encompass Business-Domain in Modules | 00:04:38

- `ng g module coffees`
- module has:
  - list of controllers it defines (controllers)
  - list of services it defines (providers)
  - list of imports
  - list of exports

### 16. Introduction to Data Transfer Objects | 00:06:30

- `ng g class coffees/dto/create-coffee.dto`

### 17. Validate Input Data with Data Transfer Objects | 00:07:25

- deps
  - `yarn add class-transformer`
  - `yarn add class-validator`

### 18. Handling Malicious Request Data | 00:02:10

- dep: `yarn add @nestjs/mapped-types`
- why? avoid duplication code

### 19. Auto-transform Payloads to DTO instances | 00:03:02

- data coming in from params or body is either string or literal object
- auto tranform data based on type annotation

```js
app.useGlobalPipes(
  new ValidationPipe({
    transform: true,
  }),
);
```

### 20. Before we Get Started | 00:00:47

### 21. Prerequisite: Install Docker | 00:02:10

### 22. Running PostgreSQL | 00:03:07

### 23. Introducing the TypeORM Module | 00:04:05

### 24. Creating a TypeORM Entity | 00:04:01

### 25. Using Repository to Access Database | 00:07:03

### 26. Create a Relation between two Entities | 00:06:15

### 27. Retrieve Entities with their Relations | 00:03:15

### 28. Using Cascading Inserts and Updates | 00:04:50

### 29. Adding Pagination | 00:04:56

### 30. Use Transactions | 00:05:34

### 31. Adding Indexes to Entities | 00:00:55

### 32. Setting up Migrations | 00:06:58

### 33. Understand Dependency Injection | 00:04:00

### 34. Control NestJS Module Encapsulation | 00:03:07

### 35. Diving Into Custom Providers | 00:01:18

### 36. Value based Providers | 00:00:57

### 37. Non-class-based Provider Tokens | 00:03:11

### 38. Class Providers | 00:01:04

### 39. Factory Providers | 00:02:21

### 40. Leverage Async Providers | 00:02:09

### 41. Create a Dynamic Module | 00:03:56

### 42. Control Providers Scope | 00:04:00

### 43. Diving Deeper Into Request-Scoped Providers | 00:03:24

### 44. Introducing the Config Module | 00:04:42

### 45. Custom Environment File Paths | 00:01:18

### 46. Schema Validation | 00:03:00

### 47. Using the Config Service | 00:02:20

### 48. Custom Configuration Files | 00:04:33

### 49. Configuration Namespaces and Partial Registration | 00:04:58

### 50. Asynchronously Configure Dynamic Modules | 00:03:09

### 51. Introducing More Building Blocks | 00:02:21

### 52. Understanding Binding Techniques | 00:06:20

### 53. Catch Exceptions with Filters | 00:07:25

### 54. Protect Routes with Guards | 00:07:40

### 55. Using Metadata to Build Generic Guards or Interceptors | 00:10:06

### 56. Add Pointcuts with Interceptors | 00:07:02

### 57. Handling Timeouts with Interceptors | 00:04:03

### 58. Creating Custom Pipes | 00:05:49

### 59. Bonus: Add Request Logging with Middleware | 00:06:16

### 60. Bonus: Create Custom Param Decorators | 00:03:50

### 61. Introducing the Swagger Module | 00:03:45

### 62. Enabling CLI Plugin | 00:03:43

### 63. Decorating Model Properties | 00:01:21

### 64. Adding Example Responses | 00:02:04

### 65. Using Tags to Group Resources | 00:01:05

### 66. Introduction to Jest | 00:01:51

### 67. Getting Started with Test Suites | 00:08:45

### 68. Adding Unit Tests | 00:07:44

### 69. Diving Into e2e Tests | 00:06:09

### 70. Creating our First e2e Test | 00:06:59

### 71. Implementing e2e Test Logic | 00:04:12

### 72. Before we Get Started | 00:00:44

### 73. Prerequisite: Install Docker | 00:02:32

### 74. Running MongoDB | 00:03:00

### 75. Introducing the Mongoose Module | 00:02:46

### 76. Creating a Mongoose Model | 00:04:52

### 77. Using a Mongoose Model to Access MongoDB | 00:08:42

### 78. Adding Pagination | 00:04:57

### 79. Use Transactions | 00:06:04

### 80. Adding Indexes to Schemas | 00:01:18
