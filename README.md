# API Doc

API Doc creates API Documentation written in OpenAPI Specification (OAS).

## Getting started

Initialize the project

```shell
mkdir tmp
cd tmp
npm init -y
npm install @anli/api-doc
npx api-doc-init
```

Create the passphrase in the `.env` file

```shell
echo "PASSWORD=your-password" >> .env
```

Update `src/index.html` and/or `src/open-api.yaml` accordingly

Build the documentation

```
npx api-doc
```

View the documentation

```
open dist/index.html
```

## Features

- Generate API Documentation from `.yaml` file
- View with SwaggerUI
- Protected with AES-256 encryption passphrase

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.

## Links

## Licensing

The code in this project is licensed under MIT license.
