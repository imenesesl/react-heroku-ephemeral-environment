import { FC, useEffect, useRef, useState } from 'react';

import { createFileRoute, Navigate } from '@tanstack/react-router';

const withProtectedRoute = (WrappedComponent: FC) => {
  return (props: Record<string, unknown>) => {
    const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(
      null
    );
    const renderRef = useRef(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        renderRef.current = true;
        setIsAuthenticated(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }, []);

    if (!renderRef.current) return <>Loading</>;

    if (!isAuthenticated) return <Navigate to="/signin" />;

    return <WrappedComponent {...props} />;
  };
};

const MePage = () => {
  return <>Me Page Page here!</>;
};

export const Route = createFileRoute('/_me/me/home')({
  component: withProtectedRoute(MePage)
});
