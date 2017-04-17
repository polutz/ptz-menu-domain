# ptz-menu-domain

[![Build Status](https://travis-ci.org/polutz/ptz-menu-domain.svg)](https://travis-ci.org/polutz/ptz-menu-domain)
[![NPM](https://img.shields.io/npm/v/ptz-menu-domain.svg)](https://www.npmjs.com/package/ptz-menu-domain)
[![codecov.io](http://codecov.io/github/polutz/ptz-menu-domain/coverage.svg)](http://codecov.io/github/polutz/ptz-menu-domain)
[![Dependency Status](https://gemnasium.com/polutz/ptz-menu-domain.svg)](https://gemnasium.com/polutz/ptz-menu-domain)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/polutz/ptz-menu-domain)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Traduções
[pt-br](https://github.com/polutz/ptz-menu-domain/blob/master/README.pt-br.md)
[en-us](https://github.com/polutz/ptz-menu-domain/blob/master/README.md)

ptz-menu-domain é um módulo Polutz.


## Como usar

### Instalação
```
    npm install --save ptz-menu-domain
```

### Como usar
```
    import { IMenu } from ptz-menu-domain;

    var menu: IMenu = {
        label: '',
        items: [
            { label: 'Home', link: '/' },
            { label: 'Github', link: 'https://github.com/polutz/polutz' },
            { label: 'About Us', link: '/aboutus' },
            { label: 'Contact', link: '/contact' },
            { label: 'Faq', link: '/faq' },
            { label: 'Log In', link: '/users/login' },
            { label: 'Sign Up', link: '/users/signup' },
            {
                label: 'Users',
                subItems: [
                    { label: 'User Report', link: '/users/report', role: 'USERS_VIEW' }
                ]
            }
        ]
    };
```


## Contribuir com o projeto

### NPM Global packages
```
    npm install -g ts-node babel-cli
```

### Instalação
```
    npm install   
```

### Teste
```
    npm test
```
