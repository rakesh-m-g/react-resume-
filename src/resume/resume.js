
import { useState } from "react";
import "./resume.css";
import logo from "../logo.svg";
const navItems = ["Home", "Contact"];




export const ResumeHeder = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="col-0 sidebar-head col-lg-4">
            
        </div>
    );
};



export function ResumeMain() {
    return (
        <div className="container resume-cn px-lg-3 px-lg-5">
            <article className="resume-wrapper col-12 mx-auto text-bg-dark-emphasis p-3 p-lg-5 mb-5 my-5 shadow-lg">
                <div className="resume-header mt-5">
                    <div className="row align-items-center col-12 pt-2">
                        <div className="resume-title col-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="resume-name mb-0 text-uppercase">
                                <h1 className="resume-name mb-0 text-uppercase ">RAKESH MG</h1>
                            <div className="resume-tagline mb-3 mb-md-0">Full Stack Developer</div>
                            </div>
                        </div>




                        <div className="resume-footer text-center mt-5">
                                <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                                <li className="list-inline-item mb-lg-0 me-3">
                                <a className="resume-link fw-lighter" href="tel:6282789602">




                                <svg className="svg-inline--fa bi bi-phone fa-2x me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"     viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
<span className="d-none d-lg-inline-block text-muted p-2">6282789602</span>

</a>
</li>
                                <li className="list-inline-item mb-lg-0 me-3"><a className="resume-link fw-lighter" href="mailto:vsk00444@gmail.com">
                                <svg className="svg-inline--fa bi bi-envelope fa-2x me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
<span className="d-none d-lg-inline-block text-muted p-2">Vsk00444@gmail.com</span>
</a></li>
                                <li className="list-inline-item mb-lg-0 me-3">
                                    <a className="resume-link fw-lighter" href=" https://www.google.com/maps/place/Kerala/@10.5046507,71.113158,7z/data=!3m1!4b1!4m6!3m5!1s0x3b0812ffd49cf55b:0x64bd90fbed387c99!8m2!3d10.1631526!4d76.6412712!16zL20vMGJ5aDhq?entry=ttu"><svg className="svg-inline--fa fa-github-square fa-2x me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> <span className="d-none d-lg-inline-block text-muted p-2">Kerala</span></a></li>
                                </ul>
                        </div>
                    </div>
                </div> 
                <hr />
                <div className="resume-intro d-lg-flex  align-items-center py-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5  col-xl-3 text-center">
                            <img className="resume-profile-image mb-3 mb-md-0 me-md-4  ms-md-0  rounded mx-auto" src="https://avatars.githubusercontent.com/u/99459358?s=400&u=734231ac06978ed7382a9b63a89b0f78cb556729&v=4" alt=" profile"/>
                        </div>
                    </div>
                    <div className="col-11 col-md-12 col-lg-8 text-start">
                        <p className="mb-0 ms-4 ">
                        Dedicated full-stack developer with a proven track record in creating innovative and efficient web applications. I am seeking a challenging position to utilize my skills in front-end and back-end development, as well as my strong problem-solving abilities. Committed to delivering high-quality code and exceptional user experiences.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="resume-header mt-5">
                    <div className="row align-items-center ms-2">
                        <h3 className="text-uppercase d-flex resume-section-heading mb-4">|| SKILLS </h3>
                                <div className="item mb-2">
                                    <div className="item-heading row  ms-1 align-items-center mb-2">
                                        <h4 className="item-title text-start col-10 col-md-6 col-lg-8 mb-2 mb-md-0 p-0">
                                        Technical
                                        </h4>
                                    </div>
                                </div>
                        <div className="resume-skill col-10 col-md-6 col-lg-4 col-xl-3 ps-lg-5">
                            <div className="resume-name mb-0 text-uppercase">
                            <ul className="list-unstyled resume-skills-list text-start ms-4 lh-lg">

                                <li>JavaScript</li>
                                <li>Vue</li>
                                <li>React</li>
                                <li>Angular</li>
                                <li>PHP</li>
                                <li>NodeJS</li>
                            </ul>
                            </div>
                        </div>
                        <div className="resume-skill col-12 col-md-6 col-lg-4 text-uppercase col-xl-3 ps-2 ps-lg-5 ">
                            
                            <ul className="list-unstyled resume-skills-list text-start ms-4 lh-lg">
                                    <li>MySQL</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Bootstrap</li>
                                    <li>Figma</li>
                            </ul>
                        </div>
                    </div>
                </div> 
                <div className="resume-body">
                    <div className="row">
                        <div className="resume-main col-12 col-lg-12 col-xl-11 pe-0   pe-lg-5 ">
                            <section className="work-section py-3">
                                    <h3 className="text-uppercase d-flex resume-section-heading mb-4">|| WORK EXPERIENCES </h3>
                                <div className="item mb-2">
                                    <div className="item-heading row col-11  ms-1 align-items-center mb-2">
                                        <h4 className="item-title text-start col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                        Full Stack Developer, Betasquirrel
                                        </h4>
                                        <div className="item-meta col-md-6 col-11 col-lg-4 text-muted text-start text-md-end">
                                        04/2023 - Present
                                        </div>
                                    </div>
                                    <div className="item-content text-start lh-base">
                                        <p className="ms-3 col-11 me-lg-5">Developed and implemented responsive web applications using React, Angular, and Node.js, resulting in a 30% increase in site traffic and an enhanced user experience.
                                        </p>
                                        <ul className="resume-list ms-3 col-11 me-lg-5">
                                            <li>Collaborated with cross-functional teams to design and implement a scalable database architecture, optimizing query response time by 20% and improving system performance.</li>
                                            <li>Led the successful integration of third-party APIs and services, enhancing user engagement by 25% through seamless functionality and improved features.</li>
                                            <li>Conducted thorough testing and debugging of software applications, utilizing automated testing frameworks and methodologies to achieve a 50% reduction in production defects and elevate overall software quality.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="project-section py-3 p-0">
                                    <h3 className="text-uppercase d-flex resume-section-heading mb-4">|| PROJECT </h3>
                                <div className="item mb-2">
                                    <div className="item-heading row col-11  ms-1 align-items-center mb-2">
                                        <h4 className="item-title text-start col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                        Project One School
                                        </h4>
                                        
                                    </div>
                                    <div className="item-content text-start col-11">
                                        <p className="ms-3">"One School" is an easy, to use web application built with React.js. It streamlines the organization of student, teacher and staff data, in institutions. This inclusive platform provides a user interface that's intuitive to navigate.
                                        </p>
                                        <ul className="resume-list">
                                            <li>Enrolling Students; Our system makes it simple to register students by collecting information, like details, contact information and academic records. It streamlines the enrollment process for administrators, as parents or guardians.</li>
                                            <li>Managing Teacher Information; "One School" offers a platform, for overseeing and organizing teacher details. Educators have the ability to update their profiles indicate their areas of expertise and access teaching resources. Additionally administrators can assign teachers to classes and subjects as needed.</li>
                                            <li>"One School" is designed to adapt and be easily accessible, on a range of devices, such as smartphones and tablets ensuring an user experience, across different platforms.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                        
                        <h3 className="text-uppercase d-flex resume-section-heading ps-4 mb-4">|| Education </h3>
                                <div className="item mb-2">
                                  
                                    <ul className="list-unstyled resume-skills-list text-start ms-4 lh-lg">

                                        <li>Diploma in Computer Science </li>
                                        <li>Gov Polytechnic College Mananthavady</li>
                                        <li className="fw-light">2020 - 2023</li>
                                        <hr/>
                                        <li>Higher Secondary </li>
                                        <li>AMMRGHSS Nallornadu</li>
                                        <li>Wayanadu</li>
                                        <li className="fw-light">2016 - 2018</li>

                                    </ul>
                                    </div>
                    <div className="resume-footer text-center mt-5">
                                <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                                <li className="list-inline-item mb-lg-0 me-3">
                                <a className="resume-link fw-lighter" href="https://github.com/rakesh-m-g">




                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github svg-inline--fa  fa-2x me-2" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg><span className="d-none d-lg-inline-block text-muted p-2">github.com/rakesh-m-g</span></a></li>


                                <li className="list-inline-item mb-lg-0 me-3"><a className="resume-link fw-lighter" href="https://www.linkedin.com/in/rakesh-mg/">
                                    <svg className="svg-inline--fa bi bi-linkedin fa-2x me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg><span className="d-none d-lg-inline-block text-muted p-2">linkedin.com/in/rakesh-mg/</span>
</a></li>
                                <li className="list-inline-item mb-lg-0 me-3">
                                    <a className="" href="https://instagram.com/dote.s.world_?igshid=NzZhOTFlYzFmZQ=="><svg className="svg-inline--fa resume-link fw-lighter me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
<span className="d-none d-lg-inline-block text-muted p-2">Dote's World</span></a></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </article>  
        </div>
    )
}

export function Sidebar(){
    return(
        <div className="col-0 sidebar-head p-1 ms-1 col-lg-12 ">
            <h2 className="sidebar-h2 col-12 col-lg-0  mt-5">RAKESH MG</h2>
            <div className="sidebar-img d-flex justify-content-center align-items-center col-12 col-md-12 col-xl-12
">
                            <img className="resume-profile-image2 col-11 rounded mx-auto" src="https://avatars.githubusercontent.com/u/99459358?s=400&u=734231ac06978ed7382a9b63a89b0f78cb556729&v=4" alt=" profile"/>
                        </div>
                        <div className="main-line">
                          <h6 className="sidebar-description p-3">
                          Hi, My name is Rakesh MG and I'm a fullstack engineer.
                          </h6>
                        </div>
                        <div className='hairMe-button-case d-flex align-items-center justify-content-center '>
                           <div className='hairMe-button col-8 '>
                              <a href="#"><i class="bi bi-send"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg><span className="hair-me d-none d-lg-inline-block text-muted p-2">Hair Me</span>
</a>
                        </div>
            </div>
        </div>
                        


    );
};