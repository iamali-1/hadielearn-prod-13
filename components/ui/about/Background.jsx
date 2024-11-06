import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <>
      <section className="achievement__area pt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="achievement__content">
                <div className="section_title section_title-3 mb-20">
                  <h2 style={{ color: "#0f3f5d" }}>Background</h2>
                </div>
                <p style={{ fontSize: "18px" }}>
                  Pakistan&apos;s economic conditions have gone through turbulence in recent years. This situation has caused a void of opportunities in the countries which has
                  discouraged the youth greatly. To address this disappointment among the youth of the country, Hadi E-learning plans to offer:
                </p>
                <div className="about__list">
                  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                    <li className="list-item">
                      <span className="check-icon">✓</span>
                      <span>Free IT training to the youth.</span>
                    </li>
                    <li className="list-item">
                      <span className="check-icon">✓</span>
                      <span>Training in in-demand futuristic fields.</span>
                    </li>
                    <li className="list-item">
                      <span className="check-icon">✓</span>
                      <span>Mentorship to make students ready for the industry.</span>
                    </li>
                    <li className="list-item">
                      <span className="check-icon">✓</span>
                      <span>Opportunities to be financially independent.</span>
                    </li>
                    <li className="list-item">
                      <span className="check-icon">✓</span>
                      <span>Strengthening the country&apos;s economy through skilled HR.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="row">
                <div className="col-xl-7 col-sm-6">
                  <div className="achievement__thumb m-img pl-30 text-right">
                    <Image 
                      src="/images/about/compress/left.webp" 
                      alt="achievement-1" 
                      layout="responsive" 
                      width={600} 
                      height={400} 
                      style={{ borderRadius: "10px", objectFit: "cover" }} 
                    />
                  </div>
                </div>
                <div className="col-xl-5 col-sm-6 d-none d-md-none d-lg-none d-xl-block">
                  <div className="achievement__thumb w-img">
                    <Image 
                      src="/images/about/compress/right.webp" 
                      alt="" 
                      layout="responsive" 
                      width={600} 
                      height={400} 
                      style={{ borderRadius: "10px", objectFit: "cover" }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .achievement__thumb {
            width: 100%;
            height: auto;
            max-width: 100%;
          }

          .achievement__thumb img {
            object-fit: contain; /* Maintain aspect ratio without stretching */
            width: 100%;
            height: auto;
          }

          .achievement__content {
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Background;
