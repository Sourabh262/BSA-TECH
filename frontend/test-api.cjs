const axios = require('axios');
(async () => {
  try {
    const res = await axios.post('https://bsa-tech.onrender.com/api/products', {
      name: 'Test API 2',
      slug: 'test-api-2',
      description: 'Testing API 2',
      category: 'SaaS',
      features: ['Feature 1']
    });
    console.log('Success:', res.data);
  } catch (err) {
    console.error('Error:', err.response ? err.response.data : err.message);
  }
})();
