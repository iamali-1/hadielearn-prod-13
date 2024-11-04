import React from 'react';

const Youtube = () => {
  const videos = [
    'https://www.youtube.com/embed/U7bexe8MyLI?autoplay=1',
    'https://www.youtube.com/embed/pKLH8jcJUEI'
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      margin: '40px 0',
      flexWrap: 'wrap', // To handle smaller screens
      gap: '30px' // Increased gap between tiles
    }}>
      {videos.map((videoSrc, index) => (
        <div key={index} style={{
          position: 'relative',
          width: '560px', // Increased width
          height: '315px', // Increased height
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s', // Smooth scaling effect
          cursor: 'pointer', // Pointer cursor on hover
        }}>
          <iframe 
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '8px',
            }} 
            src={videoSrc} 
            title={`Video ${index + 1}`} 
            allowFullScreen
          ></iframe>
          <div 
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              background: 'rgba(0, 0, 0, 0.5)', // Overlay effect on hover
              opacity: '0',
              transition: 'opacity 0.3s', // Fade effect
            }}
            className="overlay"
          />
        </div>
      ))}
    </div>
  );
};

export default Youtube;
