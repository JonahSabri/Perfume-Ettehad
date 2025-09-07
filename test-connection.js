const fetch = require('node-fetch');

async function testConnection() {
  try {
    console.log('Testing API connection...');
    
    const response = await fetch('http://localhost:8000/api/products/');
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API connection successful!');
      console.log(`Found ${data.count} products`);
      console.log('First product:', data.results[0]?.name || 'No products found');
    } else {
      console.log('❌ API connection failed');
      console.log('Status:', response.status);
    }
  } catch (error) {
    console.log('❌ Connection error:', error.message);
    console.log('Make sure the Django server is running on http://localhost:8000');
  }
}

testConnection();
