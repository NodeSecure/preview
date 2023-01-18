<h1 align="center">🕸 Preview</h1>

![version](https://img.shields.io/badge/dynamic/json.svg?style=for-the-badge&url=https://raw.githubusercontent.com/NodeSecure/preview/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/NodeSecure/preview/commit-activity)
[![OpenSSF
Scorecard](https://api.securityscorecards.dev/projects/github.com/NodeSecure/preview/badge?style=for-the-badge)](https://api.securityscorecards.dev/projects/github.com/NodeSecure/preview)
[![mit](https://img.shields.io/github/license/Naereen/StrapDown.js.svg?style=for-the-badge)](https://github.com/NodeSecure/preview/blob/main/LICENSE)
![build](https://img.shields.io/github/actions/workflow/status/NodeSecure/preview/check.yml?style=for-the-badge)

<h2 align="center">Light NodeSecure in browser</h3>
<p align="center">Find your package weaknesses!</p>

![preview](./preview.png)

## ⚡️ Features

This project aims to help newcomers to understand the benefits of [NodeSecure](http://github.com/NodeSecure)

- 👩‍🚀 On demand analysis
- 🏋️‍♀️ Package size & dependency count
- ⛳️ Vulnerability flags
- 🕐 Browser caching
- 👑 Powered by [NodeSecure/scanner](http://github.com/NodeSecure/scanner)

## Contributing

First, install dependencies

```bash
$ npm i
```

Run the development server:

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run e2e test:

- First, install playwright.

```bash
$ npx playwright install
```

- Then, run the tests ^^

```bash
$ npm run test:e2e
```

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://tonygo.dev"><img src="https://avatars.githubusercontent.com/u/22824417?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tony Gorez</b></sub></a><br /><a href="https://github.com/NodeSecure/preview/commits?author=tony-go" title="Code">💻</a> <a href="https://github.com/NodeSecure/preview/commits?author=tony-go" title="Documentation">📖</a> <a href="https://github.com/NodeSecure/preview/pulls?q=is%3Apr+reviewed-by%3Atony-go" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/NodeSecure/preview/issues?q=author%3Atony-go" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/thomas-gentilhomme/"><img src="https://avatars.githubusercontent.com/u/4438263?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gentilhomme</b></sub></a><br /><a href="https://github.com/NodeSecure/preview/pulls?q=is%3Apr+reviewed-by%3Afraxken" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/NodeSecure/preview/issues?q=author%3Afraxken" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/MehdiHan"><img src="https://avatars.githubusercontent.com/u/53506859?v=4?s=100" width="100px;" alt=""/><br /><sub><b>im_codebreaker</b></sub></a><br /><a href="https://github.com/NodeSecure/preview/commits?author=MehdiHan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/viterb-c"><img src="https://avatars.githubusercontent.com/u/11444888?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Charles Viterbo</b></sub></a><br /><a href="https://github.com/NodeSecure/preview/commits?author=viterb-c" title="Code">💻</a> <a href="https://github.com/NodeSecure/preview/issues?q=author%3Aviterb-c" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

MIT
