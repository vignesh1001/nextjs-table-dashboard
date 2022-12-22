import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faChevronDown,
  faChevronUp,
  faCircleCheck,
  faCircleMinus,
  faFilter,
  faRocket,
  faSearch,
  faSortDown,
  faSortUp,
  faTable,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Head from 'next/head';

import Link from 'next/link';
import styles from '../styles/Landing.module.scss';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
const products = [
  {
    id: 1,
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
    dataField: 'id',
    text: 'Discount Name',
    sort: true,
    hidden: true,
  },
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
    sort: false,
    align: 'center',
    headerAlign: 'center',
    formatter: (cell, row) => {
      return (
        <FontAwesomeIcon
          icon={row.active === 'A' ? faCircleCheck : faCircleMinus}
          className={styles['dash-landing-active-icon']}
        />
      );
    },
  },
  {
    dataField: 'amount',
    text: 'Amount',
    sort: false,
  },
  {
    dataField: 'type',
    text: 'Type',
    sort: false,
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
columns = columns.map((col) => {
  const sortCaret = (order, column) => (
    <span style={{ marginLeft: 6 }}>
      <FontAwesomeIcon
        style={{ width: 12 }}
        icon={faChevronUp}
        className={clsx(
          !order || order === 'asc' ? 'text-white' : '',
          styles['dash-landing-search-icon']
        )}
      />
      <FontAwesomeIcon
        style={{ marginLeft: -12, marginBottom: -8, width: 12 }}
        icon={faChevronDown}
        className={clsx(
          !order || order === 'desc' ? 'text-white' : '',
          styles['dash-landing-search-icon']
        )}
      />
    </span>
  );
  return {
    ...col,
    sortCaret: col.sort ? sortCaret : undefined,
    headerStyle: {
      backgroundColor: headerBackgroundColor,
      color: headerFontColor,
    },
  };
});

const defaultSorted = [
  {
    dataField: 'name',
    order: 'desc',
  },
];
const paginationOption = {
  showTotal: true,
  // paginationTotalRenderer: (from, to, size) => (
  //   <span className="react-bootstrap-table-pagination-total">
  //     Showing {from} to {to} of {size} Results
  //   </span>
  // ),
  paginationTotalRenderer: (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      &nbsp;Items per page ({size} items)
    </span>
  ),
  sizePerPageList: [
    {
      text: '20',
      value: 20,
    },
    {
      text: '40',
      value: 40,
    },
    {
      text: 'All',
      value: products.length,
    },
  ],
};
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
          <div className="row">
            <div className="col-8 d-flex">
              <div className="input-group mb-3">
                <div className="input-group-text p-0 bg-white">
                  <select
                    className={clsx(
                      'form-select form-control border-white ',
                      styles['dash-filter-fieldslist']
                    )}
                    aria-label="Default select example"
                  >
                    <option selected value="0">
                      discount name
                    </option>
                    <option value="1">discount key</option>
                    <option value="2">active</option>
                    <option value="3">type</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by discount name(exact match)"
                  aria-label="Username"
                />
                <span className="input-group-text bg-white">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles['dash-landing-search-icon']}
                  />
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="input-group mb-3">
                <span className="input-group-text bg-white border border-end-0">
                  <FontAwesomeIcon
                    icon={faFilter}
                    className={styles['dash-landing-search-icon']}
                  />
                </span>
                <button
                  type="button"
                  className={clsx(
                    'ps-0 btn btn-info bg-white border border-start-0',
                    styles['dash-filter-btn']
                  )}
                >
                  Filters
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex">
              <div className="input-group mb-3">
                <div className="input-group-text p-0 bg-white">
                  <select
                    className={clsx(
                      'form-select form-control border-white ',
                      styles['dash-filter-fieldslist']
                    )}
                    aria-label="Default select example"
                  >
                    <option selected value="0">
                      Actions
                    </option>
                    <option value="1">discount key</option>
                    <option value="2">active</option>
                    <option value="3">type</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div class="clearfix">
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white border border-end-0">
                    <FontAwesomeIcon
                      icon={faTable}
                      className={styles['dash-landing-search-icon']}
                    />
                  </span>
                  <button
                    type="button"
                    className={clsx(
                      'ps-0 btn btn-info bg-white border border-start-0 border-end-0',
                      styles['dash-filter-btn']
                    )}
                  >
                    Table settings
                  </button>
                  <span className="input-group-text bg-white border border-start-0">
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className={styles['dash-landing-search-icon']}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
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
            pagination={paginationFactory(paginationOption)}
          />
        </section>
      </main>
    </div>
  );
}
