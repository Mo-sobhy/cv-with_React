import react from "react";
import './Home.css'
function Home()
{
    return(
        <div>
            <div className="cv">
                <div className="row">

                    <div className="side">
                        <div className="profile-card">
                            <div className="image-container">
                                <img src="E:\React CV\cv\image.jpg" style="width: 100% ;height:300px;"/>
                                <div className="title">
                                    <h2 style="margin-left: 10px;">Mohamed sobhy</h2>
                                </div>
                            </div>
                            <div class="main-container">
                                <p><i className="fa fa-briefcase  ico " ></i>
                                Designer</p>
                                <p><i className="fa fa-home ico "></i>Egypt</p>
                                <p><i className="fa fa-envelope   ico "></i><a href="sobhy2957@gmail.com">sobhy2957@gmail.com</a></p>
                                <p><i className="fa fa-phone   ico"></i>01096429160</p>
                                <hr/>
                                <p><b><i className="fa fa-asterisk ico " ></i>Skills</b></p>
                                <p>HTML</p>
                                <div className="skill-bar">
                                    <div className="progress-bar"style="width: 80%;">80%</div>
                                </div>
                                <p>CSS</p>
                                <div className="skill-bar">
                                    <div className="progress-bar"style="width: 65%;">65%</div>
                                </div>
                                <p>C++</p>
                                <div className="skill-bar">
                                    <div className="progress-bar"style="width: 85%;">85%</div>
                                </div>
                                <p>Java</p>
                                <div className="skill-bar">
                                    <div className="progress-bar"style="width: 60%;">60%</div>
                                </div>
                                <hr/>
                                <p><b><i className="fa fa-globe ico " ></i>Languages</b></p>
                                <p>Arabic (Mother-Language)</p>
                                <div className="skill-bar">
                                    <div className="progress-bar" style="width: 92%; height: 20px;" ></div>
                                </div>
                                <p>English</p>
                                <div className="skill-bar">
                                    <div className="progress-bar" style="width:60% ;height:20px;"></div>
                                </div>
                                
                                
                            </div>
                        </div>  
                    </div>  

                    <div className="Main">
                        <div className="side-card">
                            
                            <div className="main-container">
                                <h1 style="margin: 5px;"><i className="fa fa-certificate ico"></i>Education</h1>
                                <p style="margin:5px;">Menoufia University </p>
                                <p style="color: #4b4fe2;"><i className="fa fa-calendar  ico " ></i>
                                2019 - 2023</p>
                                <p> study in Faculty of computer and Information </p>
                                <hr/>
                                <p style="margin:5px;">High School </p>
                                <p style="color: #4b4fe2;"><i className="fa fa-calendar  ico " ></i>
                                2016 - 2019</p>
                                <p> Elmasaey School </p>
                                <hr/>
                            </div>
                        </div>  

                        <div className="side-card">
                            
                            <div className="main-container">
                                <h1 style="margin: 5px;"><i className="fa fa-certificate ico"></i>Experience</h1>
                                <h5 style="margin:5px;">Icpc  </h5>
                                <p style="color: #4b4fe2;"><i className="fa fa-calendar  ico " ></i>
                                2019 - 2023</p>
                                <p> Contestant for Icpc </p>
                                <hr/>
                                <p style="color: #4b4fe2;"><i className="fa fa-calendar  ico " ></i>
                                2019 - 2021</p>
                                <p> Junior at Icpc Menoufia </p>
                                <hr/>
                                <div className="image-container">
                                <img  src="E:\React CV\cv\Capture.JPG" style="width: 100% ;height:200px; border: 5px ;
                                box-shadow: 0 4px 10px 0 rgba(0, 0,0, .7);"/>
                                </div>
                            </div>
                        </div> 

                    </div>  

                </div>       
                <div className="footer">

                <div className="footer-ico"> 
                        <a href="https://www.facebook.com/profile.php?id=100024856667914">
                        <i style="color: white; padding: 5px;" className="fa fa-facebook "></i>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/mohamed-sobhy-49a148224">
                        <i style="color: white; padding: 5px;" className="fa fa-linkedin"></i></a>

                        <a href="https://github.com/Mo-sobhy">
                        <i style="color: white; padding: 5px;"className="fa fa-github"></i></a>

                        <a href="https://www.instagram.com/sobhymo7amad/">
                        <i style="color: white; padding: 5px;" className="fa fa-instagram"></i>
                        </a>
                        <h3 style="color: white;font-weight: bold;">Powered by Mo-sobhy</h3>
                </div>
                </div>
            </div>
     </div>
    )
}
export default Home