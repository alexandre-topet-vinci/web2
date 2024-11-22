import { useEffect, useState } from "react";

const RandomDog = () => {
  const [dog, setDog] = useState<{ message: string } | null>(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error: ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((data) => setDog(data));
  }, []);

  return (
    <div>
      {dog ? <img src={dog.message} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
};

export default RandomDog;
