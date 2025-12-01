import backgroundImage from '@/assets/hero.jpg';

export default function Hero() {
  return (
    <section style={{ position: 'relative' }}>
      <div
        style={{
          height: 420,
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <div style={{ maxWidth: 520 }}>
            <div style={{ fontSize: 14, letterSpacing: 1, marginBottom: 12 }}>
              WELCOME TO OUR SCHOOL
            </div>
            <h1 style={{ fontSize: 56, margin: 0, lineHeight: 1.02 }}>
              Special Education School
            </h1>
            <p style={{ color: '#f0f4f6', maxWidth: 520 }}>
              We provide a caring and inclusive learning environment for children with
              disabilities and special needs. Our goal is to support every child in
              reaching their full potential.
            </p>
            <div style={{ marginTop: 18 }}>
              <a
                href="#learn"
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  padding: '12px 18px',
                  borderRadius: 6,
                }}
              >
                Learn more
              </a>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                background: 'var(--accent)',
                color: '#ffffffff',
                padding: '18px 28px',
                borderRadius: 6,
                fontWeight: 700,
              }}
            >
              Our Teachers
            </div>
            <div
              style={{
                background: 'var(--brand)',
                color: '#fff',
                padding: '18px 28px',
                borderRadius: 6,
                fontWeight: 700,
              }}
            >
              All Classes
            </div>
            <div
              style={{
                background: '#fff',
                color: varColor('#000'),
                padding: '18px 28px',
                borderRadius: 6,
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function varColor(fallback: string) {
  // small helper so we do not break if CSS var not applied
  return 'rgba(0,0,0,0.85)';
}
