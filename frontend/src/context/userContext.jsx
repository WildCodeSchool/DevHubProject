import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [currentUserId, setCurrentUserId] = useState(null);

  const contextValue = useMemo(() => {
    return { currentUserId, setCurrentUserId };
  }, [currentUserId, setCurrentUserId]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
