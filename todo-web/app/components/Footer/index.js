/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import FontAwesome from 'react-fontawesome';

import A from 'components/A';
import messages from './messages';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage
          {...messages.header}
          values={
          {
            icon: <FontAwesome name="heart" />,
            user: <A href="https://github.com/jaliaga-devcenter">jaliaga</A>,
          }
          }
        />

      </section>
    </Wrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
