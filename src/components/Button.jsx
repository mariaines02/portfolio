import PropTypes from 'prop-types';

/**
 * Primary button
 */

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ''
}) => {
  return (
    href ? (
      <a
        href={href}
        target={target}
        className={`btn btn-primary ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    ) : (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    )
  );
};

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
};