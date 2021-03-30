export const deleteData = async (id) => {
  const res = await fetch(`/api/employees/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export const postData = async (post) => {
  const res = await fetch(`/api/employees/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(post),
  });

  const data = await res.json();

  return data;
};

export const patchData = async (id, post) => {
  const res = await fetch(`/api/employees/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(post),
  });

  const data = await res.json();

  return data;
};
