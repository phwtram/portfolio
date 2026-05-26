# Portfolio — Nguyen Binh Phuong Tram

Built with **Next.js 14 + TypeScript + Tailwind CSS**.

## 🚀 Chạy local

```bash
# 1. Cài dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Mở trình duyệt
http://localhost:3000
```

## 📄 Thêm CV PDF

Đặt file CV của bạn vào:
```
public/cv.pdf
```
Nút "Download CV" sẽ tự động trỏ đến file đó.

## 🏗️ Build production

```bash
npm run build
npm start
```

## 🌐 Deploy lên Vercel

1. Push code lên GitHub
2. Vào [vercel.com](https://vercel.com) → **New Project** → Import repo
3. Vercel tự detect Next.js, nhấn **Deploy**
4. (Tuỳ chọn) Đổi domain tại Project Settings → Domains

## 📁 Cấu trúc

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Fonts, CSS variables, animations
├── components/
│   ├── Nav.tsx         # Navigation
│   ├── Hero.tsx        # Hero + typing animation + code window
│   ├── About.tsx       # About / story
│   ├── Skills.tsx      # Skills grid
│   ├── Projects.tsx    # Projects cards
│   ├── Timeline.tsx    # Experience + Education
│   ├── Certificates.tsx
│   ├── Contact.tsx     # Contact + footer
│   └── ScrollReveal.tsx # Scroll animation trigger
└── public/
    └── cv.pdf          # ← đặt CV của bạn vào đây
```
