const loginButton = document.getElementById("login-button");
const countdown = document.getElementById("countdown");

loginButton.addEventListener("click", function() {
  const password = document.getElementById("password").value;

  // Verifica se a senha está correta
  if (password === "01012023125751") {
    // Redireciona para o site especificado
    window.location.href = "https://pastebin.com/g7S3FBBL";
  } else {
    alert("Senha incorreta!");
  }
});

countdown.innerHTML = `
  <iframe id="online-alarm-kur-iframe" src="https://embed-countdown.onlinealarmkur.com/pt/#2023-01-06T00:00:00@America%2FSao_Paulo" width="480" height="80" style="display: block; margin: 0px auto; border: 0px;"></iframe>
`;
