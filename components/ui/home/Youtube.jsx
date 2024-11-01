import React from 'react';

const Youtube = () => {
  const videos = [
    
    'https://www.youtube.com/embed/pKLH8jcJUEI',
    'https://www.youtube.com/embed/U7bexe8MyLI?autoplay=1', 
    'https://www.youtube.com/embed/u0nWHkimd0Q'  
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      margin: '40px 0',
      flexWrap: 'wrap', // To handle smaller screens
    }}>
      {videos.map((videoSrc, index) => (
        <div key={index} style={{
          position: 'relative',
          width: '400px', // Increased width
          height: '225px', // Increased height
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
          margin: '10px', // Space between videos
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
