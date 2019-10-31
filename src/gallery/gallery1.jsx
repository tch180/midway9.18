import React, { Component } from 'react';
import chiro1 from '../assets/chiro_students_1a1-600x600.jpg'
import chiro2 from '../assets/Back2ReliefChiropractic-846633186-600x600.jpg'
import './gallery.css'

class gallery1 extends Component {
    render() {
        return (
          <div className="container" >
            <div className="row" >
                <div className="col-6" style={{color:"white", top:"100px", fontSize:"18px", fontFamily:"lato", fontWeight:"300", height:"200px"}}>
                                <h2>Chiropractic</h2>
                                    <span>
                                        Chiropractic care utilizes manual manipulation of the spine to restore 
                                        the normal movement and position of the spinal vertebrae. It is by far,
                                        the single-most effective treatment for minimizing the long-term impact of whiplash injuries, 
                                        especially when coupled with massage therapy, 
                                        trigger point therapy, exercise rehabilitation and other soft tissue rehabilitation modalities.
                                        
                                    </span>   
                </div>
                                <div className="col-6">                     
                                    <img className=" img-fluid" src={chiro1} alt=""/>
                                </div>
              <div className="w-100"></div>
              <div className="col-6" >          
               <img className=" img-fluid" src={chiro2} alt=""/>
                </div>
              <div className="col-6" style={{color:"white",fontSize:"18px", fontFamily:"lato", fontWeight:"300", top:"50px", left: "50px"}}>
                         <span className="span2">
                         <h2>Chiropractic</h2>
                        <div>
                        <span>
                        Chiropractic care utilizes manual manipulation of the spine to restore 
                            the normal movement and position of the spinal vertebrae. It is by far,
                             the single-most effective treatment for minimizing the long-term impact of whiplash injuries, 
                             especially when coupled with massage therapy, 
                            trigger point therapy, exercise rehabilitation and other soft tissue rehabilitation modalities.
                          </span> 
                        </div>
                        
                             
                             </span>   
              </div>
            </div>
          </div>
        );
    }
}

export default gallery1;