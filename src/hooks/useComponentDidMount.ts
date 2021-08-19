import { useEffect, useState } from 'react';

/**
 * Hook to replicate the `componentDidMount` lifecycle method.
 *
 * @returns true when the component has mounted.
 */
export const useComponentDidMount = (): boolean => {
  const [componentDidMount, setComponentDidMount] = useState(false);
  useEffect(() => setComponentDidMount(true), []);
  return componentDidMount;
};
