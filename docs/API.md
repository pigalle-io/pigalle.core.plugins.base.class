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
const {PluginEntity} = require('@pigalle/entities.plugin')

class CustomPlugin extends PluginEntity {

  constructor (...args) {
    super(...args)
  }

  run() {
    return Promise.revolve(true)
  }

}
```

* [pigalle-plugin-base-class](#module_pigalle-plugin-base-class)
    * [~PluginEntity](#module_pigalle-plugin-base-class..PluginEntity)
        * [new PluginEntity(...args)](#new_module_pigalle-plugin-base-class..PluginEntity_new)
        * [.setBootable(bootable)](#module_pigalle-plugin-base-class..PluginEntity+setBootable) ⇒ <code>PluginEntity</code> \| <code>\*</code>
        * [.isBootable()](#module_pigalle-plugin-base-class..PluginEntity+isBootable) ⇒ <code>boolean</code>
        * [.boot()](#module_pigalle-plugin-base-class..PluginEntity+boot)
    * [~PIGALLE_TYPE](#module_pigalle-plugin-base-class..PIGALLE_TYPE) : <code>string</code>
    * [~BOOTABLE_KEY](#module_pigalle-plugin-base-class..BOOTABLE_KEY) : <code>string</code>

<a name="module_pigalle-plugin-base-class..PluginEntity"></a>

#### pigalle-plugin-base-class~PluginEntity
A base class to create plugin usable by the Pigalle framework.

**Kind**: inner class of [<code>pigalle-plugin-base-class</code>](#module_pigalle-plugin-base-class)  
**Access**: public  

* [~PluginEntity](#module_pigalle-plugin-base-class..PluginEntity)
    * [new PluginEntity(...args)](#new_module_pigalle-plugin-base-class..PluginEntity_new)
    * [.setBootable(bootable)](#module_pigalle-plugin-base-class..PluginEntity+setBootable) ⇒ <code>PluginEntity</code> \| <code>\*</code>
    * [.isBootable()](#module_pigalle-plugin-base-class..PluginEntity+isBootable) ⇒ <code>boolean</code>
    * [.boot()](#module_pigalle-plugin-base-class..PluginEntity+boot)

<a name="new_module_pigalle-plugin-base-class..PluginEntity_new"></a>

##### new PluginEntity(...args)
Create a new instance of {PluginEntity}.

A Pigalle plugin is not "bootable" by default.

Please extends {BootablePlugin} of module [@pigalle/entities.plugin.bootable](https://github.com/pigalle-io/pigalle.entities.plugin.bootable)
if you would create a "bootable" plugin.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="module_pigalle-plugin-base-class..PluginEntity+setBootable"></a>

##### pluginEntity.setBootable(bootable) ⇒ <code>PluginEntity</code> \| <code>\*</code>
Define if the plugin is "bootable" or not.

**Kind**: instance method of [<code>PluginEntity</code>](#module_pigalle-plugin-base-class..PluginEntity)  
**Returns**: <code>PluginEntity</code> \| <code>\*</code> - The current instance of {PluginEntity} or of its derived class.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bootable | <code>boolean</code> | True if the plugin must be "bootable" (ie. implementing a "boot()" method). False else. |

<a name="module_pigalle-plugin-base-class..PluginEntity+isBootable"></a>

##### pluginEntity.isBootable() ⇒ <code>boolean</code>
Return if the plugin is "bootable" or not.

**Kind**: instance method of [<code>PluginEntity</code>](#module_pigalle-plugin-base-class..PluginEntity)  
**Returns**: <code>boolean</code> - True if the plugin is "bootable". False else.  
**Access**: public  
<a name="module_pigalle-plugin-base-class..PluginEntity+boot"></a>

##### pluginEntity.boot()
Abstract unimplemented method to start the plugin if is "bootable". Usable by derived class.

**Kind**: instance method of [<code>PluginEntity</code>](#module_pigalle-plugin-base-class..PluginEntity)  
**Throws**:

- <code>NotImplementedError</code> 

**Access**: public  
<a name="module_pigalle-plugin-base-class..PIGALLE_TYPE"></a>

#### pigalle-plugin-base-class~PIGALLE_TYPE : <code>string</code>
The Pigalle type of the current class.

**Kind**: inner constant of [<code>pigalle-plugin-base-class</code>](#module_pigalle-plugin-base-class)  
<a name="module_pigalle-plugin-base-class..BOOTABLE_KEY"></a>

#### pigalle-plugin-base-class~BOOTABLE_KEY : <code>string</code>
Used key to specify if the plugin is or not "bootable".

**Kind**: inner constant of [<code>pigalle-plugin-base-class</code>](#module_pigalle-plugin-base-class)  
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

_Documentation generated on Fri, 23 Feb 2018 20:43:39 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
