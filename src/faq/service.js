import gql from 'graphql-tag';
import {graphClient} from '../config';
import {sleep} from '../utils/async';

const defaultLoadTime = 500;

/* eslint max-len: 0 */
/* eslint no-throw-literal: 0 */

export default (loadTime = defaultLoadTime, simulateError = false)=> ({
  load: async ()=> {
    if (simulateError) {
      throw {
        service: 'FAQ',
        message: 'Unable to load some faq data'
      };
    }

    await sleep(loadTime);

    const {data} = await graphClient.query({
      query: gql`
      query {
        faqs {
          id,
          title,
          body
        }
      }
      `,
      variables: {}
    });

    return data;
  }
});
