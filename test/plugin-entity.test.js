/**
 * This file is part of pigalle.entities.plugin
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {NotImplementedError} = require('@9fv.io/notimplemented-error')
const {PluginEntity} = require('../lib/plugin-entity')

describe('Class {PluginEntity}', () => {
  it('should be a function', () => {
    (PluginEntity).should.be.a.Function()
  })
})

describe('Create a instance of {PluginEntity} using <new> keyword', () => {
  it('should be an object', () => {
    (new PluginEntity()).should.be.an.Object()
  })

  it('should be an instance of {PluginEntity}', () => {
    (new PluginEntity()).should.be.an.instanceOf(PluginEntity)
  })
})

describe('Create a instance of {PluginEntity} using <factory> method', () => {
  it('should be an object', () => {
    (PluginEntity.factory()).should.be.an.Object()
  })

  it('should be an instance of {PluginEntity}', () => {
    (PluginEntity.factory()).should.be.an.instanceOf(PluginEntity)
  })

  it('should have an internal property named <type> equal to "plugin"', () => {
    (PluginEntity.factory().type()).should.be.equal('plugin')
  })
})

describe('Define {bootable}', () => {
  it('as true should return true', () => {
    (PluginEntity.factory().setBootable(true).isBootable()).should.be.true()
  })

  it('as false should return false', () => {
    (PluginEntity.factory().setBootable(false).isBootable()).should.be.false()
  })
})

describe('Call {.boot()} method ', () => {
  it('should throw a {NotImplementedError}', () => {
    (() => PluginEntity.factory().boot()).should.throw(NotImplementedError)
  })
})
