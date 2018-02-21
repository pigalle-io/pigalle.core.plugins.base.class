# API reference of :

A class base for plugins usable by the Pigalle framework.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_pigalle-plugin-base-class"></a>

### pigalle-plugin-base-class
A base class to create plugin usable by the Pigalle framework. All plugins developed for the Pigalle framework must derived this base class.

**Example**  
```js
const {PigallePluginBaseClass} = require('@pigalle/core.plugins.base.class')

class CustomPlugin extends PigallePluginBaseClass {

  constructor (...args) {
    super(...args)
  }

  run() {
    return Promise.revolve(true)
  }

}
```
<a name="module_pigalle-plugin-base-class..PigallePluginBaseClass"></a>

#### pigalle-plugin-base-class~PigallePluginBaseClass
A base class to create plugin usable by the Pigalle framework.

**Kind**: inner class of [<code>pigalle-plugin-base-class</code>](#module_pigalle-plugin-base-class)  
**Access**: public  
## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Wed, 21 Feb 2018 14:49:05 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
