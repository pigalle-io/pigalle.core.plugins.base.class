/**
 * This file is part of pigalle.core.plugins.base.class
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {PigallePluginBaseClass} = require('../lib/pigalle-plugin-base-class')

describe('Class {PigallePluginBaseClass}', () => {
  it('should be a function', () => {
    (PigallePluginBaseClass).should.be.a.Function()
  })
})

describe('Create a instance of {PigallePluginBaseClass} using <new> keyword', () => {
  it('should be an object', () => {
    (new PigallePluginBaseClass()).should.be.an.Object()
  })

  it('should be an instance of {PigallePluginBaseClass}', () => {
    (new PigallePluginBaseClass()).should.be.an.instanceOf(PigallePluginBaseClass)
  })
})

describe('Create a instance of {PigallePluginBaseClass} using <factory> method', () => {
  it('should be an object', () => {
    (PigallePluginBaseClass.factory()).should.be.an.Object()
  })

  it('should be an instance of {PigallePluginBaseClass}', () => {
    (PigallePluginBaseClass.factory()).should.be.an.instanceOf(PigallePluginBaseClass)
  })
})
