import styles from './ui-services.module.scss';

/* eslint-disable-next-line */
export interface UiServicesProps {}

export function UiServices(props: UiServicesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiServices!</h1>
    </div>
  );
}

export default UiServices;
