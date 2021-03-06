'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';
var fse = require('fs-extra');

var eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);

var tradingRequest = async function () {
    try {
        var content = fse.readFileSync('./sample.txt', 'UTF-8');
        // console.log('content', content);
        var response = await eBay.trading.addItem({content: content});
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

tradingRequest();
