import React from 'react'
import Template from './Template'
import data from './data.json'
const Templateitem = () => {

    return (
        <>
            {data.map((item) => {
                return <div className="container" key={item.id}>
                 <Template title={item.title} courseType={item.courseType} description={item.description} urlTeacherImg={item.teacherImg} teacherName={item.teacher_name} teacherRating={item.teacherRating} noOfTeacherReview={item.noOfTeacherReview} classRating={item.classRating} noOfClassReview={item.noOfClassReview} noOfCompletedLearner={item.noOfCompletedLearner} imageUrl={item.imageUrl} />
                </div>
            })}
        </>
    )
}

export default Templateitem