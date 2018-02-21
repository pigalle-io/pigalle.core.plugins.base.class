/**
 * This file is part of pigalle.core.plugins.base.class
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
 * const {PigallePluginBaseClass} = require('@pigalle/core.plugins.base.class')
 *
 * class CustomPlugin extends PigallePluginBaseClass {
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

const {PigalleBaseClass} = require('@pigalle/core.base.class')

/**
 * A base class to create plugin usable by the Pigalle framework.
 *
 * @class
 * @public
 */
class PigallePluginBaseClass extends PigalleBaseClass {

}

module.exports = {}
module.exports.PigallePluginBaseClass = PigallePluginBaseClass
