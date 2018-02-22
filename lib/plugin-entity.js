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

const {EntityBase} = require('@pigalle/entities.base')

/**
 * The Pigalle type of the current class.
 *
 * @type {string}
 */
const PIGALLE_TYPE = 'plugin'

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
   * @param args - The arguments.
   * @constructor
   * @public
   */
  constructor (...args) {
    super(...args)
    this.setType(PIGALLE_TYPE)
  }
}

module.exports = {}
module.exports.PluginEntity = PluginEntity
