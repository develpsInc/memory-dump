"use server";

export async function getUserDetails(formData: FormData) {
  const data = {
    email: formData.get("email"),
    firstname: formData.get("first_name"),
    lastname: formData.get("last_name"),
    password: formData.get("password"),
  };

  console.log("Data from the server", data);
  return data;
}
