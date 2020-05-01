# 🐞 Bug report

### Command (mark with an `x`)
<!-- Can you pin-point the command or commands that are effected by this bug? -->
<!-- ✍️edit: -->

- [ ] new
- [ ] build
- [x] serve
- [ ] test
- [ ] e2e
- [ ] generate
- [ ] add
- [ ] update
- [ ] lint
- [ ] xi18n
- [ ] run
- [ ] config
- [ ] help
- [ ] version
- [ ] doc

Particular dependency `@angular-devkit/build-angular`

### Is this a regression?
Yes, the last version in which this bug was not present was: `0.800.6`.

### Description
Interceptors can no longer user the `Router` module anymore, doing so produces the following error in the browser console:
```
Uncaught Error: Can't resolve all parameters for AccountInterceptor: (?).
    at syntaxError (compiler.js:2175) [<root>]
    at CompileMetadataResolver._getDependenciesMetadata (compiler.js:20401) [<root>]
    at CompileMetadataResolver._getTypeMetadata (compiler.js:20296) [<root>]
    at CompileMetadataResolver._getInjectableTypeMetadata (compiler.js:20514) [<root>]
    at CompileMetadataResolver.getProviderMetadata (compiler.js:20523) [<root>]
    at :4200/vendor.js:40912:48 [<root>]
    at Array.forEach (<anonymous>) [<root>]
    at CompileMetadataResolver._getProvidersMetadata (compiler.js:20421) [<root>]
    at CompileMetadataResolver.getNgModuleMetadata (compiler.js:20148) [<root>]
    at JitCompiler._loadModules (compiler.js:25824) [<root>]
    at JitCompiler._compileModuleAndComponents (compiler.js:25807) [<root>]
    at JitCompiler.compileModuleAsync (compiler.js:25769) [<root>]
    at CompilerImpl.compileModuleAsync (platform-browser-dynamic.js:223) [<root>]
    at compileNgModuleFactory__PRE_R3__ (core.js:40264) [<root>]
```


## 🔬 Minimal Reproduction
I have created a [minimal repo](https://github.com/nf-PostQuantum/angular-router-interceptor-bug) with all the code to reproduce.

```sh
git clone 
```

## 🔥 Exception or Error
```
Uncaught Error: Can't resolve all parameters for AccountInterceptor: (?).
    at syntaxError (compiler.js:2175) [<root>]
    at CompileMetadataResolver._getDependenciesMetadata (compiler.js:20401) [<root>]
    at CompileMetadataResolver._getTypeMetadata (compiler.js:20296) [<root>]
    at CompileMetadataResolver._getInjectableTypeMetadata (compiler.js:20514) [<root>]
    at CompileMetadataResolver.getProviderMetadata (compiler.js:20523) [<root>]
    at :4200/vendor.js:40912:48 [<root>]
    at Array.forEach (<anonymous>) [<root>]
    at CompileMetadataResolver._getProvidersMetadata (compiler.js:20421) [<root>]
    at CompileMetadataResolver.getNgModuleMetadata (compiler.js:20148) [<root>]
    at JitCompiler._loadModules (compiler.js:25824) [<root>]
    at JitCompiler._compileModuleAndComponents (compiler.js:25807) [<root>]
    at JitCompiler.compileModuleAsync (compiler.js:25769) [<root>]
    at CompilerImpl.compileModuleAsync (platform-browser-dynamic.js:223) [<root>]
    at compileNgModuleFactory__PRE_R3__ (core.js:40264) [<root>]
```


## 🌍 Your Environment
```
> $ ng version                                                                                                                                                                                                                                          ⬡ 10.16.0 [±master ●●]
Your global Angular CLI version (9.1.0) is greater than your local
version (8.3.18). The local Angular CLI version is used.

To disable this warning use "ng config -g cli.warnings.versionMismatch false".

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 8.3.18
Node: 10.16.0
OS: darwin x64
Angular: 8.2.13
... animations, common, compiler, core, forms, language-service
... platform-browser, platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.803.26
@angular-devkit/build-angular     0.803.26
@angular-devkit/build-optimizer   0.803.26
@angular-devkit/build-webpack     0.803.26
@angular-devkit/core              8.3.26
@angular-devkit/schematics        8.3.18
@angular/cdk                      8.2.3
@angular/cli                      8.3.18
@angular/compiler-cli             8.2.14
@angular/material                 8.2.3
@ngtools/webpack                  8.3.26
@schematics/angular               8.3.18
@schematics/update                0.803.18
rxjs                              6.5.2
typescript                        3.4.5
webpack                           4.39.2
```
