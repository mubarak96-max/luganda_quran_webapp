# Landing Page Implementation Guide

This guide describes how to build a premium, high-converting landing page for the **Quran Luganda Audio** app.

## Design Concept
- **Theme**: Modern Islamic Minimalist.
- **Color Palette**: 
  - Primary: `#008080` (Teal/Green)
  - Secondary: `#B8860B` (Gold)
  - Background: `#FDFDFD` (Off-white)
  - Text: `#333333` (Charcoal)
- **Typography**: `Outfit` or `Inter` from Google Fonts.

---

## 1. Project Structure
Create a `website` folder in the root directory:
- `website/index.html`
- `website/css/style.css`
- `website/js/main.js`
- `website/assets/` (for images and screenshots)

---

## 2. HTML Structure (`index.html`)

### A. Navigation
- Sticky header with glassmorphism effect.
- Logo and links (Features, About, Download).

### B. Hero Section
- **Left**: Compelling headline ("Listen to the Holy Quran in Luganda, Anywhere, Anytime") and sub-headline.
- **Right**: Floating phone mockup displaying the app's home screen.
- **CTA**: "Download Now" buttons (App Store/Play Store icons).

### C. Stats Bar
- "100K+ Downloads", "4.8/5 Rating", "114 Surahs".

### D. Features Grid
- Grid of 6 cards highlighting:
  - Audio Quran (High quality Luganda audio)
  - Islamic Lectures (Sulaiman Nkata & others)
  - AI Islamic Assistant (AI-powered answers)
  - Qibla Finder
  - Islamic Calendar (Hijri/Gregorian)
  - Modern UI/UX

### E. App Preview (Screenshots Section)
- A horizontal scroll or slider showing the App's screens.

### F. Footer
- App version, contact info, and copyright.

---

## 3. CSS Stylings (`style.css`)
- Use Flexbox and Grid for layouts.
- Implement smooth hover effects on feature cards.
- Use CSS animations (fade-in-up) for the hero section.
- Responsive design: Ensure the page looks great on mobile.

---

## 4. Final Polish
- Add a smooth scroll script for navigation.
- Implement a simple "Intersection Observer" to animate elements as they enter the viewport.

---

## Implementation (Code Preview)

### `website/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quran Luganda Audio - Official Website</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://kit.fontawesome.com/your-code.js" crossorigin="anonymous"></script>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="container">
            <h1 class="logo">Quran Luganda</h1>
            <ul class="nav-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#preview">Preview</a></li>
                <li><a href="#download" class="btn-primary">Download</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
        <div class="container hero-flex">
            <div class="hero-content">
                <span class="badge">Most Popular Luganda Quran App</span>
                <h1>Journey through the Quran in your <span>native language.</span></h1>
                <p>High-quality audio recitations and translations in Luganda, Islamic lectures, and AI-powered spiritual guidance.</p>
                <div class="cta-group">
                    <a href="#" class="btn-store">Get it on Google Play</a>
                    <a href="#" class="btn-store secondary">App Store</a>
                </div>
            </div>
            <div class="hero-mockup">
                <img src="assets/mockup.png" alt="App Mockup">
            </div>
        </div>
    </header>

    <!-- Content Sections Follow... -->
</body>
</html>
```

### `website/css/style.css`
```css
:root {
    --primary: #008080;
    --secondary: #B8860B;
    --charcoal: #333;
    --bg: #FDFDFD;
}

body {
    font-family: 'Outfit', sans-serif;
    background: var(--bg);
    color: var(--charcoal);
    margin: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.navbar {
    height: 80px;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 1000;
}
/* More styles... */
```
