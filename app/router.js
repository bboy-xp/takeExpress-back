'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/postUserdata', controller.home.postUserdata);
  router.get('/getSubmissionOrders', controller.home.getSubmissionOrders);
  router.post('/changeTaken', controller.home.changeTaken);
  router.get('/getTakenOrders', controller.home.getTakenOrders);
  router.post('/returnTaken', controller.home.returnTaken);
  router.post('/submissionGetTargetOrders', controller.home.submissionGetTargetOrders);
  router.post('/takenGetTargetOrders', controller.home.takenGetTargetOrders);

};
