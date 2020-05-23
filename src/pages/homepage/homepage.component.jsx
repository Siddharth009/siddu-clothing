import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Directory />
    <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
    <df-messenger
      intent="WELCOME"
      chat-title="naxa-test"
      agent-id="f89fc983-a574-45a5-aaad-6029ba4ad33a"
      language-code="en"
    ></df-messenger>
  </div>
);

export default HomePage;
