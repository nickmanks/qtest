export const loadFaqData = (data)=> ({
  type: 'faq/set-faqs',
  faqs: data && data.faqs ? data.faqs : []
});
