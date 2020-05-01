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
I have created a [minimal repo]() with all the code to reproduce.

## 🔥 Exception or Error
<pre><code>
<!-- If the issue is accompanied by an exception or an error, please share it below: -->
<!-- ✍️-->

</code></pre>


## 🌍 Your Environment
<pre><code>
<!-- run `ng version` and paste output below -->
<!-- ✍️-->

</code></pre>

**Anything else relevant?**
<!-- ✍️Is this a browser specific issue? If so, please specify the browser and version. -->

<!-- ✍️Do any of these matter: operating system, IDE, package manager, HTTP server, ...? If so, please mention it below. -->
