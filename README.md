# React for geniuses

A guide for people who already know programming, but don't know the JavaScript ecosystem.

## Clone this repository

GitHub has this cool feature to create your own repository based on another without forking it.

[Click here to use this template repository](https://github.com/rijx/react-for-geniuses/generate)

## Install its dependencies

You need to install your (newest) dependencies every time the package.json changes. It will generate a lock file which guarantees that your CI, your colleagues and your Docker container are all using the same versions.

Run this command to install your dependencies:

```
npm i -g yarn
yarn
```

**Why not use npm?** npm has not had the best track record in terms of performance. I recommend using yarn to save yourself some headache later. Feel free to use `npm install` instead, but then you'll have to `package-lock.json` and possibly change some configs.

## Changing the license

This repository is licensed under the MIT license. You might now want to open source your project. If not, simply delete the license file.

If you would like to share your project with anyone and don't really care about terms then go ahead and change the year and name on the license.
