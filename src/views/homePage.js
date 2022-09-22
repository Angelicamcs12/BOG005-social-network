import {loginGoogleEvent} from './firebase-root.js';

export default () => {
  const viewInit = document.createElement('main');
  const homePage = `
     <main id="homepage">
      <section id="containerLogo">
        <img src="./Imagenes/logoquimicomanz-removebg-preview1.png" class="logo-home">
        <h1>¡Welcome to FoodLab!</h1>
        <p> Share your favorite recipes with the community and your friends</p>
      </section>
        <aside>
        <h2> Join the recipe lab </h2>
        <button id="buttonGoogle" class="buttonGoogle"><a href="#" class="fa fa-google"> Sing up with Google </a>
        <img src="./imagenes/logo google.png" class="logo-google"></button>
        <h3>ó</h3>
        <button id="buttonNumber" class="buttonNumber"> Sing up with Email </button>
        <h4>Already registered?</h4>
        <button id="buttonSingin" class="buttonSingin" onclick="buttonSingin()"> Sing in </button>
        </aside>
    </main>
    `;
    viewInit.innerHTML = homePage;
    const buttonSignin = viewInit.querySelector('#buttonSignin');
    const buttonGoogle = viewInit.querySelector('#buttonGoogle');

    buttonSignin.addEventListener('click', () => {
    // (usuarioSignIn, passwordSignIn);
     });
    buttonSignin.addEventListener('click', buttonSignin);
    buttonGoogle.addEventListener('click', SingInGoogle);
    return viewInit;
  }