//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('iframe').style.display = 'none'

async function getFetch(){
  try{
    const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=pjAkYXeMOqa6HFkgwS8x90XQzITdQX7YfjCozNAy&date=${choice}`
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await res.json()
    if(data.media_type === 'image'){
      document.querySelector('img').src = data.hdurl
    }else if(data.media_type === 'video'){
      document.querySelector('iframe').src = data.url
      document.querySelector('iframe').style.display = 'inline'
    }
    
    document.querySelector('h3').innerText = data.explanation
  }catch(err){
    console.log(`error ${err}`)
  }
}