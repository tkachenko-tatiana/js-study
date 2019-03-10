import Fetch from '../services/Fetch';

export default class CourseApi {
  public static fetchCourses = () => {
    return Fetch.get('/api/course');
  }
}
