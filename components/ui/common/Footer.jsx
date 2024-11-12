import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div className="footer__area pt-50" style={{ background: "#8080801c" }}>
        <div className="footer__top">
          <div className="container">
            <div className="row">
              {/* first col */}
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 pr-0">
                <div
                  className="footer__widget mb-45 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="footer__widget-title mb-30">
                    <div id="big" className="logo text-center">
                      <a href="#">
                        <img
                          src="/images/footer_logo.png"
                          alt="footer"
                          style={{ height: "250px", width: "60%" }}
                        />
                      </a>
                    </div>
                    <div id="small" className="logo">
                      <a href="#">
                        <img
                          src="/images/header.svg"
                          alt="footer"
                          style={{ height: "80px" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* second col */}
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 offset-xl-1 offset-lg-1">
                <div
                  className="footer__widget footer__widget-3 mb-45 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="footer__widget-title">
                    <h3 style={{ color: "#0f3f5d" }}>MENU</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="/about-us">About</Link>
                        </li>
                        <li>
                          <Link href="/programs">Programs</Link>
                        </li>
                        <li>
                          <Link href="/workshops">Workshops</Link>
                        </li>
                        <li>
                          <Link href="/how-it-works">How it works?</Link>
                        </li>
                        <li>
                          <Link href="/contact-us">Contact</Link>
                        </li>
                        <li>
                          <Link href="/blogs">Blogs</Link>
                        </li>
                        <li>
                          <Link href="/faqs">FAQs</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* third col */}
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 offset-xl-1 offset-lg-1">
                <div
                  className="footer__widget mb-45 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="footer__widget-title">
                    <h3 style={{ color: "#0f3f5d" }}>Terms</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="/privacy-and-policy">
                            Privacy & Policy
                          </Link>
                        </li>
                        <li>
                          <Link href="/disclaimer">Disclaimer</Link>
                        </li>
                        <li>
                          <Link href="/dmca-policy">DMCA</Link>
                        </li>
                        <li>
                          <Link href="/terms-and-conditions">
                            Terms And Conditions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* fourth col (Contact) */}
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div
                  className="footer__widget footer__widget-3 mb-45 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className="footer__widget-title">
                    <h3 style={{ color: "#0f3f5d" }}>Contact</h3>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__info mb-35">
                      <ul
                        style={{
                          listStyleType: "none",
                          paddingLeft: "0",
                          marginBottom: "0",
                        }}
                      >
                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "15px",
                          }}
                        >
                          <div
                            className="icon theme-color"
                            style={{
                              marginRight: "15px",
                            }}
                          >
                            <FaEnvelope />
                          </div>
                          <div className="text theme-color">
                            <span>
                              <a
                                href="mailto:info@hadielearning.com"
                                style={{
                                  color: "#0f3f5d",
                                  textDecoration: "none",
                                }}
                              >
                                info@hadielearning.com
                              </a>
                            </span>
                          </div>
                        </li>

                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "15px",
                          }}
                        >
                          <div
                            className="icon theme-color"
                            style={{
                              marginRight: "15px",
                            }}
                          >
                            <FaPhoneAlt />
                          </div>
                          <div className="text theme-color">
                            <span>
                              <a
                                href="tel:03-1111-93339"
                                style={{
                                  color: "#0f3f5d",
                                  textDecoration: "none",
                                }}
                              >
                                +92 311 1193339
                              </a>
                            </span>
                          </div>
                        </li>

                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "15px",
                          }}
                        >
                          <div
                            className="icon theme-color"
                            style={{
                              marginRight: "15px",
                            }}
                          >
                            <FaWhatsapp />
                          </div>
                          <div className="text theme-color">
                            <span>
                              <a
                                href="https://wa.me/923173174082"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#0f3f5d",
                                  textDecoration: "none",
                                }}
                              >
                                +92 317 3174082
                              </a>
                            </span>
                          </div>
                        </li>

                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "15px",
                          }}
                        >
                          <div
                            className="icon theme-color"
                            style={{
                              marginRight: "15px",
                            }}
                          >
                            <CiLocationOn />
                          </div>
                          <div className="text theme-color">
                            <span>
                              <a
                                href="https://www.google.com/maps?q=Hadi+E-Learning,+Civic+Center,+Faisal+Town+Lahore"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#0f3f5d",
                                  textDecoration: "none",
                                }}
                              >
                                Hadi E-Learning, Civic Center, Faisal Town
                                Lahore.
                              </a>
                            </span>
                          </div>{" "}
                        </li>
                      </ul>
                    </div>

                    {/* Footer social */}
                    <div className="footer__social theme-social">
                      <ul
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingLeft: "0",
                        }}
                      >
                        <li
                          style={{
                            margin: "0 10px",
                          }}
                        >
                          <a
                            href="https://www.facebook.com/Hadielearningofficial"
                            target="_blank"
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li
                          style={{
                            margin: "0 10px",
                          }}
                        >
                          <a
                            href="https://instagram.com/hadielearningofficial"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                        </li>
                        <li
                          style={{
                            margin: "0 10px",
                          }}
                        >
                          <a
                            href="https://www.linkedin.com/company/hadi-e-learning/"
                            target="_blank"
                          >
                            <FaLinkedin />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__copyright-3">
          <div className="container">
            <div className="footer__copyright-inner">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <div className="footer__copyright-text text-center">
                    <p>
                      Copyright ©{" "}
                      <Link href={"/auth/login"}>Hadi E-Learning</Link> |
                      Developed by{" "}
                      <a href="https://cycarts.com" target="#">
                        Cycarts
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center text-white py-2"
        style={{ backgroundColor: "#0f3f5d" }}
      >
        A project by &quot;Ideas9&quot;
      </div>
    </footer>
  );
};

export default Footer;
