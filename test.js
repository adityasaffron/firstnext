const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://adityashop123.myshopify.com/admin/api/2023-04/products.json',
  headers: { 
    'Content-Type': 'application/json', 
    'X-Shopify-Access-Token': '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'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});