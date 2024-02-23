import styles from '../../styles/forum.module.css';
import { Link } from 'react-router-dom';

const ForumCard = () => {

  return (
    <div className={styles.forumcard}>

      <div className={styles.logo}>
        <span>LOGO</span>
      </div>

      <div className={styles.title}>
        <h3>Bohs Discussion</h3>
        <h4>All discussion related to Bohemian Football CLub</h4>
      </div>

      <div className={styles.postcount}>
        <span>32</span>
      </div>

      <div className={styles.lastpost}>
        <Link to="/">Post Title</Link>
        <div><span>by</span><Link to="/">User Name</Link></div>
        <span>Mon Feb 1, 2024 9:43 pm</span>
      </div>

    </div>
  )
}

export default ForumCard;
