import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';
import { ReactComponent as LetterIcon } from '../../../assets/uiIcons/letter.svg';
import { ReactComponent as LockIcon } from '../../../assets/uiIcons/lock.svg';
import { ReactComponent as HideIcon } from '../../../assets/uiIcons/hide.svg';
import { ReactComponent as ShowIcon } from '../../../assets/uiIcons/show.svg';
// 리액트에서 svg는 바로 컴포넌트로 사용할 수 있음.

export default function Icon({ shape, title, ...restProps }) {
  let Comp = null;

  switch(shape) {
    case 'letter':
      Comp = LetterIcon;
      break;
    case 'lock':
      Comp = LockIcon;
      break;
    case 'hide':
      Comp = HideIcon;
      break;
    case 'show':
      Comp = ShowIcon;
      break;
    case 'noIcon':
      return null;
    default:
      Comp = ShowIcon;
  }

  return (
    <div className={`icon-container ${shape}`}>
      <Comp className={`icon ${shape}`} title={title} {...restProps} />
    </div>
  );
}

Icon.propTypes = {
  title: PropTypes.string,
  shape: PropTypes.oneOf(['letter', 'lock', 'hide', 'show', 'noIcon']),
};