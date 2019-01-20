import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ICourse } from '../../../../../sdk/models/Course';

import DEFAULT_COURSE_LOGO from '../../../assets/course-default.png';
import styles from '../Main.scss';
import { Button } from '@material-ui/core';

interface ICourseCardProps {
  cardInfo: ICourse;
}

const CourseCard: React.SFC<ICourseCardProps> = ({
  cardInfo
}) => {
  return (
    <Card className={styles.card}>
      <CardHeader
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={cardInfo.name}
        // subheader={cardInfo.author}
      />
      <CardMedia
        className={styles.media}
        image={DEFAULT_COURSE_LOGO}
        title={cardInfo.name}
      />
      <CardContent>
        <Typography component="p">
          {cardInfo.description}
        </Typography>
      </CardContent>
      <CardActions className={styles.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button>Details</Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
