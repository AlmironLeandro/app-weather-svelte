//TODO: Create a interface for the data
// interface data {
//     current:object,
//     location:object
// }

export default async function getWeather() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '211d7a53e4msh52618e4db279991p1d35ccjsneddd248fb155',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
  const res = await  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Buenos%20aires', options);
    const data   = await res.json();
    let { current, location }  = data  
    let { temp_c, condition, humidity, feelslike_c ,precip_in, vis_km} = current

    let { text, icon} = condition
    let { name, country } = location
    
    return {
        name, country, temp_c, condition, humidity,
        feelslike_c, text, icon ,precip_in ,vis_km
    }
    
    
 
    
}