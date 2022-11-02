const replies = document.querySelectorAll('#reply')
let comment = null
for (const reply of replies) {
  reply.addEventListener('click', () => {
    comment = document.getElementById(reply.dataset.note)
    toggleReply()
  })
}

const toggleReply = () => {
  if (comment.style.display === 'none') {
    comment.style.display = 'contents'
  } else {
    comment.style.display = 'none'
  }
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};
