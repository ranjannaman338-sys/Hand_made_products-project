export const metadata = {
  title: 'KalaKart API',
  description: 'REST API service for KalaKart Handmade Marketplace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'monospace', padding: '2rem', background: '#FAF7F2', color: '#1F2421' }}>
        {children}
      </body>
    </html>
  );
}
