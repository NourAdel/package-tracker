import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {AppStateContext} from '../../Context/AppStateContext'
import makeStyles from './Style'

const Address = () => {
    const {IS_RTL}= useContext(AppStateContext)
    const classes= makeStyles({IS_RTL})
    const {t}= useTranslation()
  return <div className={classes.container}>
      <h5 className={classes.address}>
          {t('address')}
      </h5>
  </div>;
};

export default Address;
