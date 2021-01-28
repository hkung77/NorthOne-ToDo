const addToDoList = (body) =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/toDoList`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (response) =>
    response.ok ? response.json() : Promise.reject(await response.json())
  );

export default addToDoList;
