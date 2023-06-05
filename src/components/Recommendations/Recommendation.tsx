import styles from '@/styles/Recommendation.module.css';
import Image from 'next/image';

interface RecommendationProps {
  name: string;
  text: React.ReactNode;
  image: string;
}

export const Recommendation: React.FC<RecommendationProps> = ({ name, text, image }) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt={name} width={150} height={150} />
      {text}
      <h2>-{name}</h2>
    </div>
  );
};
