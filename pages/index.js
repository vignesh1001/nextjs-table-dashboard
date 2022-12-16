import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Head from 'next/head';
import styles from 'styles/Landing.module.scss';
import Link from 'next/link';

export default function Landing() {
  return (
    <div>
      <Head>
        <title>Beauty Dash</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main role="main" id="main-content" className="container py-5">
        <section className="py-5">
          <div className={clsx('d-flex', styles['dash-landing'])}>
            <div className={clsx('my-3', styles['dash-landing-rocket'])}>
              {/* Note: Can't use library w/ FontAwesome https://github.com/FortAwesome/Font-Awesome/issues/19331 */}
              <FontAwesomeIcon
                icon={faRocket}
                className={styles['dash-landing-rocket-icon']}
              />
            </div>
            <h1>Welcome to Beauty Dash by Ulta</h1>
            <p className="dash-tertiary-text">Here&apos;s how it works.</p>
            <ol className={clsx('list-group', styles['dash-landing-list'])}>
              <li className="list-group-item  my-3 px-3">
                <span className={styles['dash-landing-list-number']}>1</span>
                <span className={styles['dash-landing-list-content']}>
                  Join an active Beauty Dash event
                  <div className="dash-tertiary-text">
                    The more people join, the more points are available to reach
                    later rounds.
                  </div>
                </span>
              </li>
              <li className="list-group-item my-3 px-3">
                <span className={styles['dash-landing-list-number']}>2</span>
                <span className={styles['dash-landing-list-content']}>
                  Pledge for offers and points
                  <div className="dash-tertiary-text">
                    Pledging unlocks exclusive offers and adds points towards
                    unlocking later rounds that reveal more products and bigger
                    offers.
                  </div>
                </span>
              </li>
              <li className="list-group-item my-3 px-3">
                <span className={styles['dash-landing-list-number']}>3</span>
                <span className={styles['dash-landing-list-content']}>
                  Connect &amp; share for bonus points
                  <div className="dash-tertiary-text">
                    Share your pledges on social to earn bonus points that can
                    put you ahead of the pack. The more people see your shares,
                    the more points you get.
                  </div>
                </span>
              </li>
              <li className="list-group-item my-3 px-3">
                <span className={styles['dash-landing-list-number']}>4</span>
                <span className={styles['dash-landing-list-content']}>
                  Purchase and redeem
                  <div className=" dash-tertiary-text">
                    Purchase all your pledged products when the event ends to
                    capture your unlocked offers before they expire!
                  </div>
                </span>
              </li>
            </ol>
            <button
              className="btn btn-dark btn-block btn-lg m-3 "
              id="start-dashing-btn"
            >
              <Link href="/signin">
                <FontAwesomeIcon icon={faRocket} /> START DASHING
              </Link>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
