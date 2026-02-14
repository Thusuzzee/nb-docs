---
outline: [2]
---

# Contribute

---

Thank you for taking your time to contribute, we really appreciate it.

#### Where you can contribute:
- Images & GIFs
- Adding new code examples.
- Fixing any grammar mistakes. 

For anything else, please open a [new issue](https://github.com/nekos-best/docs/issues/new?labels=d-issue).

## Contribute images and GIFs

For contributing images and GIFs, please join our Discord server and create a post in the `#api-support`. The owners will then tell you all the requirements and rules.

## Contribute Code Examples

### Contribution Guidelines for Code Examples
- Your submission must be written in English.
- Your submission may not contain inappropriate content.
- Make sure to document your example with as many details as possible.
- Make sure your code works and is thoroughly tested.

#### We reserve the right to:
- Make any changes after your submission.
- Remove your submission.

## Add and preview code example
**1. Fork this repository**

**2. Clone the forked repository and `cd` into the folder**

**3. Install VitePress**

You can find VitePress' prerequisites in [their documentation.](https://vitepress.dev/guide/getting-started#prerequisites)

::: code-group

```sh [npm]
$ npm add -D vitepress@next
````

```sh [pnpm]
$ pnpm add -D vitepress@next
```

```sh [yarn]
$ yarn add -D vitepress@next vue
```

```sh [bun]
$ bun add -D vitepress@next
```

:::

**4. Add your code example**

* Create a new file under `/docs/examples` named after its programming language, with the filename ending in `.md`.
* Write at least **two different ways** to make API calls.

**5. Start the dev server**

Before you create a pull request, please check locally that nothing broke when adding your example.

::: code-group

```sh [npm]
$ npm run dev
```

```sh [pnpm]
$ pnpm run dev
```

```sh [yarn]
$ yarn dev
```

```sh [bun]
$ bun run dev
```

:::

The dev server should be running at **`http://localhost:5173`**.

**6. Create a pull request to the original repository**
