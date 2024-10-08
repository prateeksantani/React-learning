const fetchBreedList = async (animal) => {
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return await apiRes.json();
};

export default fetchBreedList;
