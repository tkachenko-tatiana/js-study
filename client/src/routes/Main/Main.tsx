import * as React from 'react';
import { observer } from 'mobx-react';
import { injectStore } from '../../stores/StoreContext';
import CourseStore from '../../stores/Course';
import CourseCard from './components/CourseCard';
import { Grid } from '@material-ui/core';

interface IMain {
  courseStore: CourseStore;
}
export class Main extends React.Component<IMain> {

  componentDidMount() {
    this.props.courseStore.fetchCourses();
  }

  render() {
    const { courses } = this.props.courseStore;

    return (
      <Grid container spacing={16}>
        {
          courses.map(({ ...course }) => (
            <Grid item xs={3} key={course.id}>
              <CourseCard cardInfo={course}/>
            </Grid>
          ))
        }
      </Grid>
    );
  }
}

export default injectStore('courseStore')(observer(Main));
