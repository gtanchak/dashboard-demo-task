import React, { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  title: string;
  icon?: string;
  fontIcon?: string;
  hasBullet?: boolean;
  children?: React.ReactDOM;
};

const AsideMenuItem: FC<Props> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  hasBullet = false,
}) => {
  return (
    <div className="menu-item">
      <Link className="menu-link without-sub" to={to}>
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
        )}
        {/* {icon && (
          <span className='menu-icon'>
            <KTIcon iconName={icon} className='fs-2' />
          </span>
        )} */}
        {fontIcon && <i className="bi fs-3"></i>}
        <span className="menu-title">{title}</span>
      </Link>
      {!!children && children}
    </div>
  );
};

export { AsideMenuItem };
