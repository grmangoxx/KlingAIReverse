# KlingAI Reverse API

A Node.js Express server that provides signature generation endpoints for KlingAI authentication and API interactions.

## Overview

This project implements a reverse-engineered API for KlingAI that generates required signatures (`sig4`) for various operations including login, follow actions, and point retrieval. The server acts as a local proxy to generate the necessary authentication tokens.

## Features

- **Login Signature Generation** (`/gen`) - Generates sig4 for email/password login
- **Follow Signature Generation** (`/follow`) - Generates sig4 for user follow operations  
- **Point Signature Generation** (`/point`) - Generates sig4 for account point/balance queries

## Installation

1. Clone the repository:
```bash
git clone https://github.com/grmangoxx/KlingAIReverse.git
cd KlingAIReverse
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node kling.js
```

The server will start on `http://localhost:3000`

## API Endpoints

### POST /gen
Generates signature for login authentication.

**Request Body:**
```json
{
  "form": {
    "sid": "ksi18n.ai.portal",
    "email": "your-email@example.com",
    "password": "your-password",
    "language": "en",
    "isWebSig4": "true"
  }
}
```

**Response:**
```json
{
  "sig4": "generated_signature_string"
}
```

### POST /follow
Generates signature for user follow operations.

**Request Body:**
```json
{
  "userId": "35863695"
}
```

**Response:**
```json
{
  "sig4": "generated_signature_string"
}
```

### GET /point
Generates signature for account point/balance queries.

**Response:**
```json
{
  "sig4": "generated_signature_string"
}
```

## Usage Example

Here's a complete example of how to use this API with the configuration from your automation script:

### 1. Login Process

```javascript
// Step 1: Generate login signature
const loginResponse = await fetch('http://localhost:3000/gen', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
    'Pragma': 'no-cache',
    'Accept': '*/*'
  },
  body: JSON.stringify({
    form: {
      sid: "ksi18n.ai.portal",
      email: "your-email@example.com",
      password: "your-password",
      language: "en",
      isWebSig4: "true"
    }
  })
});

const { sig4: loginSig } = await loginResponse.json();

// Step 2: Perform actual login
const authResponse = await fetch(`https://id.klingai.com/pass/ksi18n/web/login/emailPassword?__NS_hxfalcon=${loginSig}&caver=2`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
    'Pragma': 'no-cache',
    'Accept': '*/*'
  },
  body: `sid=ksi18n.ai.portal&email=${encodeURIComponent('your-email@example.com')}&password=${encodeURIComponent('your-password')}&language=en&isWebSig4=true`
});

// Extract cookies and session token
const cookies = authResponse.headers.get('set-cookie');
// Parse did, userId, and ksi18n.ai.portal_st from cookies
```

### 2. Follow User

```javascript
// Step 1: Generate follow signature
const followResponse = await fetch('http://localhost:3000/follow', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
    'Pragma': 'no-cache',
    'Accept': '*/*'
  },
  body: JSON.stringify({
    userId: "35863695"  // Target user ID to follow
  })
});

const { sig4: followSig } = await followResponse.json();

// Step 2: Perform follow action
const followActionResponse = await fetch(`https://api-app-global.klingai.com/api/user_follow/follow?__NS_hxfalcon=${followSig}&caver=2`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': `did=${did}; userId=${userId}; ksi18n.ai.portal_st=${sessionToken}`
  },
  body: JSON.stringify({
    dstId: 35863695,
    followScene: "web_user_home",
    followId: "35863695"
  })
});

const followResult = await followActionResponse.json();
console.log('Follow result:', followResult.message);
```

### 3. Check Account Points

```javascript
// Step 1: Generate point signature
const pointResponse = await fetch('http://localhost:3000/point', {
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
    'Pragma': 'no-cache',
    'Accept': '*/*'
  }
});

const { sig4: pointSig } = await pointResponse.json();

// Step 2: Get account balance
const balanceResponse = await fetch(`https://api-app-global.klingai.com/api/account/pointAndTicket?__NS_hxfalcon=${pointSig}&caver=2`, {
  method: 'GET',
  headers: {
    'Cookie': `did=${did}; userId=${userId}; ksi18n.ai.portal_st=${sessionToken}`
  }
});

const balanceData = await balanceResponse.json();
const balance = balanceData.balance.replace('00', ''); // Remove trailing zeros
console.log('Account balance:', balance);
```

## Configuration Settings

Based on your automation script, here are the key configuration parameters:

- **Target User ID**: `35863695` (user to follow)
- **Max CPM**: `0` (no rate limiting)
- **Max Redirects**: `8`
- **User Agent**: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36`

## Function Explanations

### URL Encoding Functions
The script uses URL encoding for email and password to ensure special characters are properly escaped when sent in form data.

### Constant Function
Sets the target user ID (`35863695`) as a constant for follow operations.

### Replace Function
Removes trailing `00` from balance values for cleaner display.

## Error Handling

The API includes basic error handling:
- Returns 400 status for missing required parameters
- Validates request body structure
- Provides descriptive error messages

## Dependencies

- `express`: Web framework for Node.js
- `jsdom`: DOM implementation for signature generation

## License

ISC License

## Contributing

Feel free to submit issues and enhancement requests!
