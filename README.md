# clow-cards-reading

API for clow cards fortune reading (TypeScript + NodeJs)

WIP Self-Study
Part 1 of 3 (MERN FullStack app)

## Libraries used so far

- Express
- typegoose
- mongoose
- jest
- typescript

## Endpoint description

**GET** ➡️ `/api/clow-cards/`

![build status](https://img.shields.io/badge/status-200-green)

| name | description | type |
|------|-------------|------|
|msg|API status|string|
|result|A list of named API resources|`card` array|
|count|Total number of elements from the list|number|

**GET** ➡️ `/api/clow-cards/{id}`

![http status](https://img.shields.io/badge/status-200-green)

| name | description | type |
|------|-------------|------|
|msg|API status|string|
|result|Single element by it id|`card` object|

![http status](https://img.shields.io/badge/status-404-red)

| name | description | type |
|------|-------------|------|
|msg|API status|string|
