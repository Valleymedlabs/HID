import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/simple2use.svg').default,
    description: (
      <>
        HID modernization app was design from scratch. Keeping end user in mind.
        Application is fast, responsive and easy to use and provides information needed instantly.
      </>
    ),
  },
  {
    title: 'Easy Sign on',
    Svg: require('@site/static/img/easysignin.svg').default,
    description: (
      <>
        HID app uses your current microsoft login credentials.
        No more need to remember another login id and password. Simply use your MS credentials and start using the app.
        If you do not have access to app, HID app will log your request to admin for approval.
        Once approved, you will have access to the app. No need to call support.
      </>
    ),
  },
  {
    title: 'Powered by Ocean Deep Technologies',
    Svg: require('@site/static/img/odtlogo-small.svg').default,
    description: (
      <>
        Ocean Deep Technologies commits to excellence and quality product development.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
