import styles from './sample-components.module.scss';

/* eslint-disable-next-line */
export interface SampleComponentProps {}

export function SampleComponent(props: SampleComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SampleComponent!</h1>
    </div>
  );
}

export default SampleComponent;
