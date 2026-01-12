#  On Stage

**On Stage** is a web & mobile-oriented application to track live concerts:
- concerts you’ve attended
- concerts you’re going to
- concerts happening near you
- concerts your friends are attending

Inspired by platforms like Letterboxd, On Stage focuses on **music discovery, memory, and social connection** around live events.

---

## Features (MVP)

-  Authentication via **Google** and **Spotify**
-  Discover concerts near you
-  Track:
  - upcoming concerts
  - past concerts
-  See concerts your friends are attending
-  Search concerts by:
  - artist
  - venue
  - city
  - date
-  Add concerts manually if not found
-  Use the app as a personal concert reminder

---

## Tech Stack

### Frontend
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Radix UI**
- **Lucide Icons**

### Backend / Data
- **Next.js API routes (initially)**
- **Ticketmaster Discovery API** (primary provider)
- **Spotify API** (personalization & enrichment)

> Database is intentionally not introduced at the very first stage to allow fast iteration and provider flexibility.

---

## Design

- UI designed in **Figma**
- Components exported using **React + Tailwind**
- Design system implemented via Tailwind tokens
- Fonts loaded using `next/font`
