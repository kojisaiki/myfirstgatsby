import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <React.Fragment>
            <div>About page</div>
            <Link to="/">Back to home</Link>
        </React.Fragment>
    </Layout>
)
