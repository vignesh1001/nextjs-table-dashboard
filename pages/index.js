import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Head from 'next/head';

import Link from 'next/link';
import styles from '../styles/Landing.module.scss';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
const products = [
  {
    discountName: '10% discount',
    discountKey: 'cartdiscount001',
    active: 'A',
    amount: '10%',
    type: 'Relative',
    validFrom: '--',
    validUntil: '--',
    dateCreated: '04/25/2022 7:11AM',
    dateModified: '04/26/2022 7:11AM',
  },
];
const headerBackgroundColor = '#364b50';
const headerFontColor = '#FFF';
let columns = [
  {
    dataField: 'discountName',
    text: 'Discount Name',
    sort: true,
  },
  {
    dataField: 'discountKey',
    text: 'Discount Key',
    sort: true,
  },
  {
    dataField: 'active',
    text: 'Active',
    sort: true,
  },
  {
    dataField: 'amount',
    text: 'Amount',
    sort: true,
  },
  {
    dataField: 'type',
    text: 'Type',
    sort: true,
  },
  {
    dataField: 'validFrom',
    text: 'Valid From',
    sort: true,
  },
  {
    dataField: 'validUntil',
    text: 'Valid Until',
    sort: true,
    headerStyle: {
      backgroundColor: headerBackgroundColor,
      color: headerFontColor,
    },
  },
  {
    dataField: 'dateCreated',
    text: 'Date Created',
    sort: true,
  },
  {
    dataField: 'dateModified',
    text: 'Date Modified',
    sort: true,
  },
];
columns = columns.map((col) => ({
  ...col,
  headerStyle: {
    backgroundColor: headerBackgroundColor,
    color: headerFontColor,
  },
}));

const defaultSorted = [
  {
    dataField: 'name',
    order: 'desc',
  },
];
export default function Landing() {
  return (
    <div>
      <Head>
        <title>Beauty Dash</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        /> */}
      </Head>
      <main role="main" id="main-content" className="container py-5">
        <section className="py-5">
          <BootstrapTable
            keyField="id"
            selectRow={{
              mode: 'checkbox',
              clickToSelect: true,
              style: { background: 'red' },
              headerColumnStyle: {
                backgroundColor: headerBackgroundColor,
                color: headerFontColor,
              },
              bgColor: 'red',
            }}
            data={products}
            columns={columns}
            defaultSorted={defaultSorted}
          />
          {/* <div className={clsx('d-flex', styles['dash-landing'])}>
            <div className={clsx('my-3', styles['dash-landing-rocket'])}>
              {/* Note: Can't use library w/ FontAwesome https://github.com/FortAwesome/Font-Awesome/issues/19331 * /}
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
          </div> */}
        </section>
      </main>
    </div>
  );
}
