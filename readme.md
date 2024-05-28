# Green Spaces Strategy Development Backend

Tech stack:

- Express (JavaScript + TypeScript)
- MongoDB
- Mongoose as Object Data Modeling library

## How to use

Launches on port 3000 by default unless instructed otherwise. Skeleton Rest API has two GET endpoints:

- `/api/districts`, returns an array of GeoJSON Features containing shapes for admin borders
- `/api/green-areas`, returns an array of GeoJSON Features containing shapes for green areas

<!-- ### Access to api DOCS by link:

/api/api-docs -->

## Build docker image

```bash
docker build -t green-spaces-backend:v1 .
```

The command builds a Docker image with the name `green-spaces-backend` and tag `v1`.

## Run docker container

```bash
cp .env.template .env
```

Specify the environment variables in the `.env` file. Then run locally the following command:

```bash
docker run -p 3000:3000 --env-file=.env green-spaces-backend:v1
```
