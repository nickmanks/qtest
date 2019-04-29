import gql from 'graphql-tag';
import {graphClient} from '../config';
import {sleep} from '../utils/async';

const defaultLoadTime = 500;

/* eslint no-throw-literal: 0 */

export default (loadTime = defaultLoadTime, simulateError = false)=> ({
  load: async ()=> {
    if (simulateError) {
      throw {
        service: 'App',
        message: 'Unable to load some application data'
      };
    }

    await sleep(loadTime);

    const {data} = await graphClient.query({
      query: gql`
      query {
        resources {
          id,
          logo,
          hero
        }
      }
      `,
      variables: {}
    });

    return data.resources[0];
  }
});
