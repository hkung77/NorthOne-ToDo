const deleteToDoList = (body) =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/toDoList`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (response) =>
    response.ok ? response : Promise.reject(await response.json())
  );

export default deleteToDoList;
