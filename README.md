# Qonto API Client
A simple client for Qonto's API written in Node JS (ES6)
Official docs are found [here](https://api-doc.qonto.eu/1.0/);

## Installation
To install simply use npm or clone repo:

`npm install qonto`

or clone repo and make link:

`$> git clone git@github.com:bottomatik/qonto-api.git`

## Usage

Qonto's API is not very detailed yet, but this repository will be updated along with the API.

To init juste plug in your slug and secret like so:

```javascript
const Qonto = require('qonto');

const QontoClient = new Qonto({
	slug: 'my slug',
	secret: 'my secret'
});
```

This enables you to create multiple clients for different accounts.

## API

This client uses the version 2 of Qonto's API, and provides it as a Promise-based client. It uses [fishingrod]() to perform requests,
and returns a Promise with the exact (non-treated) response from Qonto.

### Attachments

```javascript
QontoClient.attachment('attachment_id').then(res => {
	console.log(res.response);
}).catch(e => {
	console.error(e);
});
```

### Labels

```javascript
QontoClient.labels([current_page=0], [per_page=100]).then(res => {
	console.log(res.response);
}).catch(e => {
	console.error(e);
});
```

### Memberships

```javascript
QontoClient.memberships([current_page=0], [per_page=100]).then(res => {
	console.log(res.response);
}).catch(e => {
	console.error(e);
});
```

### Organization

```javascript
QontoClient.organization('slug_for_organization').then(res => {
	console.log(res.response);
}).catch(e => {
	console.error(e);
});
```

### Transactions

```javascript
QontoClient.transactions('iban_for_transactions', [current_page=0], [per_page=100]).then(res => {
	console.log(res.response);
}).catch(e => {
	console.error(e);
});
```
