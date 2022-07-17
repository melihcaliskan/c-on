import { useEffect, useState } from 'react';

const useLoginForm = ({ username, password }) => {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUser() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        setError(null);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [username, password]);

  return { error, isLoading };
};

export default useLoginForm;