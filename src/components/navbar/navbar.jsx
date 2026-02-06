import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './navbar.css';

const Navbar = ({
  logo,
  logoAlt = 'Logo',
  items = [],
  activeHref,
  className = '#ffffff',
  ease = 'power3.easeOut',
  baseColor = 'transparent',
  pillColor = '#f3f3f3',
  hoveredPillTextColor = '#fbfbfb',
  pillTextColor = '#000000',
onMobileMenuClick = () => {},
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  /* =========================
     LAYOUT + ANIMACIONES
  ========================= */
  useEffect(() => {
    if (!items.length) return;

    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const hover = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (hover) gsap.set(hover, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();

        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, duration: 2, ease }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease }, 0);
        }

        if (hover) {
          tl.to(hover, { y: 0, opacity: 1, duration: 2, ease }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);

    document.fonts?.ready?.then(layout).catch(() => { });

    if (initialLoadAnimation) {
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { scale: 0 },
          { scale: 1, duration: 0.6, ease }
        );
      }

      if (navItemsRef.current) {
        gsap.fromTo(
          navItemsRef.current,
          { width: 0, overflow: 'hidden' },
          { width: 'auto', duration: 0.6, ease }
        );
      }
    }

    return () => window.removeEventListener('resize', layout);
  }, [items, ease, initialLoadAnimation]);

  /* =========================
     HANDLERS
  ========================= */
  const handleEnter = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease });
  };

  const handleLeave = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease });
  };

  const handleLogoEnter = () => {
    if (!logoImgRef.current) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(logoImgRef.current, {
      rotate: 360,
      duration: 0.3,
      ease
    });
  };

  const toggleMobileMenu = () => {
    const open = !isMobileMenuOpen;
    setIsMobileMenuOpen(open);

    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (open) {
      gsap.set(menu, { visibility: 'visible' });
      gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        onComplete: () => gsap.set(menu, { visibility: 'hidden' })
      });
    }

    onMobileMenuClick?.();
  };

  const isExternalLink = href =>
    href?.startsWith('http') ||
    href?.startsWith('//') ||
    href?.startsWith('mailto:') ||
    href?.startsWith('tel:') ||
    href?.startsWith('#');

  const isRouterLink = href => href && !isExternalLink(href);
  const cssVars = {
    '--base': baseColor,          
    '--pill-bg': pillColor,       
    '--pill-text': resolvedPillTextColor,
    '--hover-text': hoveredPillTextColor,
    '--fill': '#2b317e'           
  };


  if (!items.length) return null;

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} style={cssVars}>
        <Link
          to={items[0].href || '/'}
          className="pill-logo"
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} />
        </Link>

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list">
            {items.map((item, i) => (
              <li key={i}>
                {isRouterLink(item.href) ? (
                  <Link
                    to={item.href}
                    className="pill"
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span className="hover-circle" ref={el => (circleRefs.current[i] = el)} />
                    <span className="label-stack">
                      <span className="pill-label">{item.label}</span>
                      <span className="pill-label-hover">{item.label}</span>
                    </span>
                  </Link>
                ) : (
                  <a href={item.href} className="pill">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={i}>
              <Link
                to={item.href}
                className="mobile-menu-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
