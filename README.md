# 🎭 Cockney Rhyming Slang API

*Blimey! Get your daily dose of proper London lingo, innit!*

## What's All This Then? 🕵️

A cheeky little API that serves up authentic Cockney Rhyming Slang phrases faster than you can say "Bob's your uncle!" Perfect for when you want to sound like a proper East Ender or just confuse your mates.

## 🚀 Live API

**Base URL:** https://crs-mupra53rg-alex-noyes.vercel.app

## 📡 Endpoints

### `GET /api/random`
Returns a random Cockney phrase and its meaning.

**Example Response:**
```json
{
  "phrase": "Apples and Pears",
  "meaning": "Stairs"
}
```

### `GET /`
Basic API info (for the curious cats)

## 🎯 Usage Examples

```bash
# Get a random phrase
curl https://crs-mupra53rg-alex-noyes.vercel.app/api/random

# Use it in your code
fetch('https://crs-mupra53rg-alex-noyes.vercel.app/api/random')
  .then(response => response.json())
  .then(data => console.log(`${data.phrase} means ${data.meaning}!`))
```

## 🛠️ Running Locally

```bash
npm install
node server.js
```

Visit `http://localhost:3000/api/random` and Bob's your uncle!

## 🎪 Fun Facts

- Contains hundreds of authentic Cockney phrases
- Perfect for writers, comedians, or anyone who fancies a giggle
- No rate limits - go mental with the requests!
- Built with Express and deployed on Vercel

## 🤝 Contributing

Got more Cockney phrases? Found a dodgy translation? Chuck us a PR - we're always up for making this more comprehensive!

---

*"Would you Adam and Eve it? You've read the whole README!"* 
*(Would you believe it? You've read the whole README!)*