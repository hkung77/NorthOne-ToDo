const getToDoList = () =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/toDoList`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (response) =>
    response.ok ? response.json() : Promise.reject(await response.json())
  );

export default getToDoList;
