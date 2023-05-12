'use strict';

/**
 * dev-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dev-project.dev-project');
