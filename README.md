### Mcdonalds API
I wanted to make an API to build some frontend apps with, and I thought it would be fun to mimic the Mcdonalds website. The first step was to build the API, so here it is. 

![Image](https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg)

### Base URL 
https://mcdonalds-api.cyclic.app

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/products | Get all products |
| GET | /api/v1/products/:category | Get products by category (breakfast, burgers, happy-meal, chicken-fish, nuggets) |
| GET | /api/v1/products/:id | Get specific product|
| POST | /api/v1/new-product | Create a new product |
| PUT | /api/v1/products/:id/edit-product | Update specific product |
| DELETE | /api/v1/products/:id/remove-product | Delete specific product |