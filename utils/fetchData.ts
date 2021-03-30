export const deleteData = async (employee) => {
  const res = await fetch(`/api/${employee}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export const postData = async (employee, post) => {
  const res = await fetch(`/api/${employee}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(post),
  });

  const data = await res.json();

  return data;
};
