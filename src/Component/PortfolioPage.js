import React , { useState } from 'react'

import { DataEn } from './DataEn'



function PortfolioPage () {

    // constructor() {
    //     super();
    //     this.state =  {
    //        role: "student"
    //     }

       

    // }

    const [role , setRole] = useState('student')
    const [isActive , setisActive] = useState('student')
    // componentWillMount() {
    //     this.setState({
    //         role : ' student'
    //     })
    // }


    const changeRoleToStudent = () => {
        setisActive('student')
        setRole('student');
     };
    const changeRoleToAdmin = () => {
        setisActive('admin')
        setRole('admin');

    };
    const changeRoleToStore = () => {
        setisActive('store')
        setRole('store');
    };
  
    const selectRoleImage = () => {
        // console.log(role)
      if (role === 'student') {
        //   console.log('student')
        // setisActive('student')
        return showStudentImage()
      }
      if (role === 'admin') {
        // console.log('admin')
        // setisActive('admin')
        return showAdminImage()
    }
    if (role === 'store') {
        // console.log('admin')
        // setisActive('store')
        return showStoreImage()
    }
    }

    const showStudentImage = () => {
        // setisActive('student')
        return(
            <>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    {DataEn.Portfolio.Project.image.studentImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                <li data-target="#carouselExampleIndicators" key={index} data-slide-to={index}></li>
                            )
                        }
                        
                    })}
                    
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={DataEn.Portfolio.Project.image.studentImage[0]} alt="alt1" className="role-image" />
                    </div>
                    {DataEn.Portfolio.Project.image.studentImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                
                                    <div key={index} className="carousel-item">
                                        <img src={item} alt="alt2" key={index} className="role-image" />
                                    </div>
                               
                            )
                        }  
                    })}
                    
                </div>
            </>
        )
    }

    const showAdminImage = () => {
        // setisActive('admin')
        return(
            <>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    {DataEn.Portfolio.Project.image.adminImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                <li data-target="#carouselExampleIndicators" key={index} data-slide-to={index}></li>
                            )
                        }
                        
                    })}
                    
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={DataEn.Portfolio.Project.image.adminImage[0]} alt="alt1" className="role-image" />
                    </div>
                    {DataEn.Portfolio.Project.image.adminImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                
                                    <div key={index} className="carousel-item">
                                        <img src={item} alt="alt2" key={index} className="role-image" />
                                    </div>
                               
                            )
                        }  
                    })}
                    
                </div>
            </>
        )
    }

    const showStoreImage = () => {
        // setisActive('store')
        return(
            <>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    {DataEn.Portfolio.Project.image.storeImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                <li data-target="#carouselExampleIndicators" key={index} data-slide-to={index}></li>
                            )
                        }
                        
                    })}
                    
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={DataEn.Portfolio.Project.image.storeImage[0]} alt="alt1" className="role-image" />
                    </div>
                    {DataEn.Portfolio.Project.image.storeImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                               
                                    <div key={index} className="carousel-item">
                                        <img src={item} alt="alt2" key={index} className="role-image" />
                                    </div>
                               
                            )
                        }  
                    })}
                    
                </div>
            </>
        )
    }

    
        return (
            <div id="portfolio" className="App-header-portfoliopage">
                <div className="bg-blur-portfoliopage">
                    <div className="header-portfoliopage">
                        <div className='title-portfolio'>
                            <p className="title-text">PORTFOLiO</p>
                           
                        </div>
                    </div>
                    <div className="body-portfoliopage" >
                        <div className="title-project">
                            <span className="title-project-text">{DataEn.Portfolio.Project.projectName}</span>
                        </div>
                        <div className="select-role-view">
                            <div className="view-btn-div ">
                                <button onClick={changeRoleToStudent} className={isActive === 'student' ? 'student-view view-btn active' : 'student-view view-btn '}>STUDENT</button>
                            </div>
                            <div className="view-btn-div btn-center">
                                <button onClick={changeRoleToAdmin} className={isActive === 'admin' ? 'student-view view-btn active' : 'student-view view-btn '}>ADMiN</button>
                            </div>
                            <div className="view-btn-div">
                                <button onClick={changeRoleToStore} className={isActive === 'store' ? 'student-view view-btn active' : 'student-view view-btn '}>STORE</button>
                            </div>
                        </div>
                        {/* <div className="title-role">
                            <span className="title-role-text">{role}</span>
                        </div> */}
                        <div className="project-image" >
                            
                                <div className="role-image-div">
                                    <div className="carousel-box ">
                                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                            
                                      
                                            {selectRoleImage()}
                                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default PortfolioPage;