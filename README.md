# react-internalio

Internal.io's React SDK. Provides a component for embedding Spaces in React applications.

## Install

```
// with npm
$ npm install react-internalio

// with yarn
$ yarn add react-internalio
```

## Usage

```
import { Space } from "react-internalio";

function App() {
  return (
    <Space
      url="https://https://secure.internal.io/environments/default/spaces/example"
      params={{ id: "123"}}
    />
  )
}

```

### Props

- url - The url of the Internal.io Space to embed. Required
- params - An object that will be serialized into query string parameters and passed to the Space
- width - A value for the width style defaulting to `"100%"`.
- height - A value for the height style defaulting to `"100%"`.

### Example

Run `yarn start` for a demo app that allows for simple testing of embedded Internal.io Spaces.

# Publishing

1. Bump version with: `npm version [major|minor|patch]`
2. Run `yarn publish:npm`

# Support

If you have any issues please contact support@internal.io.
