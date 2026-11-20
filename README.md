# Personal Portfolio Website

A modern developer portfolio built to showcase my projects, technical skills, achievements, and experience. The portfolio highlights full-stack development work, real-time applications, backend systems, and AI-integrated projects with a responsive and interactive user interface.

---

## Features

- Responsive UI for desktop and mobile devices
- Project showcase with GitHub & live links
- Skills and technology section
- Experience and achievements section
- Smooth animations and modern design
- Contact section for networking and collaboration
- Optimized performance and SEO-friendly structure

## Contact form

The form submits directly from the browser to [Web3Forms](https://docs.web3forms.com/getting-started/api-reference) using the public access key supplied for `singharshiya.work@gmail.com`. The inbox associated with that key receives enquiries; the visitor's email is used as the reply address. If `VITE_WEB3FORMS_ACCESS_KEY` is configured in the deployment, it overrides this default and must also belong to the intended inbox.

To change the receiving inbox, obtain a Web3Forms access key for that inbox, copy `.env.example` to `.env.local`, and set `VITE_WEB3FORMS_ACCESS_KEY`. Restart the development server, or configure that variable in Vercel and rebuild the deployment. Do not put an SMTP password or secret API credential in a `VITE_` variable: those values are included in the browser bundle.

The form validates input, prevents duplicate requests while sending, times out after 20 seconds, and keeps the message on failure. Success requires both a successful HTTP response and Web3Forms' `success: true`. Inbox delivery should be confirmed separately with one authorized test submission.

Run `npm test` for contact submission tests and `npm run build` for the production build. The automated tests use mocked requests and send no emails.

---

## Tech Stack

### Editorial redesign

The portfolio uses strawberry pink (`#FDA2AC`), crimson (`#CB0E31`), lime (`#BAD62C`), warm off-white, and near-black, with Barlow Condensed display type and Inter body type. The active layouts are in `src/components/editorial/`; existing content is retained in `src/data/portfolio.js`.

The terminal desk, stacked keys, wireframe sphere, Apollo editor stack, MindClash arena, and contact envelope use CSS perspective, layered faces, and shadows. No WebGL or new dependencies are needed. Pointer tilt and decorative animations respect system reduced-motion preferences; visitors can also pause motion from the footer.

Styles are split between layout, scenes, responsive rules, and accessibility refinements under `src/styles/`. The page retains all eight projects, resume and offer-letter PDFs, certificate links, education, leadership, and the existing tested contact submission service.

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- HTML5
- CSS3
- JavaScript (ES6+)

### Deployment
- Vercel

---

## Live Demo

🔗 Live Website:  
https://portfolio-steel-xi-dqd9vykpv0.vercel.app/

---

