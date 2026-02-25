import { api } from './api';

export async function getFeedbacks() {
  const response = await api.get('/feedbacks', {
    params: { limit: 10, page: 1 },
  });
  return response.data;
}

export async function postFeedback(feedback) {
  const response = await api.post('/feedbacks', feedback);
  return response.data;
}

/*  Передавати feedback як 
  { 
  name: "Jhonny Depp",
  rating: 4.5,
  descr: "Some text with user`s comment about application"
  }   
   
  очікуваний return 
  {
    message: "Feedback is processed"
  }
*/

const ratingInputs = document.querySelectorAll('.rating input');
let rating = 0;
ratingInputs.forEach(input => {
  input.addEventListener('change', event => {
    rating = event.target.value;

    console.log(`Рейтинг: ${rating}`);
    return rating;
  });
});
