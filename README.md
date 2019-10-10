<img alt="GoContractor" width="210" src="https://initiafy-website-images.s3.amazonaws.com/wordpress-upload/2019/08/Formerly-Gctr-Horizontal-Blue-Grey-01-01N.svg" style="margin-auto" />


# GoContractor Design System

[![Build Status](https://semaphoreci.com/api/v1/admin-initiafy-25/gctr-design-system/branches/master/badge.svg)](https://semaphoreci.com/admin-initiafy-25/gctr-design-system)

### Usage

Run `npm install gctr-design-system` to add the library to your project.

Add the file `./node_modules/gctr-design-system/lib/styles/style.min.css` to the styles array of your angular.json file.

See the [docs website](https://gocontractor.github.io/gctr-design-system/) for api.

### Contributors

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

The following commands are run from the root, i.e. the same directory as this README.

#### Run development server

- Run `npm run build`

#### Build gctr-design-system package

*Update public_api if neccessary*

- Run `npm run build-lib`

#### Publishing gctr-design-system package in npm

*Bump package version if not already done*

- Run `npm run publish-lib`

#### To publish to GH pages

 - `npm run gh` will build the production folder

 - `npm run gh-pub` will publish the site to the url

#### Imports and local GET requests

for images that reference the assets folder, or http requests that target the assets folder, the urls begins with `'assets/...'` - just like that.
