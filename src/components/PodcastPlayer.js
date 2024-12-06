import React from 'react';

function PodcastPlayer() {
  const podcasts = [
    {
      title: 'Podcast 1 : Interview de Florian Sévellec',
      url: '/podcasts/PODCAST-AUDIO-Florian-Sévellec.mp3',
      type: 'audio/mp3',
    },
    {
      title: 'Podcast 2 : Interview de Frederic Le Moigne',
      url: '/podcasts/PODCAST-AUDIO-Frédéric-Le-Moigne.mp3',
      type: 'audio/mp3',
    },
  ];

  return (
    <section
      id="podcast"
      style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: '#f9f9f9',
        minHeight: '35vh',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>
        🎧 Écoutez nos podcasts
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {podcasts.map((podcast, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              maxWidth: '300px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#0077be', marginBottom: '10px' }}>
              {podcast.title}
            </h3>
            <audio controls style={{ width: '100%' }}>
              <source src={podcast.url} type={podcast.type} />
              Votre navigateur ne supporte pas ce format audio.
            </audio>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PodcastPlayer;
