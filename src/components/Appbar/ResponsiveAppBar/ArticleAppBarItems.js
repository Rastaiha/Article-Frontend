import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslate } from 'react-redux-multilingual/lib/context';
import { Link } from 'react-router-dom';

import LogoButton from './components/LogoButton';

const ArticleAppBarItems = () => {
  const t = useTranslate();
  const logoButton = <LogoButton />;
  const BackButton = (
    <Button
      component={Link}
      to="/physics_day"
      variant="outlined"
      color="primary">
      {t('backToEvent')}
    </Button>
  );
  return {
    desktopLeftItems: [],
    desktopRightItems: [logoButton],
    mobileLeftItems: [logoButton],
    mobileRightItems: [],
    mobileMenuListItems: [],
  };
};

export default ArticleAppBarItems;
