const getToDoList = ({ searchText } = { searchText: "" }) => {
  let URI = `${process.env.REACT_APP_SERVER_URL}/toDoList`;
  if (searchText.length > 0) {
    URI = encodeURI(`${URI}?search=${searchText}`);
  }

  return fetch(URI, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (response) =>
    response.ok ? response.json() : Promise.reject(await response.json())
  );
};

export default getToDoList;
