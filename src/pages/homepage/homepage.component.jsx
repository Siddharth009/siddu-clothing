import React from 'react';

import Directory from '../../components/directory/directory.component';
import Homebanner from './Homebanner.component';

import './homepage.styles.scss';

const HomePage = () => (
  <>
    {/* <Homebanner /> */}
    <div className='homepage'>

      <Directory />

    </div>
  </>
);

export default HomePage;
