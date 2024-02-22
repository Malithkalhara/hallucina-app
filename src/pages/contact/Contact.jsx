import React from "react";
import { BreadCrums } from "../../components/BreadCrums/BreadCrums";

const Contact = () => {
  return (
    <div>
      <BreadCrums page="Contact" />

      <section id="aa-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-contact-area">
                <div className="aa-contact-top">
                  <h2>We are wating to assist you..</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi, quos.
                  </p>
                </div>

                <div className="aa-contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3714257064535!2d-86.7550931378034!3d34.66757706940219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8862656f8475892d%3A0xf3b1aee5313c9d4d!2sHuntsville%2C+AL+35813%2C+USA!5e0!3m2!1sen!2sbd!4v1445253385137"
                    width="100%"
                    height="450"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="aa-contact-address">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="aa-contact-address-left">
                        <form className="comments-form contact-form" action="">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Your Name"
                                  className="form-control"
                                ></input>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="form-control"
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Subject"
                                  className="form-control"
                                ></input>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Company"
                                  className="form-control"
                                ></input>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows="3"
                              placeholder="Message"
                            ></textarea>
                          </div>
                          <button className="aa-secondary-btn">Send</button>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="aa-contact-address-right">
                        <address>
                          <h4>DailyShop</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rerum modi dolor facilis! Nihil error, eius.
                          </p>
                          <p>
                            <span className="fa fa-home"></span>Huntsville, AL
                            35813, USA
                          </p>
                          <p>
                            <span className="fa fa-phone"></span>+ 021.343.7575
                          </p>
                          <p>
                            <span className="fa fa-envelope"></span>Email:
                            support@dailyshop.com
                          </p>
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
