const replies = document.querySelectorAll('#reply')
let comment = null
for (const reply of replies) {
  reply.addEventListener('click', () => {
    console.log('clicked')
    comment = document.getElementById(reply.dataset.note)
    console.log(comment)
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