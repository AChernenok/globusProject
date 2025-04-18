'use strict';

/**
 * calculate-window service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calculate-window.calculate-window');
