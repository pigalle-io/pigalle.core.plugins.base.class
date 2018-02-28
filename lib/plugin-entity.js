/**
 * This file is part of pigalle.entities.plugin
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module pigalle-plugin-base-class
 * @description A base class to create plugin usable by the Pigalle framework. All plugins developed for the Pigalle framework must derived this base class.
 * @example
 *
 * const {PluginEntity} = require('@pigalle/entities.plugin')
 *
 * class CustomPlugin extends PluginEntity {
 *
 *   constructor (...args) {
 *     super(...args)
 *   }
 *
 *   run() {
 *     return Promise.revolve(true)
 *   }
 *
 * }
 *
 *
 */

const {NotImplementedError} = require('@9fv.io/notimplemented-error')
const {EntityBase} = require('@pigalle/entities.base')


const CONSTS = {
  INTERNALS: {
    TYPE: {
      VALUE: 'plugin',
    },
    BOOTABLE: {
      KEY: 'bootable'
    },
    CONTEXT: {
      KEY: 'context',
    },
    SCOPE: {
      KEY: 'scope',
    },
    NAME: {
      KEY: 'name',
    }
  }
}


/**
 * A base class to create plugin usable by the Pigalle framework.
 *
 * @class
 * @public
 */
class PluginEntity extends EntityBase {
  /**
   * Create a new instance of {PluginEntity}.
   *
   * A Pigalle plugin is not "bootable" by default.
   *
   * Please extends {BootablePlugin} of module [@pigalle/entities.plugin.bootable](https://github.com/pigalle-io/pigalle.entities.plugin.bootable)
   * if you would create a "bootable" plugin.
   *
   * @param args - The arguments.
   * @constructor
   * @public
   */
  constructor (ctx, ...args) {
    super(...args)
    this.setContext(ctx)
    this.init()
  }

  init() {
    return this.setType(CONSTS.INTERNALS.TYPE.VALUE)
      .setBootable(false)
      .setScope(null)
      .setName(null)
      .setContext(null)
  }

  setContext(context) {
    return this.setInternal(CONSTS.INTERNALS.CONTEXT.KEY, context)
  }

  getContext() {
    return this.getInternal(CONSTS.INTERNALS.CONTEXT.KEY)
  }

  context() {
    return this.getContext()
  }

  setScope(name) {
    return this.setInternal(CONSTS.INTERNALS.SCOPE.KEY, name)
  }

  getScope() {
    return this.getInternal(CONSTS.INTERNALS.SCOPE.KEY)
  }

  scope() {
    return this.getScope()
  }

  setName(name) {
    return this.setInternal(CONSTS.INTERNALS.NAME.KEY, name)
  }

  getName() {
    return this.getInternal(CONSTS.INTERNALS.NAME.KEY)
  }

  name() {
    return this.getName()
  }

  /**
   * Define if the plugin is "bootable" or not.
   *
   * @param bootable {boolean} - True if the plugin must be "bootable" (ie. implementing a "boot()" method). False else.
   * @return {PluginEntity|*} The current instance of {PluginEntity} or of its derived class.
   * @public
   */
  setBootable (bootable) {
    return this.setInternal(CONSTS.INTERNALS.BOOTABLE.KEY, bootable)
  }

  /**
   * Return if the plugin is "bootable" or not.
   *
   * @return {boolean} True if the plugin is "bootable". False else.
   * @public
   */
  isBootable () {
    return this.getInternal(CONSTS.INTERNALS.BOOTABLE.KEY)
  }

  /**
   * Abstract unimplemented method to start the plugin if is "bootable". Usable by derived class.
   *
   * @throws {NotImplementedError}
   * @public
   */
  boot () {
    throw new NotImplementedError('boot() is not implemented')
  }
}

module.exports = {}
module.exports.PluginEntity = PluginEntity
