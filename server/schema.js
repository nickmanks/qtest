import {gql} from 'apollo-server-express';
import {GenericModel} from './models';

const faqsModel = new GenericModel('faqs');
const homeModel = new GenericModel('home');
const resourceModel = new GenericModel('resources');

export const typeDefs = gql`
  type Faq {
    id: ID
    title: String
    body: String
  }

  type Resource {
    id: ID
    logo: String
    hero: String
  }

  type Home {
    id: ID
    title: String
    description: String
    dealImg: String
  }

  type Query {
    faqs: [Faq],
    resources: [Resource],
    home: [Home]
  }
`;

export const resolvers = {
  Query: {
    faqs() {
      return faqsModel.list();
    },
    resources() {
      return resourceModel.list();
    },
    home() {
      return homeModel.list();
    }
  }
};
