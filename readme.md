# Green Spaces Strategy Development Backend

Tech stack:

- Express (JavaScript + TypeScript)
- MongoDB
- Mongoose as Object Data Modeling library

## How to use

Launches on port 3000 by default unless instructed otherwise. Skeleton Rest API has two GET endpoints:

- `/api/districts`, returns an array of JSON Features containing shapes for admin borders
- `/api/green-areas`, returns an array of JSON Features containing shapes for green areas

<!-- ### Access to api DOCS by link:

/api/api-docs -->

## Build docker image

```bash
docker build -t green-spaces-backend:v1 .
```

The command builds a Docker image with the name `green-spaces-backend` and tag `v1`.

## Run docker container

Copy the template for the environment variable files:

```bash
cp .env.template .env
```

Specify the environment variables in the `.env` file. Then run locally the following command:

```bash
docker run -p 3000:3000 --env-file=.env green-spaces-backend:v1
```

## Images in the GitHub Container Registry

The image is also available on GitHub Container Registry. You may find it [here](https://github.com/AnnaHuskova/gssd_back_end/pkgs/container/green-spaces-backend). Images are created automatically after each push, merge pull request. There are several tags available:

- `latest` — the latest version of the image
- `sha-<commit_sha>` — the image built from the specific commit
- `<branch_name>` — the image built from the specific branch
- `pr-<pull_request_number>` — the image built from the specific pull request (generates automatically after the pull request is merged)

To pull the image from the GitHub Container Registry, use the following command:

```shell
docker pull ghcr.io/annahuskova/green-spaces-backend:<tag>
```

To run the container with the image from the GitHub Container Registry, use the following command:

```shell
docker run -p 3000:3000 --env-file=.env ghcr.io/annahuskova/green-spaces-backend:<tag>
```
