'use strict';

/**
 * fake controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::fake.fake');
