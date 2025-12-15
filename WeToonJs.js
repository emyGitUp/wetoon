
function postComment()
{
    let li = document.createElement("li");
    let userInput = document.getElementById("userInput").value;
    let text = document.createTextNode(userInput);

    li.appendChild(text);
    document.getElementById("comments-section").appendChild(li);
  /*document.getElementById('userInput').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const commentText = document.getElementById('userInput').value;
  if (commentText.trim() === '') return;
  
  const commentList = document.getElementById('userInput');
  const commentItem = document.createElement('li');
  commentItem.textContent = commentText;
  
  commentList.appendChild(commentItem);
  document.getElementById('userInput').value = ''; // clear the input
}); */
}

function showGif() 
{
    document.getElementById('gif')
    .style.display = "block";
    document.getElementById('think')
    .style.display = "none";
}
function replySub() 
{
    let rep = document.getElementById('reply')
    rep.style.display = "block";
    
}