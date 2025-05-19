'use client';

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Bem-vindo à Homepage!</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Aqui você pode interagir e deixar seus comentários.
        </p>
      </header>

      <main>
        <section>
          <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '20px' }}></h2>
        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '40px', color: '#777' }}>
        <p>&copy; {new Date().getFullYear()} Minha Homepage. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}