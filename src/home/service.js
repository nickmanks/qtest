import gql from 'graphql-tag';
import {graphClient} from '../config';
import {sleep} from '../utils/async';

const defaultLoadTime = 500;

/* eslint no-throw-literal: 0 */

export default (loadTime = defaultLoadTime, simulateError = false)=> ({
  load: async ()=> {
    if (simulateError) {
      throw {
        service: 'Home',
        message: 'Unable to load some homepage data'
      };
    }

    await sleep(loadTime);

    const {data} = await graphClient.query({
      query: gql`
        query {
          home {
            id
            title
            description
            dealImg
          }
        }
      `,
      variables: {}
    });

    return data.home[0];
  }
});
