'use strict';

/**
 * request-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::request-service.request-service');
