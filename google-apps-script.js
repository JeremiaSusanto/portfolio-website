/**
 * Google Apps Script untuk Contact Form Portfolio
 * 
 * Script ini menerima POST request dari React contact form
 * dan menyimpan data ke Google Sheets
 * 
 * Setup:
 * 1. Buat Google Spreadsheet dengan header: Name, Email, Subject, Message, Timestamp
 * 2. Buka Extensions > Apps Script
 * 3. Paste kode ini
 * 4. Deploy sebagai Web App dengan access "Anyone"
 * 5. Copy URL deployment ke React app
 */

function doPost(e) {
  try {
    // Log untuk debugging (opsional)
    console.log('Received POST request');
    console.log('Request data:', e.postData.contents);
    
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data from the request
    var data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      throw new Error('Missing required fields');
    }
    
    // Add data to the spreadsheet
    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.subject || 'No Subject',
      data.message || '',
      data.timestamp || new Date().toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta'
      })
    ]);
    
    // Log success
    console.log('Data successfully added to spreadsheet');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'success',
        message: 'Data saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error
    console.error('Error processing request:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'error',
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (untuk testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Google Apps Script is running',
      method: 'GET',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Function untuk testing manual (opsional)
 * Jalankan function ini di Apps Script editor untuk test
 */
function testFunction() {
  var testData = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Subject',
    message: 'This is a test message',
    timestamp: new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta'
    })
  };
  
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([
    testData.name,
    testData.email,
    testData.subject,
    testData.message,
    testData.timestamp
  ]);
  
  console.log('Test data added successfully');
}
