$(document).ready(() => {
    // MENU ------------------------------
    $(".nav__menu-btn").on("click", function () {
      $("#menu").toggleClass("mobile");
      $("#menu").toggleClass("desktop");
      $(this).find("i").toggleClass("fa-bars");
      $(this).find("i").toggleClass("fa-times");
    });
    // -----------------------------------
  
    // EMAIL -----------------------------
    $("#newslatter-form").submit(function (e) {
      e.preventDefault();
      const email = $("#email").val();
      const emailOptions = {
        Host: "smtp.elasticemail.com",
        Username: "gabriellaurindo10@hotmail.com",
        Password: "B0B598C092BAAA2BBF71339134B3E08AAC6F",
        To: "gabriellaurindo10@hotmail.com",
        From: email,
        Subject: "Por favor me adicione na newsletter",
        Body: `
          Olá,
          
          Eu gostaria de ser adicionado na newsletter do site.
          Meu email é ${email}.
          
          Obrigado!
        `,
      };
      try {
        Email.send(emailOptions)
          .then(() => {
            alert("Email enviado com sucesso!");
            location.replace(location.pathname);
          });
      } catch (error) {
        console.log(error.message);
      }
    });
    // -----------------------------------
  });