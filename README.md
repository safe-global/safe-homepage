# Safe Homepage

![license](https://img.shields.io/github/license/safe-global/safe-homepage)
![release](https://img.shields.io/github/v/release/safe-global/safe-homepage)

## Editing content

The content for this website is stored in this repository in the [`/src/content`](/src/content) folder as JSON files for each page.

To more easily edit these content files, there's an inline editing tool built into the website.
You can access it by appending `#admin` to any page.

E.g.:
 * https://safe.global/#admin - the main page
 * https://safe.global/wallet#admin - the wallet page

When in this admin mode you can click on any text on the page and edit it. Even on buttons and links.

<img width="1067" alt="Screenshot 2023-06-28 at 09 12 37" src="https://github.com/safe-global/safe-homepage/assets/381895/41920dfa-3342-4134-a885-1300518ec434">

Once you edit a piece of text, a "Save edits" button will appear. Clicking on it will copy the content you've edited into your clipboard and take you to the corresponding JSON file on GitHub. There, you can paste the JSON into the GitHub editor and create a pull request from it.

<img width="1134" alt="Screenshot 2023-06-28 at 09 14 59" src="https://github.com/safe-global/safe-homepage/assets/381895/a4eb294a-480e-4c17-94b4-0ff366daa30f">

The PR will be then reviewed, merged and deployed by developers.

## Getting started with development

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

We use [yarn](https://yarnpkg.com) in our infrastructure, so we decided to go with yarn in the README.
Please install yarn globally if you haven't already.

### Installing and running

Install dependencies for the project:

```
yarn install
```

To launch the dev version of the app locally:

```
yarn start
```

### Building

To get a complete bundle use:

```
yarn build
```

### Contentful Type Generation

1. Create a Perstonal Access Token in your contentful account
  - [Account Settings > CMA tokens](https://app.contentful.com/account/profile/cma_tokens)
2. Set the PAT in the env file as `CONTENTFUL_MANAGEMENT_TOKEN`
3. Set the space it in the env file as `CONTENTFUL_SPACE_ID`
  - Should be the same as `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
4. Run `yarn types:contentful`

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is released under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
