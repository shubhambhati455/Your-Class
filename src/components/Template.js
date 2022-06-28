import React from 'react'
import './index.css'
const Template = (props) => {
  let { title, courseType, description, urlTeacherImg, teacherName, teacherRating, noOfTeacherReview, classRating, noOfClassReview, noOfCompletedLearner, imageUrl } = props;
 
 
  return (
      <div className='container-m'>
        {/* ------------//Header ------ */}
        <div className="row mt-5 mb-3">

          <div className='pt-2 pb-5 '>
            <div className="row  "> <h1 className='head-1'>{title}</h1></div>
            <div className="row"> <button className='col-2 btn-course px-3 '><span>{courseType}</span><i className="fa-solid fa-circle-question"></i></button></div>
          </div>
        </div>

        {/* //section 2 */}
        <div className="row">
        {/* Left column */}
          <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12 xs-padding ">

            <div className="row">
            {/* ---------Description-------- */}
              <div className="col">
                {description}
              </div>

              <div className="row ">
                <div className='col mt-4'>
                  <div className="d-flex align-items-end" to="/" target="_blank" >
                      <img className="rounded-circle Teacher_img " src={urlTeacherImg} alt="" />
                    <span className="pt-3 ps-2 teacher_name">{teacherName}</span>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <div>
                  {/* ------ Rating ---- */}
                    {[...Array(teacherRating)].map((index) => (<i className="fa-solid fa-star" style={{ color: "#FDC840" }} key={index}></i>))}
                  </div>
                  <div className="review-fn ">{noOfTeacherReview} total reviews for this teacher</div>
                </div>

                <div className="row mt-2">
                  <div className="d-flex align-items-center">
                    <div >
                     {/* ------ Rating ---- */}
                      {[...Array(classRating)].map((index) => (<i className="fa-solid fa-star" style={{ color: "#FDC840" }} key={index}></i>))}
                    </div>
                    <div className=" review-fn ">{noOfClassReview} reviews for this class</div>
                  </div>
                </div>
                <div className="mt-2 mb-2 "><span>Completed by {noOfCompletedLearner} learners</span></div>
              </div>
            </div>
            {/* -----------button----------- */}
            <div className="d-flex flex-wrap mt-5 p-2 mb-2">
              <button className=" schedule-btn mx-2 " type="button">See Class Schedule</button>
              <div className="d-flex">
                <div className="share-btn d-flex align-items-center "><i className="fa-regular fa-lg  p-2  fa-heart"></i><span>Save</span></div>
                <div className="share-btn d-flex align-items-center"><i className="fa-solid fa-lg p-2 fa-share"></i><span>Share</span></div>
              </div>
            </div>
          </div>

          {/* right Column */}
          <div className="col-md-12 col-lg-6  col-sm-12 xs-padding" >
          {/* ------Image----- */}
            <img className='imgg ' src={imageUrl} height="auto" width="auto" alt="" />

          </div>
        </div>
      </div>
  )
}

export default Template