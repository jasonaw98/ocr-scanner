"use server";

export async function readDoc(fileInput: File) {
  const formdata = new FormData();
  formdata.append("passport", fileInput, "passport.jpg");

  const requestOptions = {
    method: "POST",
    body: formdata,
  };
  const response = await fetch(
    "https://knowledge.zygy.com/bankcheck/passport-api",
    requestOptions
  );

  if (!response.ok) {
    console.error("Network response was not ok");
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  return data;
}
