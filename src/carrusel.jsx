import { useState } from 'react';

function Carrusel() {
  // Array con las imágenes y textos
  
  const slides = [
    {
      imagen: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      titulo: 'Disfruta del internet más veloz',
      subtitulo: 'con nuestro módem WiFi 6'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      titulo: 'Tecnología de última generación',
      subtitulo: 'para tu hogar'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6',
      titulo: 'Conexión ultra rápida',
      subtitulo: 'en todos tus dispositivos'
    }
  ];

  // La "caja" que guarda qué imagen mostrar
  const [indiceActual, setIndiceActual] = useState(0);

  // Función para ir a la anterior
  const irAnterior = () => {
    if (indiceActual === 0) {
      setIndiceActual(slides.length - 1); // Va a la última
    } else {
      setIndiceActual(indiceActual - 1);
    }
  };

  // Función para ir a la siguiente
  const irSiguiente = () => {
    if (indiceActual === slides.length - 1) {
      setIndiceActual(0); // Vuelve a la primera
    } else {
      setIndiceActual(indiceActual + 1);
    }
  };

  // Función para ir a un slide específico (cuando das clic en los puntos)
  const irASlide = (indice) => {
    setIndiceActual(indice);
  };

  return (
    <div style={estilos.contenedor}>
      {/* La imagen de fondo */}
      <div 
        style={{
          ...estilos.imagen,
          backgroundImage: `url(${slides[indiceActual].imagen})`
        }}
      >
        {/* Capa oscura encima */}
        <div style={estilos.overlay}></div>

        {/* Texto encima */}
        <div style={estilos.textos}>
          <h1 style={estilos.titulo}>{slides[indiceActual].titulo}</h1>
          <p style={estilos.subtitulo}>{slides[indiceActual].subtitulo}</p>
        </div>

        {/* Flecha izquierda */}
        <button onClick={irAnterior} style={{...estilos.flecha, left: '20px'}}>
          ←
        </button>

        {/* Flecha derecha */}
        <button onClick={irSiguiente} style={{...estilos.flecha, right: '20px'}}>
          →
        </button>

        {/* Puntos de navegación */}
        <div style={estilos.puntos}>
          {slides.map((_, indice) => (
            <button
              key={indice}
              onClick={() => irASlide(indice)}
              style={{
                ...estilos.punto,
                backgroundColor: indice === indiceActual ? '#ff6b00' : '#fff'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Los estilos CSS en JavaScript
const estilos = {
  contenedor: {
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  },
  imagen: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  textos: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 2
  },
  titulo: {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  },
  subtitulo: {
    fontSize: '32px',
    margin: '10px 0 0 0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  },
  flecha: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    fontSize: '30px',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '50%',
    zIndex: 3
  },
  puntos: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex: 3
  },
  punto: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid white',
    cursor: 'pointer'
  }
};

export default Carrusel;