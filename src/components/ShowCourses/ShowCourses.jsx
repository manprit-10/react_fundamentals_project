import './ShowCourse.css'
import {useNavigate, useParams} from 'react-router-dom'
import { mockedCoursesList,mockedAuthorsList } from '../../constants';


const ShowCourses = () => {

    const {courseId} = useParams();
    const navigate = useNavigate()

    const courseDetails = mockedCoursesList.find((course)=>course.id===courseId)

  return (
    
    <div className="show-course-page">
      <div>
        <p onClick={()=>navigate('/courses')}>Back to Courses</p>
      </div>
      <h3>{courseDetails.title}</h3>
      <div className="show-course-section">
        <div className='show-course-desc'>
          {courseDetails.description}
        </div>
        <div className='show-course-other'>
          <div>
            <span>ID : </span> <span>{courseDetails.id}</span>
          </div>
          <div>
            <span>Duration : </span> <span>{`${Math.floor(Number(courseDetails.duration) / 60)}:${
                Number(courseDetails.duration) % 60
              } hours`}</span>
          </div>
          <div>
            <span>Created : </span> <span>{courseDetails.creationDate}</span>
          </div>
          <div>
            <span>Authors : </span> <span>{courseDetails.authors
                .map(function (id) {
                  const author = mockedAuthorsList.find(function (author) {
                    return author.id === id;
                  });

                  return author.name;
                })
                .join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCourses;
