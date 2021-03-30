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
