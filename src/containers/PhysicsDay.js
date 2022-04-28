import '../Theme/Styles/PhysicsDay.css';

import { Grid, makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
import { connect } from 'react-redux';

import ArticleCard2 from '../components/Cards/ArticleCard2';
import Footer from '../components/SpecialComponents/Homepage/Footer';

const useStyles = makeStyles((theme) => ({
  centerItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  landingBackground: {
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: `url(${process.env.PUBLIC_URL}/background.jpg) no-repeat 50% fixed`,
    filter: 'blur(10px)',
    webkitFilter: 'blur(10px)',
    opacity: 0.9,
    transform: 'scale(1.1)',
    backgroundSize: 'cover',
    zIndex: -1,
  },

  title: {
    fontSize: 80,
    lineHeight: '80px',
    fontWeight: 900,
    color: '#eee',
    textShadow: '2px 2px 5px #4f4f4f',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 60,
      lineHeight: '70px',
    },
  },

  subtitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 800,
    lineHeight: '30px',
    color: '#eee',
    textShadow: '-1px 1px 3px #4f4f4f',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      lineHeight: '20px',
    },
  },

  sectionTitle: {
    fontSize: 26,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },

  text: {
    textAlign: 'justify',
    textJustify: 'inter-word',
    paddingLeft: '20px',
  },

  apple: {
    zIndex: '5',
    position: 'fixed',
    top: '15%',
    left: '50%',
    width: '60px',
    height: '70px',
    marginTop: '-35px',
    marginLeft: '-30px',
    filter: 'drop-shadow(5px 5px 5px #33333333)',
  },

  section1: {
    height: '100vh',
    color: 'black',
    padding: theme.spacing(4, 3, 4),
  },

  fullHeight: {
    height: '100%',
  },

  section2: {
    position: 'relative',
    zIndex: '100',
    opacity: '1',
    // boxShadow: '1px 1px 10px black',
    color: '#f7f2f6',
    background: '#410066',
    padding: theme.spacing(6, 0),
  },

  section5: {
    position: 'relative',
    zIndex: '100',
    opacity: '1',
    background: '#F0DBED',
    paddingTop: '30px',
    paddingBottom: '50px',
  },

  articleCard: {
    overflow: 'hidden',
  },

  daneshmandanContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    // margin: 'auto',
    // display: 'table',
  },
}));

export const articleData = {
  12: {
    id: 519,
    img: process.env.PUBLIC_URL + '/mp.jpg',
    name: 'عدد پی با چند رقم اعشار',
    description:
      'یکی از اعداد عجیبی که همه‌مون توی مدرسه خیلی زود باهاش آشنا می‌شیم عدد «پی»ئه. به‌نظرت از چه روش‌هایی می‌تونیم مقدار عدد پی رو با تقریب نسبتاً خوبی محاسبه کنیم؟ در ادامۀ این نوشته قراره به دو روش که هر دوتا مبتنی بر احتمال هستن این کار رو انجام بدیم. پس بزن بریم!',
  },
  13: {
    id: 518,
    img: process.env.PUBLIC_URL + '/zharfa_rasta.png',
    name: 'دنیای کوچک ما',
    description:
      'چشماتو ببند، خودتو کنار سی‌وسه‌پل تصور کن، یا حتی دورتر وسط یکی از خیابون‌های پاریس، یا حتی وسط یه قبیله‌ توی اتیوپی، آدم‌های مختلفی توی هر کدوم از این جاها مشغول کاری هستن. به نظرت از همین جایی که نشستی با چند تا واسطه می‌تونی یه نامه رو به دست یکی‌شون برسونی؟ توی این نوشته قراره ‌ببینیم دنیا اینقدر‌ها هم جای بزرگی نیست!',
  },
};

function PhysicsDay() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='lg' className={classes.section1}>
        <div id="back-to-top-anchor"></div>
        <div className={classes.landingBackground} />
        <img
          src={process.env.PUBLIC_URL + '/apple.png'}
          className={classes.apple}
          alt=""
        />
        <Grid
          container
          xs={12}
          justify="space-evenly"
          alignItems="center"
          direction="column"
          className={classes.fullHeight}>
          <Grid item></Grid>
          <Grid item>
            <Typography variant="h2" align="center" className={classes.title}>
              رویداد روز فیزیک
            </Typography>
            <br />
            <Typography
              component="h2"
              variant="h3"
              className={classes.subtitle}>
              آخرِ آخرین هفته‌ی آذر ۱۳۹۹
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={process.env.PUBLIC_URL + 'scroll.gif'}
              alt="scroll"
              style={{ width: 20 }}
            />
          </Grid>
        </Grid>
      </Container>

      <section className={classes.section2}>
        <Container maxWidth='lg' >
          <Grid
            container
            direction="row"
            spacing={3}
            alignItems="center"
            justify="center">
            <Grid container item xs={12} sm={9} md={3} justify="center">
              <ArticleCard2 {...articleData[13]} />
            </Grid>
            <Grid item container justify='center' sm={9} md={3}>
              <Grid item>
                <img
                  style={{ height: '80vh' }}
                  src={process.env.PUBLIC_URL + '/daneshmandan.png'}
                  alt="دانشمندان"
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={9} md={3} justify="center">
              <ArticleCard2 {...articleData[12]} />
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* <Container className={`${classes.section5} ${classes.centerItems}`}>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Typography
              component="h2"
              variant="h2"
              className={classes.sectionTitle}>
              برگزارکنندگان
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container> */}

      <Footer />
    </>
  );
}

export default connect()(PhysicsDay);
