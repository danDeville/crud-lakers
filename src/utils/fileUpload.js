export const fileUpload = async (file) => {
  const urlContainer ="https://api.cloudinary.com/v1_1/dz8on44po/upload"
  const formData = new FormData();
  formData.append("upload_preset", "Crud-Heroku");
  formData.append("file", file);

  const response = await fetch(urlContainer, {
    method: "POST",
    body: formData
  })

  const cloudResp = await response.json();
  return cloudResp.secure_url;
}

