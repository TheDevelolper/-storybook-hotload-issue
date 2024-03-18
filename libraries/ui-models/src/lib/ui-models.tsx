import styles from './ui-models.module.scss';

/* eslint-disable-next-line */
export interface UiModelsProps {}

export function UiModels(props: UiModelsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiModels!</h1>
    </div>
  );
}

export default UiModels;
