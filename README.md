<h1>🌦️ Weather App — React + Vite + Tailwind + Google Maps</h1>
A fast, modern, and beautifully animated weather application built with React, Vite, Tailwind CSS, Framer Motion, and Google Maps.
It fetches real‑time weather data using your custom backend (OpenWeather API) and provides a premium UI/UX experience with smooth transitions, animated icons, and location‑based weather updates.

<h2>🚀 Features</h2>
<ul>

<li>Search weather by city</li>

<li>Use current location (geolocation → reverse geocoding → weather)</li>

<li>Animated weather cards using Framer Motion</li>

<li>5‑day forecast with custom SVG icons</li>

<li>Google Maps integration with dynamic marker updates</li>

<li>Unit toggle (°C / °F)</li>

<li>Debounced search input</li>

<li>Toast notifications for API errors</li>

<li>Fully responsive UI built with Tailwind CSS</li>

<li>Fast Vite dev environment</li>

</ul>

<h2>🛠️ Tech Stack</h2>

<table>
  <th>Category</th>
  <th>Tools</th>
  <tr><td>Frontend</td><td>React 19, Vite 8, Tailwind CSS
	</td></tr>
  <tr><td>Animations</td><td>Framer Motion</td></tr>
   <tr><td><Maps/td><td>@vis.gl/react-google-maps</td></tr>
  <tr><td>Icons</td><td>Meteocons, Lucide, React Icons</td></tr>
   <tr><td>Backend (external)</td><td>Node.js + Express + OpenWeather API + GoogleMaps API</td></tr>
  <tr><td>Deployment</td><td>Cloudflare Pages</td></tr>
</table>

<h2>📦 Installation</h2>
Clone the repo:

```bash
git clone https://github.com/JayanShrestha/Weather-App-Frontend.git
cd Weather-App-Frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
Preview production build:
```
bash
npm run preview
```
<h2>🔑 Environment Variables</h2>
Create a .env file in the project root:

```Code
VITE_GOOGLE_MAPS_API_KEY=your_key_here
VITE_BACKEND_URL=https://your-backend-url.com
```
<h2>📁 Project Structure</h2>

```Code
src/
 ├── components/
 ├── hooks/
 ├── pages/
 ├── utils/
 ├── App.jsx
 └── main.jsx
```
<h2>🗺️ API Endpoints (Backend)</h2>

Your frontend communicates with:

```Code
POST /curweather     → weather by city
POST /corweather     → weather by coordinates

```
<h2>⚠️ Error Handling</h2>
The app includes:
<uL>
  <li>Toast notifications for failed API calls</li>
  <li>Graceful fallback UI</li>
  <li>Defensive checks for undefined/malformed backend responses</li>
</uL>

<h2>🤝 Contributing</h2>
Pull requests are welcome.
For major changes, please open an issue first to discuss what you’d like to change.

<h2>📄 License</h2>
MIT License.

<h2>BackendEnd Repo Link</h2>
<a href="https://github.com/JayanShrestha/Weather-App-Backend">Link for Repo</a>


