const axios = require('axios');
(async () => {
  try {
    const res = await axios.post('https://bsa-tech.onrender.com/api/products', {
      name: 'Test Product Validation',
      slug: 'test-product-validation-' + Date.now(),
      description: 'Testing validation on live server',
      features: ['Feature 1']
    });
    console.log('Success:', res.data);
  } catch (err) {
    console.error('API Error Response:', err.response ? err.response.data : err.message);
  }
})();
