# KlingAI Reverse API

A Node.js Express server that generates required signatures (`sig4`) for KlingAI authentication and API interactions.

## Features

- **Login Signature Generation** (`/gen`) - Generates sig4 for email/password login
- **Follow Signature Generation** (`/follow`) - Generates sig4 for user follow operations  
- **Point Signature Generation** (`/point`) - Generates sig4 for account point/balance queries

## Installation

```bash
git clone https://github.com/grmangoxx/KlingAIReverse.git
cd KlingAIReverse
npm install
node kling.js
```

Server runs on `http://localhost:3000`

## API Endpoints

### POST /gen
**Request:**
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

### POST /follow
**Request:**
```json
{
  "userId": "TARGET_USER_ID"
}
```

### GET /point
Returns signature for account point queries.

**All endpoints return:**
```json
{
  "sig4": "generated_signature_string"
}
```

## Usage Example

### 1. Generate Login Signature
```javascript
const response = await fetch('http://localhost:3000/gen', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    form: {
      sid: "ksi18n.ai.portal",
      email: "user@example.com",
      password: "password",
      language: "en",
      isWebSig4: "true"
    }
  })
});
const { sig4 } = await response.json();
```

### 2. Generate Follow Signature
```javascript
const response = await fetch('http://localhost:3000/follow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ userId: "TARGET_USER_ID" })
});
const { sig4 } = await response.json();
```

### 3. Generate Point Signature
```javascript
const response = await fetch('http://localhost:3000/point');
const { sig4 } = await response.json();
```

## Dependencies

- `express`: Web framework
- `jsdom`: DOM implementation for signature generation

## License

ISC
