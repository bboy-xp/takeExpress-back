'use strict';

const Controller = require('egg').Controller;
const { readFileSync } = require('fs');
const { resolve } = require('path');

class HomeController extends Controller {
  async index() {
    const data = readFileSync(resolve(__dirname, '../public/index.html'), 'utf8');
    this.ctx.body = data;
  }
  async postUserdata() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const Order = ctx.model.Order;
    const order = new Order({
      position: data.position,
      phoneNumber: data.phoneNumber,
      isTaken: false
    });
    await order.save();
    ctx.body = "success";
  }
  async getSubmissionOrders() {
    const ctx = this.ctx;
    const Order = ctx.model.Order;
    const submissionOrders = await Order.find({"isTaken": false}).sort({"_id": -1});
    ctx.body = submissionOrders;
  }
  async changeTaken() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const Order = ctx.model.Order;
    await Order.update({"_id": data._id},{
      isTaken: true
    });
    const newOrders = await Order.find({"isTaken": false}).sort({"_id": -1});
    ctx.body = newOrders;
  }
  async getTakenOrders() {
    const ctx = this.ctx;
    const Order = ctx.model.Order;
    const takenOrders = await Order.find({"isTaken": true}).sort({"_id": -1});
    ctx.body = takenOrders;
  }
  async returnTaken() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const Order = ctx.model.Order;
    await Order.update({"_id": data._id},{
      isTaken: false
    });
    const newOrders = await Order.find({"isTaken": true}).sort({"_id": -1});
    ctx.body = newOrders;
  }
  async takenGetTargetOrders() {
    const ctx = this.ctx;
    const position = ctx.request.body.position;
    const Order = ctx.model.Order;
    const orders = await Order.find({"position": position, "isTaken": true}).sort({"_id": -1});
    ctx.body = orders;
  }
  async submissionGetTargetOrders() {
    const ctx = this.ctx;
    const position = ctx.request.body.position;
    const Order = ctx.model.Order;
    const orders = await Order.find({"position": position, "isTaken": false}).sort({"_id": -1});
    ctx.body = orders;
  }
}

module.exports = HomeController;
