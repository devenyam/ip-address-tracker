import styles from './PictureBackground.module.css';
export default function PictureBackground() {
  return (
    <div className={styles.pictureBackground}>
      <picture>
        <source
          media="(max-width: 600px)"
          srcSet="/images/pattern-bg-mobile.png"
        />
        <img
          src="/images/pattern-bg-desktop.png"
          alt="blue pattern background"
        />
      </picture>
    </div>
  );
}
