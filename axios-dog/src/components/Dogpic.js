import axios from 'axios';



const Dogpic = async () => {


  const response = await axios.get('https://dog.ceo/api/breeds/image/random')

  return(response.data.message)

}

export default Dogpic
