import { useIsOnline } from "../contexts/IsOnlineContext"; // Import du contexte
import "./Footer.css";

function Footer() {
  const { isOnline } = useIsOnline(); // Récupère le statut en ligne

  return (
    <footer className="footer">
      <h2 className="julee-regular">© 2024 LES FANTASY WARRIORS</h2>
      <div className="status">
        {/* Affichage conditionnel du statut en ligne */}
        {isOnline ? (
          <p className="online-status">🟢 En ligne</p>
        ) : (
          <p className="offline-status">🔴 Hors ligne</p>
        )}
      </div>
      <div className="imagesRS">
        <a href="https://www.facebook.com/">
          <img
            id="facebook"
            src="src/assets/images/facebook.png"
            alt="facebook"
          />
        </a>
        <a href="https://x.com/">
          <img id="twitter" src="src/assets/images/twitter.png" alt="twitter" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
