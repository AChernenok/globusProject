'use strict';

/**
 * request-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request-service.request-service');
