import "./Header.css";
import imgSrc from "../../assets/Images/Image5.jpg";
import CV from '../../assets/Resume/Sachin_Resume.pdf'

const Header = () => (
  <header className="header">
    <div className="header-container">
        <div className="img-container">
            <img className="img" src={imgSrc} />
        </div>
        <div className="prof-info">
            <h1>Sachin Loddiya Karthik</h1>
            <div className="contact-info">
                <a href="tel:517-243-9938" className="contact-item">
                    <span className="icon">📱</span> 517-243-9938
                </a>
                <a href="mailto:sachin.loddiyakarthik@wmich.edu" className="contact-item">
                    <span className="icon">✉️</span> sachin.loddiyakarthik@wmich.edu
                </a>
                <a href="https://www.linkedin.com/in/sachin-lk/" className="contact-item" >
                    <span className="icon">💼</span> LinkedIn
                </a>
                <p className="contact-item">
                    <span className="icon">📍</span> Kalamazoo, MI
                </p>
            </div>
            <a className="download" href={CV} download="Sachin Resume.pdf">
                <button className='hover'>Resume</button>
            </a>
        </div>
    </div>
  </header>
);

export default Header;
