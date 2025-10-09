import { Link, useLocation } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps extends LinkProps {
  activeClassName?: string;
}

/**
 * NavLink Component
 * 
 * Link component yang otomatis apply class saat active
 * 
 * Usage:
 * <NavLink to="/about" activeClassName="text-primary font-bold">
 *   About
 * </NavLink>
 */
export function NavLink({ 
  to, 
  className, 
  activeClassName = 'text-primary',
  children,
  ...props 
}: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        className,
        isActive && activeClassName
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
