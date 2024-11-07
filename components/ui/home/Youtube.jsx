import React from 'react';

const Youtube = () => {
  const videos = [
    { src: 'https://www.youtube.com/embed/U7bexe8MyLI?autoplay=1', title: 'One Year of Hadi E-Learning' },
    { src: 'https://www.youtube.com/embed/pKLH8jcJUEI', title: 'How to Enroll in Hadi E-Learning' },
  ];

  return (
    <>
      <div style={{
        paddingTop: "70px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: '40px 0',
        flexWrap: 'wrap', // To handle smaller screens
        gap: '20px', // Space between tiles
      }}>
        {videos.map((video, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column', // Stack the video and heading
            alignItems: 'center',
            maxWidth: '560px',
            width: '100%', // Full width on small screens
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '315px',
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
                src={video.src}
                title={`Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
            <h2 style={{ marginTop: '80px', textAlign: 'center', color: "#0f3f5d" }}>{video.title}</h2>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            margin: 20px 10px; /* Reduce margin on mobile */
          }
          iframe {
            border-radius: 0; /* Remove border radius for better fit on mobile */
          }
          h3 {
            font-size: 16px; /* Smaller font size on mobile */
            margin-top: 8px; /* Adjust margin for h3 on mobile */
          }
        }
        
        @media (min-width: 769px) {
          h3 {
            font-size: 18px; /* Adjust font size for desktop */
            margin-top: 15px; /* Adjust margin for h3 on desktop */
          }
        }
      `}</style>
    </>
  );
};

export default Youtube;
