import React from 'react';

const Youtube = () => {
  const videos = [
    'https://www.youtube.com/embed/U7bexe8MyLI?autoplay=1', 
    'https://www.youtube.com/embed/pKLH8jcJUEI',
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      margin: '40px 0',
      flexWrap: 'wrap', // To handle smaller screens
      gap: '20px', // Space between tiles
    }}>
      {videos.map((videoSrc, index) => (
        <div key={index} style={{
          position: 'relative',
          width: '560px', // Increased width for larger tiles
          height: '315px', // Increased height for larger tiles
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
        </div>
      ))}
    </div>
  );
};

export default Youtube;
