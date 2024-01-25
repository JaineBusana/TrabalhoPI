

// function showModalMenu(classe) {
//   let modal = document.querySelector(classe)

//   if (modal.classList.contains(`modal-active`)){
//     modal.classList.remove(`modal-active`)
//   }
//   else{
//     modal.classList.add(`modal-active`);
//   }       

// }

// $(() => {

// $(".rodape-sugestoes-btn").click((e) => {
//     e.preventDefault();
//       const errorMessage = document.querySelector('#error')
//       const textarea = document.querySelector('#rodape-sugestoes-textarea')

//       const texto = textarea.value

//       if ( texto === ''){
//         errorMessage.innerHTML = "O campo deve ser preenchido!";
//         errorMessage.classList.add("error");
        
//         setTimeout(() => {
//             errorMessage.innerHTML = "";
//             errorMessage.classList.remove("error");
//         },3000);
//       }  
//       else {
//         errorMessage.innerHTML = "Obrigada pela contribuição!";
//         errorMessage.classList.add("error");

//         setTimeout(() => {
//           errorMessage.innerHTML = "";
//           errorMessage.classList.remove("error");
//       },3000);
//       }

//     const sugestao ={
//        textoSugestao: $("#rodape-sugestoes-textarea")[0].value

//     }

//     if (!sugestao.textoSugestao) {
      
//       $("#nome").addClass("invalid");
//       return;
//   }
//     console.log(sugestao);

// })
// })

