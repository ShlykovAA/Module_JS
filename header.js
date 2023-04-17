const aboutMe = async () => {
  const res = await fetch("https://api.github.com/users/ShlykovAA");
  const data = await res.json();
  // I would split this code into to separate functions
  // For example loadUserInfo and renderUserInfo
  // Also func names should be verb or group of words that explains action

  const myPhoto = document.getElementById("about_me_img");
  const myName = document.getElementById("about_me_name");
  myPhoto.src = data.avatar_url;
  myName.innerText = data.name;
};
aboutMe();
