---
lang: fr-FR
title: Title of this page
description: Description of this page
prev: ./my-next-page # Will overwrite 'prevLinks' property from themeConfig
next: ./my-next-page # Will overwrite 'nextLinks' property from themeConfig
tags:
- configuration
- theme
- indexing
---

# Title

:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::

::: important
Hello there
:::

::: important Hello there
Obi-Wan Kenobi
:::

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::