const loadUserInfoFromGitHub = async () => {
  const responseUserInfo = await fetch("https://api.github.com/users/ShlykovAA");
  const dataWithUserInfo = await responseUserInfo.json();
  renderUserInfoFromGitHub(dataWithUserInfo);
};

const renderUserInfoFromGitHub = (serverData) => {
  const tegForRenderPhoto = document.getElementById("about_me_img");
  const tegForRenderName = document.getElementById("about_me_name");
  tegForRenderPhoto.src = serverData.avatar_url;
  tegForRenderName.innerText = serverData.name;
};

loadUserInfoFromGitHub();
