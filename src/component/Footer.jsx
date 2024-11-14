import { footerContent, socialImg } from "../constant";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Footer = () => {
  return (
    <footer className="bg-dark border ">
      <Container>
        <div className="  d-flex flex-lg-row flex-column justify-content-lg-between mt-5 my-4 ">
          <div className=" ms-5">
            <p className="d-flex gap-3  ">
              <img src="/logo.svg" alt="logo" />
              <span className="text-white my-auto fs-2 fw-bold">Nexcent</span>
            </p>
            <div className="mt-4 text-silver fs-6">
              <p className="text-white"> Copyright &copy; 2020 Nexcent ltd.</p>
              <p className="text-white">All rights reserved</p>
            </div>

            <div className="d-flex gap-3 mt-4">
              {socialImg.map((item) => (
                <div
                  className=" rounded-circle  px-2 py-2 border border-white flex-wrap"
                  key={item}
                >
                  <img
                    src={item}
                    alt="social "
                    width={24}
                    height={24}
                    className="object-fit-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          {footerContent.map(({ title, content }, index) => (
            <div key={index} className="text-white  d-flex  flex-column ">
              <h4>{title}</h4>
              <ul>
                {content.map((item, demo) => (
                  <li key={demo}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="d-flex flex-column gap-2  ms-4">
            <h5 className="text-light">Stay up to date</h5>
            <div className="input-group">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="bg-secondary border border-0"
              />

              <Button variant="secondary">
                <img
                  src="/social/send.svg"
                  alt="social"
                  width={20}
                  height={20}
                  color="transparent"
                />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
