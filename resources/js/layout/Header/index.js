import { useEffect, useRef, useState } from "@wordpress/element";
import { Link, useNavigate } from 'react-router-dom';
import ReactSVG from 'react-inlinesvg';

// Import Images
import { checkedClickedOutside } from "@helper/checkClickedOutside";
import Logo from "@images/logo.svg";
import backIcon from '@icon/arrow-left.svg';

const Header = (props) => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const type = props.type

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate( -1 );
	};

  function handleDropdown(item) {
    if (item === activeDropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  }

  const dropdownRefs = {
    support: useRef(null),
    add: useRef(null),
  };

  useEffect(() => {
    return checkedClickedOutside(
      activeDropdown,
      setActiveDropdown,
      dropdownRefs
    );
  }, [activeDropdown]);

  return (
    <header className="ba-dashboard__header">
      { type !== 'detailsHeader' ? (
				<Link to="/#ba-dashboard__plugins" className="ba-dashboard__header__logo">
          <img
            className="ba-dashboard__header__logo__img"
            src={Logo}
            alt="Logo"
          />
           <div className="ba-dashboard__content__overview__badge">
            <span className="ba-dashboard__content__overview__badge__single inactive">
              v0.0.8(beta)
            </span>
          </div>
        </Link>
			) : (
				<button
            className="ba-dashboard__header__return"
            onClick={ handleGoBack }
          >
            <ReactSVG src={ backIcon } width={ 24 } height={ 24 } />
          </button>
			) }
      
      <div className="ba-dashboard__header__content">
        {/* <div className="ba-dashboard__header__action">
          <div
            className="ba-dashboard__header__action__wrapper"
            ref={dropdownRefs.support}
          >
            <button
              className={`ba-dashboard__header__action__btn ${
                activeDropdown === "support" ? "active" : ""
              }`}
              onClick={() => handleDropdown("support")}
            >
              Support
              <ReactSVG src={actionIcon} width={20} height={20} />
            </button>
            {activeDropdown === "support" && (
              <ul className="ba-dashboard__header__action__dropdown">
                <li className="ba-dashboard__header__action__item">
                  <NavLink
                    activeclassname="active"
                    to="/about"
                    className="ba-dashboard__header__action__link"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="ba-dashboard__header__action__item">
                  <NavLink
                    activeclassname="active"
                    to="/contact"
                    className="ba-dashboard__header__action__link"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <div
            className="ba-dashboard__header__action__wrapper"
            ref={dropdownRefs.add}
          >
            <button
              className={`ba-dashboard__header__action__btn ${
                activeDropdown === "add" ? "active" : ""
              }`}
              onClick={() => handleDropdown("add")}
            >
              Add
              <ReactSVG src={actionIcon} width={20} height={20} />
            </button>
            {activeDropdown === "add" && (
              <ul className="ba-dashboard__header__action__dropdown">
                <li className="ba-dashboard__header__action__item">
                  <NavLink
                    activeclassname="active"
                    to="/add-page"
                    className="ba-dashboard__header__action__link"
                  >
                    Add Page
                  </NavLink>
                </li>
                <li className="ba-dashboard__header__action__item">
                  <NavLink
                    activeclassname="active"
                    to="/add-post"
                    className="ba-dashboard__header__action__link"
                  >
                    Add Post
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="ba-dashboard__header__info">
          <img
            className="ba-dashboard__header__info__avatar"
            src={Avatar}
            alt="Avatar"
          />
          <div className="ba-dashboard__header__info__content">
            <span className="ba-dashboard__header__info__title">
              Mehedi Hasan
            </span>
            <span className="ba-dashboard__header__info__subtitle">
              info@heymehedi.com
            </span>
          </div>
        </div> */}
      </div>
     
    </header>
  );
};

export default Header;
