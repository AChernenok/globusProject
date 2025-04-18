'use strict';

/**
 * request-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::request-service.request-service');
