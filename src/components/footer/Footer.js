const Footer = () => {
  return (
    <footer className="bg-primary ">
      <p className="text-center">
        Par Jérôme BARBIER, Nicolas FERCHAUD, Esteban MARTEL. Le code source est
        sous licence
        <a
          href="http://opensource.org/licenses/mit-license.php"
          class="text-light"
        >
          {" "}
          MIT
        </a>
        . Cette application utilise l'API TMDB mais n'est pas soutenu ni
        certifié par TMDB.
      </p>
    </footer>
  );
};

export default Footer;
