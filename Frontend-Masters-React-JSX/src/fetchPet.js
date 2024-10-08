const fetchPet = async (id) => {
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return await apiRes.json();
};

export default fetchPet;
