// Meta Data
import { Helmet } from "react-helmet";

function SocialEquity() {
  return (
    <div className="container-fluid">
      <Helmet>
        <title>Yuma Way | Disclaimer</title>
      </Helmet>
      <div className="termsOfUseContainer">
        <div className="termsOfUseLogoContainer">
          <img
            className="termsLogo"
            src="/images/homeImages/yumawayLogoHome.png"
          ></img>
        </div>
        <div className="termsOfUseTextContainer">
          <div className="row">
            <div className="col-12">
              <h1>Disclaimer</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>Concentrate Disclaimer</h3>
              <ul className="whiteText">
                <li>
                  Psychotic symptoms and/or Psychotic disorder (delusions,
                  hallucinations, or difficulty distinguishing reality);
                </li>
                <li>Mental Health Symptoms/Problems;</li>
                <li>
                  Cannabis Hyperemesis Syndrome (CHS) (uncontrolled and
                  repetitive vomiting);
                </li>
                <li>
                  Cannabis use disorder / dependence, including physical and
                  psychological dependence;
                </li>
              </ul>

              <h3>Contact Us</h3>
              <p>
                Please email{" "}
                <a href="mailto: thecoffeejoint@yumaway.com">
                  thecoffeejoint@yumaway.com
                </a>{" "}
                if you have any question.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialEquity;
