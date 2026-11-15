export default function HomePage() {
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <h1 style={{ color: '#C85A32', margin: '0 0 1rem 0' }}>KalaKart REST API Service</h1>
      <p style={{ color: '#5F635D', lineHeight: '1.6' }}>
        The backend is running in REST API mode. The primary user interface is powered by the separate React + Vite application at <strong>http://localhost:5173</strong>.
      </p>
      <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#F8F4EE', borderRadius: '4px' }}>
        <strong>Available Endpoints:</strong>
        <ul style={{ margin: '0.5rem 0 0 1.2rem', padding: 0 }}>
          <li>GET /api/products</li>
          <li>GET /api/categories</li>
          <li>GET /api/artisans</li>
          <li>POST /api/auth/login</li>
          <li>POST /api/checkout/validate</li>
        </ul>
      </div>
    </div>
  );
}
