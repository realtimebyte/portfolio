import React from 'react';
import PropTypes from 'prop-types';

import IconAppStore from '@components/icons/appstore';
import IconBookmark from '@components/icons/bookmark';
import IconCodepen from '@components/icons/codepen';
import IconExternal from '@components/icons/external';
import IconFolder from '@components/icons/folder';
import IconFork from '@components/icons/fork';
import IconGithub from '@components/icons/github';
import IconInstagram from '@components/icons/instagram';
import IconLinkedin from '@components/icons/linkedin';
import IconLoader from '@components/icons/loader';
import IconLogo from '@components/icons/logo';
import IconPlayStore from '@components/icons/playstore';
import IconStackOverflow from '@components/icons/stackoverflow';
import IconStar from '@components/icons/star';
import IconTwitter from '@components/icons/appstore';

const Icon = (props: any) => {
  const {name} = props;
  
  switch(name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'Github':
      return <IconGithub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'StackOverflow':
      return <IconStackOverflow />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon;
