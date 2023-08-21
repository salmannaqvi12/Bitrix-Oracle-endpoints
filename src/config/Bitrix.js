const request = require('request');

const apiKey = 'YOUR_API_KEY';
const databaseId = 'YOUR_DATABASE_ID';
const leadId = 'YOUR_LEAD_ID';

const options = {
  method: 'POST',
  url: 'https://your-domain.bitrix24.com/rest/crm.lead.update',
  qs: {
    auth: apiKey
  },
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: leadId,
    fields: {
      'TITLE': 'Oracle Database Lead',
      'NAME': 'John Smith',
      'PHONE': [
        {
          'VALUE': '123-456-7890',
          'VALUE_TYPE': 'WORK'
        }
      ],
      'EMAIL': [
        {
          'VALUE': 'john.smith@example.com',
          'VALUE_TYPE': 'WORK'
        }
      ],
      'ADDRESS': {
        'COUNTRY': 'United States',
        'STATE': 'California',
        'CITY': 'San Francisco',
        'STREET': '123 Main St',
        'POSTAL_CODE': '94105'
      }
    }
  })
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
